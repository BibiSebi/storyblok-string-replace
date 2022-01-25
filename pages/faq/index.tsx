import Head from "next/head";

interface FAQ {
  question: string;
  answer: string;
}

const faqList: FAQ[] = [
  {
    question: `Hey! I love Storyblok. I built my website with Nuxt and Storyblok and have static local version.
  How and where can I deploy the static website? Can I deploy it to Storyblok?`,
    answer: ` Hello!  Nuxt has a selection of preffered services for deployment (https://nuxtjs.org/deployments) You can read more about that here. You cannot deploy your Nuxt App to Storyblok as Storyblok is not a hosting platform or deployment service.
  Here is an example of a static Nuxt App deployment on Netflify: https://vuedose.tips/generate-and-deploy-the-blog-as-a-full-static-nuxt-site. If you have any further questions please do not hesitate asking.
    `,
  },
  {
    question: `How is it possible to get the URLs of all the stories in Storyblok to generate a sitemap for my
  website?`,
    answer: `Hello! In this case you can use the Storyblok's Content Delivery API. There is a specific endpoint https://api.storyblok.com/v1/cdn/links for this use case. In case you want more details please have a look at this documentation https://www.storyblok.com/tp/how-to-generate-sitemap-headless-cms`,
  },
];

const FAQ = () => {
  return (
    <div className="w-full p-8 flex flex-col">
      <Head>
        <title>Storyblok example | FAQ</title>
      </Head>
      <h1 className="text-4xl text-center">FAQ</h1>

      <section className="mt-4 w-1/2 ">
        <ul>
          {faqList.map((faqListItem) => (
            <li className="p-4 flex flex-col">
              <span className="mb-2"> Question: {faqListItem.question}</span>
              <span>Answer: {faqListItem.answer}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FAQ;
