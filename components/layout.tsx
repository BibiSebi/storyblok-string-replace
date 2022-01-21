import Navigation from "./navigation";

interface LayoutComponent {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutComponent) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
