import React from "react";
import Navbar from "./navbar";
import Carausel from "./carausel";
import Cards from "./cards/index";
import Footer from "./footer";
import Deals from "./carausel/latest_deals";
const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Cards/> */}
      <Carausel />
      <Deals/>
      <Footer/>
    </>
  );
};
export default Layout;
