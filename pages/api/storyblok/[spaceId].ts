import { NextApiRequest, NextApiResponse } from "next";
import StoryblokRepository from "../../../services/storyblok/storyblok.repository";
import StoryblokService from "../../../services/storyblok/storyblok.service";
import { BadRequest } from "./../../../constants/errors";

const storyblokService = new StoryblokService(new StoryblokRepository());

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let response = true;

  switch (req.method) {
    case "POST":
      response = await storyblokService.replaceStringInStories(req);
      break;
  }

  return response ? res.status(200).json({}) : res.status(500).json(BadRequest);
}
