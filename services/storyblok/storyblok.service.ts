import { NextApiRequest } from "next";
import StringReplaceUtils from "../../utils/string-replacement";
import StoryblokRepository from "./storyblok.repository";
export default class StoryblokService {
  constructor(private storyblokRepository: StoryblokRepository) {}

  public replaceStringInStories = async (
    req: NextApiRequest
  ): Promise<boolean> => {
    const { spaceId } = req.query;
    const { toReplace, replaceWith } = JSON.parse(req.body);

    if (!this.isRequestValid(req)) {
      return false;
    }

    try {
      const allStoriesWithText =
        await this.storyblokRepository.getStoriesBySpaceIdWithText(
          spaceId as string,
          toReplace
        );

      const regexp = StringReplaceUtils.createStringReqExp(toReplace);

      for (const story of allStoriesWithText.data.stories) {
        const oneStory = await this.storyblokRepository.getStoryById(
          story.id,
          spaceId as string
        );

        const replacedContent = StringReplaceUtils.replaceString(
          oneStory.data.story.content,
          regexp,
          replaceWith
        );

        await this.storyblokRepository.updateStory(
          story.id,
          spaceId as string,
          replacedContent
        );
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  isRequestValid = (req: NextApiRequest) => {
    const { spaceId } = req.query;
    const { toReplace, replaceWith } = JSON.parse(req.body);
    if (
      typeof spaceId !== "string" ||
      typeof toReplace === "undefined" ||
      typeof replaceWith === "undefined"
    ) {
      return false;
    }

    return true;
  };
}
