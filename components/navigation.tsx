import Link from "next/link";

const Navigation = () => {
  return (
    <nav className=" pr-28 bg-blue-50 hidden sm:flex">
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
        <li className=" p-2 ">
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
