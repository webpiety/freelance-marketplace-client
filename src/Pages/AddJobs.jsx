import React from "react";
import Header from "../Components/Header";
import MyFooter from "../Components/MyFooter";
import AddJobShow from "../Components/AddJobShow";

const AddJobs = () => {
  return (
    <div>
      <footer>
        <Header></Header>
      </footer>
      <main>
        <AddJobShow></AddJobShow>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
};

export default AddJobs;
