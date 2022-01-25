import StoryblokClient from "storyblok-js-client";

// export const StoryblokContentClient = new StoryblokClient({
//   accessToken: process.env.STORYBLOK_CONTENT_TOKEN,
//   cache: {
//     clear: "auto",
//     type: "memory",
//   },
// });

export const StoryblokManagementClient = new StoryblokClient({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN,
});
