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
  let response = true;

  if (typeof toReplace === "undefined" || typeof replaceWith === "undefined") {
    return res.status(400).json(BadRequest);
  }

  switch (req.method) {
    case "POST":
      response = await replaceStringInStories(
        spaceId as string,
        toReplace as string,
        replaceWith as string
      );
      break;
  }

  return response ? res.status(200).json({}) : res.status(500).json(BadRequest);
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
): Promise<boolean> => {
  try {
    const allStoriesWithText = await getStoriesBySpaceIdWithText(
      spaceId,
      toReplace
    );

    const regexp = createStringReqExp(toReplace);

    for (const story of allStoriesWithText.data.stories) {
      const oneStory = await getStoryById(story.id, spaceId);

      const newContent = replaceString(
        oneStory.data.story.content,
        regexp,
        replaceWith
      );

      await updateStory(story.id, spaceId, newContent);
    }
    return true;
  } catch (err) {
    return false;
  }
};
