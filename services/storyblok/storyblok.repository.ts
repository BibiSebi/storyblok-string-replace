import {
  StoryblokManagmentApiResult,
  StoryblokResult,
} from "storyblok-js-client";
import { StoryblokManagementClient } from "../../utils/storyblok";

export default class StoryblokRepository {
  public getStoriesBySpaceIdWithText = async (
    spaceId: string,
    searchText: string
  ): Promise<StoryblokResult> => {
    return StoryblokManagementClient.get(`spaces/${spaceId}/stories`, {
      text_search: searchText,
    });
  };

  public getStoryById = (
    id: string,
    spaceId: string
  ): Promise<StoryblokResult> => {
    return StoryblokManagementClient.get(`spaces/${spaceId}/stories/${id}`);
  };

  public updateStory = async (
    id: string,
    spaceId: string,
    content: any
  ): Promise<StoryblokManagmentApiResult> => {
    return StoryblokManagementClient.put(`spaces/${spaceId}/stories/${id}`, {
      content,
      publish: 1,
    });
  };
}
