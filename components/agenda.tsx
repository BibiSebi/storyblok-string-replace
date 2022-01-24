interface AgendaComponent {
  list: string[];
}

const Agenda = ({ list }: AgendaComponent) => {
  return (
    <ol className="w-full px-8 py-4 rounded-lg ">
      {list.map((listItem, idx) => (
        <li className="list-decimal list-inside" key={idx}>
          {listItem}
        </li>
      ))}
    </ol>
  );
};

export default Agenda;
