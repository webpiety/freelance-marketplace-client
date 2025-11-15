import React from "react";
import Header from "../Components/Header";
import ShowUpdateJob from "../Components/ShowUpdateJob";
import MyFooter from "../Components/MyFooter";

const UpdateJob = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <ShowUpdateJob></ShowUpdateJob>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
};

export default UpdateJob;
