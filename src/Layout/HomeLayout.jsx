import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
