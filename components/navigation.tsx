import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex pr-28 bg-gray-100">
      <ul className="flex flex-col w-full pl-4 pt-6">
        <li className=" p-2 ">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className=" p-2">
          <Link href="/documentation">
            <a>Documentation</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
