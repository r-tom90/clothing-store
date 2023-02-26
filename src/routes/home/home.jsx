import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header.component";
import Directory from "../../components/directory/Directory.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <div>
      <Header />
      <Directory />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
