import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import MyFooter from "../Components/MyFooter";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Header></Header>
          <section>
            <Banner></Banner>
          </section>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
};

export default HomeLayout;
