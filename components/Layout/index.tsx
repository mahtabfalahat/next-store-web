import React, { useContext, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";


interface LayoutProps extends React.PropsWithChildren {}
export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}): JSX.Element => {
  
  return (
    <div className="min-h-screen grid grid-rows-[80px_1fr_auto]">
    <div className="flex flex-col  min-h-screen ">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  </div>
  ); 
};
 