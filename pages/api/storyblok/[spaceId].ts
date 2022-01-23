import { NextApiRequest, NextApiResponse } from "next";
import {
  StoryblokManagmentApiResult,
  StoryblokResult,
} from "storyblok-js-client";
import { StoryblokManagementClient } from "../../../utils/storyblok";
import { BadRequest } from "./../../../constants/errors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { spaceId } = req.query;
  const { toReplace, replaceWith } = JSON.parse(req.body);

  //TODO: check if spacerid is string otherweise error

  if (typeof toReplace === "undefined" || typeof replaceWith === "undefined") {
    return res.status(400).json(BadRequest);
  }

  switch (req.method) {
    case "POST":
      const passed = await replaceStringInStories(
        spaceId as string,
        toReplace as string,
        replaceWith as string
      );
      passed ? res.status(200).json({}) : res.status(500).json(null);
      break;
  }
}

const replaceString = (
  input: any,
  replaceRegExp: RegExp,
  replaceWith: string
): any => {
  if (typeof input === "string") {
    return input.replace(replaceRegExp, replaceWith);
  }

  for (let [key, value] of Object.entries(input)) {
    if (value === null) {
      continue;
    }

    if (typeof value === "object" && !Object.keys(value).length) {
      continue;
    }

    if (Array.isArray(value) && value.length === 0) {
      continue;
    }

    if (typeof value === "string") {
      input[key] = value?.replace(replaceRegExp, replaceWith);
    }

    if (typeof value === "object" && !Array.isArray(value)) {
      input[key] = replaceString(input[key], replaceRegExp, replaceWith);
      continue;
    }

    if (Array.isArray(value)) {
      for (let val in value) {
        input[key][val] = replaceString(value[val], replaceRegExp, replaceWith);
      }
    }
  }

  return input;
};

const createStringReqExp = (value: string): RegExp => {
  return new RegExp(value, "g");
};

const getStoriesBySpaceIdWithText = async (
  spaceId: string,
  searchText: string
): Promise<StoryblokResult> => {
  return StoryblokManagementClient.get(`spaces/${spaceId}/stories`, {
    text_search: searchText,
  });
};

const getStoryById = (
  id: string,
  spaceId: string
): Promise<StoryblokResult> => {
  return StoryblokManagementClient.get(`spaces/${spaceId}/stories/${id}`);
};

const updateStory = async (
  id: string,
  spaceId: string,
  content: any
): Promise<StoryblokManagmentApiResult> => {
  return StoryblokManagementClient.put(`spaces/${spaceId}/stories/${id}`, {
    content,
    publish: 1,
  });
};

const replaceStringInStories = async (
  spaceId: string,
  toReplace: string,
  replaceWith: string
) => {
  try {
    //type
    const allStoriesWithText = await getStoriesBySpaceIdWithText(
      spaceId,
      toReplace
    );

    const regexp = createStringReqExp(toReplace);

    for (const story of allStoriesWithText.data.stories) {
      const onestory = await getStoryById(story.id, spaceId);

      const newContent = replaceString(
        onestory.data.story.content,
        regexp,
        replaceWith
      );

      await updateStory(story.id, spaceId, newContent);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
