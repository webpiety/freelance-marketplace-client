import React from "react";
import Header from "../Components/Header";
import MyFooter from "../Components/MyFooter";
import JobDetailsShow from "../Components/JobDetailsShow";

const JobDetails = () => {
  return (
    <div>
      <Header></Header>
      <main><JobDetailsShow></JobDetailsShow></main>
      <MyFooter></MyFooter>
    </div>
  );
};

export default JobDetails;
