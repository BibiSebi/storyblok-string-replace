import Agenda from "../agenda";
import Article from "../article";
import LinkChip from "../link-chip";

interface Technology {
  label: string;
  link: string;
}

const agendaList = [
  "Technologies",
  "Project Structure",
  "Core Feature",
  "Challenges",
  "Improvements",
];

const technologies: Technology[] = [
  {
    label: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    label: "tailwindcss",
    link: "https://tailwindcss.com/",
  },
  {
    label: "React Hook Form",
    link: "https://react-hook-form.com/",
  },
  {
    label: "MUI",
    link: "https://mui.com/",
  },
  {
    label: "heroicons",
    link: "https://heroicons.com/",
  },
];

const General = () => {
  return (
    <Article title="General">
      <>
        <div className="my-2">
          <h3 className="text-2xl">Task</h3>
          <p>
            Create a webapp that will use the Storyblok API to search and
            replace a string in all stories in a Storyblok space and also
            publish the changes. The app should consist of:
            <p>
              1. A simple frontend with at least two input fields
              (search/replace) and a button to trigger the action.
            </p>
            <p>
              2. A NodeJS backend to execute the task (Storyblok API
              documentation: https://www.storyblok.com/docs/api/management)
            </p>
          </p>
        </div>

        <div className="my-2">
          <h3 className="text-2xl">Agenda</h3>
          <Agenda list={agendaList} />
        </div>

        <div className="my-2">
          <h3 className="text-2xl">Technologies</h3>

          <div className="flex flex-wrap">
            {technologies.map(({ label, link }, idx) => (
              <LinkChip key={idx} label={label} link={link} />
            ))}
          </div>
        </div>

        <div className="my-2">
          <h3 className="text-2xl">Api</h3>
          <a
            href="https://mapi.storyblok.com"
            className="bg-blue-50 rounded-md p-1 mt-2"
          >
            https://mapi.storyblok.com
          </a>
        </div>
      </>
    </Article>
  );
};

export default General;