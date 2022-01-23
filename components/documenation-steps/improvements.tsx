import Article from "../article";
import { ICard } from "../todo-item";
import CardList from "../todo-list";

//add subtexct possibility

const ImprovementTodos: ICard[] = [
  {
    title: "A11y",
    desc: "color contrasts, live regions, states",
  },
  {
    title: "Schema Api",
    desc: "only change string according to schema where type is text",
  },
  { title: "Responsivness", desc: "mobile devices, menu for mobile" },
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
