import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import MyFooter from "../Components/MyFooter";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
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

export default AuthLayout;
