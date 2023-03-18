import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { HEADER } from "../../config-global";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
