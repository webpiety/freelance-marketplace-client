import React, { useState } from "react";
import Header from "../Components/Header";
import MyJobsShow from "../Components/MyJobsShow";
import MyFooter from "../Components/MyFooter";

const AcceptedTask = () => {
  const [myJobs, setMyJobs] = useState([]);

  useState(() => {
    fetch("http://localhost:2173/myTasks")
      .then((res) => res.json())
      .then((data) => setMyJobs(data));
  }, []);
  console.log("MY JOBS", myJobs);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <MyJobsShow></MyJobsShow>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
};

export default AcceptedTask;
