import Navigation from "./navigation";

interface LayoutComponent {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutComponent) => {
  return (
    <div className="min-h-screen text-black font-sans flex w-full">
      <Navigation />
      <main className="flex flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
