import { NextApiRequest, NextApiResponse } from "next";
import { StoryblokManagementClient } from "../../../utils/storyblok";
import { BadRequest } from "./../../../constants/errors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { spaceId, toReplace, replaceWith } = req.query;

  if (typeof toReplace === "undefined" || typeof replaceWith === "undefined") {
    return res.status(555).json(BadRequest);
  }

  switch (req.method) {
    case "GET":
      const passed = await handling(
        spaceId as string,
        toReplace as string,
        replaceWith as string
      );
      passed ? res.status(200).json({}) : res.status(555).json({});
      break;
  }
}

const replaceString = (
  input: any,
  replaceRegExp: RegExp,
  replaceWith: string
) => {
  if (typeof input === "string") {
    return input?.replace(replaceRegExp, replaceWith);
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

const createStringReqExp = (value: string) => {
  return new RegExp(value, "g");
};

const handling = async (
  spaceId: string,
  toReplace: string,
  replaceWith: string
) => {
  try {
    const allStoriesWithText: any = await StoryblokManagementClient.get(
      `spaces/${spaceId}/stories`,
      {
        text_search: toReplace,
      }
    );

    const regexp = createStringReqExp(toReplace);

    for (const story of allStoriesWithText.data.stories) {
      const onestory = await StoryblokManagementClient.get(
        `spaces/138182/stories/${story.id}`
      );

      const newData = replaceString(
        onestory.data.story.content,
        regexp,
        replaceWith
      );

      await StoryblokManagementClient.put(`spaces/138182/stories/${story.id}`, {
        content: newData,
        publish: 1,
      });
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// console.log(recurse({
//   "this":"that",
//   "test":"test",
//   "someth":null,
//   "emptyArr":[],
//   "stringArr":['one','two'],
//   "numberArr":[12,2,3,4],
//   "emptyobj":{},
//   "otherObj": {
//   "otherThis":"otherThat",
//    "array": [
//      {"hello":"text1"},
//      {"otherHello":"text"}
//    ]
// }
// }));
