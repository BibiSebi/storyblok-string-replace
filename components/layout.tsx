import Navigation from "./navigation";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen text-black font-sans flex w-full">
      <Navigation />
      <main className="flex flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
