import React, { use } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import axios from "axios";

const JobDetailsShow = () => {
  const { user } = use(AuthContext);
  const jobsDetails = useLoaderData();
  console.log("Job", jobsDetails);

  const handleApplyJob = () => {
    const newTask = {
      _id: jobsDetails._id,
      jobApplyId: jobsDetails._id,
      title: jobsDetails.title,
      buyerEmail: jobsDetails.userEmail,
      buyerImage: jobsDetails.coverImage,
      budget: jobsDetails.budget,
      status: jobsDetails.status,
      createdDate: jobsDetails.createdDate,
      user_email: user.email,
    };
    console.log("newTask", newTask);
    axios
      .post("http://localhost:2173/myTasks", newTask)
      .then((res) => {
        console.log("Inserted:", res.data);
      })
      .catch((err) => console.log("Error:", err));
  };
  return (
    <div>
      <div class="max-w-5xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 mb-16">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
          <div>
            <h1 class="text-3xl font-bold text-gray-800 mb-1">
              {jobsDetails.title}
            </h1>
            <p class="text-sm text-gray-500">
              Posted by{" "}
              <span class="font-medium text-sky-600">
                {jobsDetails.postedBy}
              </span>{" "}
            </p>
          </div>
          <span class="bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow">
            {jobsDetails.category}
          </span>
        </div>

        <div class="mt-6 grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
          <div class="space-y-2">
            <p>
              <span class="font-semibold text-gray-800">Budget:</span>{" "}
              {jobsDetails.budget}$
            </p>
            <p>
              <span class="font-semibold text-gray-800">Experience Level:</span>{" "}
              Intermediate
            </p>
            <p>
              <span class="font-semibold text-gray-800">Project Duration:</span>{" "}
              3 Weeks
            </p>
          </div>
          <div class="space-y-2">
            <p>
              <span class="font-semibold text-gray-800">Location:</span> Remote
            </p>
            <p>
              <span class="font-semibold text-gray-800">Job Type:</span>{" "}
              Freelance
            </p>
            <p>
              <span class="font-semibold text-gray-800">Applicants:</span> 24
              Freelancers
            </p>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-xl font-semibold text-gray-800 mb-3">
            Job Description
          </h2>
          <p class="text-gray-600 leading-relaxed">{jobsDetails.summary}</p>
        </div>

        <div class="mt-8">
          <h2 class="text-xl font-semibold text-gray-800 mb-3">
            Required Skills
          </h2>
          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1.5 bg-sky-50 text-sky-600 text-sm font-medium rounded-full border border-sky-200">
              React.js
            </span>
            <span class="px-3 py-1.5 bg-sky-50 text-sky-600 text-sm font-medium rounded-full border border-sky-200">
              Tailwind CSS
            </span>
            <span class="px-3 py-1.5 bg-sky-50 text-sky-600 text-sm font-medium rounded-full border border-sky-200">
              REST API
            </span>
            <span class="px-3 py-1.5 bg-sky-50 text-sky-600 text-sm font-medium rounded-full border border-sky-200">
              Git
            </span>
          </div>
        </div>

        <div class="mt-10 bg-gray-50 p-5 rounded-xl border border-gray-100 flex items-center gap-4">
          <img
            src={jobsDetails.coverImage}
            alt="Client Avatar"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-800">
              {jobsDetails.postedBy}
            </h3>
            <p class="text-sm text-gray-500">
              Verified Client • 12 Jobs Posted
            </p>
            <p class="text-sm text-gray-500">Rating: ⭐ 4.9 (32 Reviews)</p>
          </div>
        </div>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleApplyJob}
            class="w-full sm:w-auto flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-emerald-500 text-white font-semibold shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            Apply for this Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsShow;
