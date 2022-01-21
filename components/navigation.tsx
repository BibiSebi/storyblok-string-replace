import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/documentation">
            <a>Documentation</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
