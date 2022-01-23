import React, { SVGProps } from "react";

export interface ICard {
  title: string;
  desc: string;
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
interface ICardProps extends ICard {}

const Card = ({ title, desc, icon }: ICardProps) => {
  return (
    <div className="w-auto px-8 py-4 border border-blue-300 rounded-lg flex-grow flex flex-col h-full relative items-center justify-start">
      {icon &&
        React.createElement(icon, {
          className: "w-8 h-8 rounded-full bg-blue-200 p-2",
        })}

      <span className="font-bold ">{title}</span>
      {desc && <span className="text-center">{desc}</span>}
    </div>
  );
};

export default Card;
