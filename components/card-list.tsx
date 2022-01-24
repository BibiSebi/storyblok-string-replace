import TodoItem, { ICard } from "./card";

interface CardListProps {
  list: ICard[];
}
const CardList = ({ list }: CardListProps) => {
  return (
    <ul className="flex w-full my-2 flex-wrap flex-row">
      {list.map((item, idx) => (
        <li className=" w-full md:w-1/2 xl:w-1/3 p-4" key={idx}>
          <TodoItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
