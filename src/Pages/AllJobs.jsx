import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MyFooter from "../Components/MyFooter";
import AllJobsShow from "../Components/AllJobsShow";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2173/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <div className="mt-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
            Discover Your Next <span className="text-sky-500">Opportunity</span>
          </h2>
        </div>
        <div className="max-w-[1300px] mx-auto grid grid-cols-3 gap-8 mt-20 mb-20">
          {jobs?.map((job) => (
            <AllJobsShow key={job.id} job={job} />
          ))}
        </div>
      </main>
      <MyFooter />
    </div>
  );
};

export default AllJobs;
