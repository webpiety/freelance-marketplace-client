import React, { useEffect, useState } from "react";
import JobsCard from "../Components/JobsCard";
import TrendedCategory from "../Components/TrendedCategory";
import { ChevronDown } from "lucide-react";
import AboutUs from "../Components/AboutUs";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2173/jobs/latest")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto mt-24 px-4">
      <h2 className="text-3xl font-extrabold text-gray-800 drop-shadow-lg text-center ">
        Explore the <span className="text-accent">Latest Job</span>{" "}
        Opportunities
      </h2>
      <div className="flex justify-center items-center mb-4 mt-4">
        <ChevronDown size={50} className="animate-bounce text-gray-700" />
      </div>

      {/* Relaxed Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <JobsCard key={index} job={job} />
        ))}
      </div>

      {/* Trended Categories */}
      <div className="mt-24 mb-24">
        <TrendedCategory />
      </div>
      <div>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;
