import Article from "../article";
import { ICard } from "../card";
import CardList from "../card-list";

const ImprovementTodos: ICard[] = [
  { title: "Error Handling", desc: "more details, reusable" },
  {
    title: "Schema Api",
    desc: "only change string according to schema where type is text",
  },
  { title: "Testing", desc: "unit tests" },
  {
    title: "A11y",
    desc: "color contrasts, live regions, states",
  },
  { title: "Responsiveness", desc: "mobile devices, menu for mobile" },
  { title: "UX", desc: "user feedback, loading states" },
];

const Improvements = () => {
  return (
    <Article title="Improvements">
      <>
        <p className="my-4">
          Because of the time limits there are still points to be reworked and
          improved. Here is a list with points I had in mind that could be
          improved:
        </p>

        <div className="flex w-full">
          <CardList list={ImprovementTodos} />
        </div>
      </>
    </Article>
  );
};

export default Improvements;
