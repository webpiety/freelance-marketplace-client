import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MyJobsShow from "../Components/MyJobsShow";
import MyFooter from "../Components/MyFooter";

const AcceptedTask = () => {
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
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
        <h2 class="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent gap-2 text-center mt-8 mb-8">
          Job Accepted – Full Details
        </h2>
        <section className="mb-12">
          <MyJobsShow myJobs={myJobs}></MyJobsShow>
        </section>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
};

export default AcceptedTask;
