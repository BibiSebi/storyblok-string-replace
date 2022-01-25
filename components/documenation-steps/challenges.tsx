import {
  ClipboardListIcon,
  ClockIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import Article from "../article";
import { ICard } from "../card";
import CardList from "../card-list";

const challenges: ICard[] = [
  {
    title: "Time",
    desc: "time limits",
    icon: ClockIcon,
  },
  {
    title: "Personal Scope",
    desc: "many ideas, prioritizing",
    icon: CollectionIcon,
  },
  { title: "Requirements", desc: "open scope", icon: ClipboardListIcon },
];

const Challenges = () => {
  return (
    <Article title="Challenges">
      <>
        <p className="my-4">
          Like during any other project, I encountered several challenges. Here
          is a short list of some of them:
        </p>
        <CardList list={challenges} />
      </>
    </Article>
  );
};

export default Challenges;
