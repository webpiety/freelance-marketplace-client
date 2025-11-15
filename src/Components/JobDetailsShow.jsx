import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const JobDetailsShow = () => {
  const { user } = use(AuthContext);
  const jobsDetails = useLoaderData();
  console.log("Job", jobsDetails);
  const jobModalRef = useRef(null);

  const handleApplyJob = () => {
    const newTask = {
      jobApplyId: jobsDetails._id,
      title: jobsDetails.title,
      buyerEmail: jobsDetails.userEmail,
      buyerImage: jobsDetails.coverImage,
      budget: jobsDetails.budget,
      buyer_name: jobsDetails.postedBy,
      status: jobsDetails.status,
      createdDate: jobsDetails.createdDate,
      user_email: user.email,
    };
    console.log("newTask", newTask);
    axios
      .post(
        "https://freelance-marketplace-server-six.vercel.app/myTasks",
        // { authorization: `Bearer ${user.accessToken}` },
        newTask
      )
      .then((res) => {
        console.log("Inserted:", res.data);
        toast.success("Successfully applied for the job");
      })
      .catch((err) => {
        console.log("Error:", err);
        toast("Already added the job or You cant apply your own job");
      });
  };
  const handleJobModalOpen = () => {
    jobModalRef.current.showModal();
  };
  const handleUpdateJob = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.coverImage.value;
    console.log(title, category, summary, coverImage);
    const updateJob = {
      title,
      category,
      summary,
      coverImage,
    };

    fetch(
      `https://freelance-marketplace-server-six.vercel.app/jobs/${jobsDetails._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(updateJob),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Update", data);
        if (data.modifiedCount) {
          toast.success("Successfully update your job");
          jobModalRef.current.close();
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Update is not successful");
      });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
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
            class=" sm:w-auto flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-emerald-500 text-white font-semibold shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            Apply for this Job
          </button>
          {user.email === jobsDetails.userEmail && (
            <div>
              <button
                onClick={handleJobModalOpen}
                class=" sm:w-auto flex-1 py-3 px-8 rounded-xl bg-gradient-to-r from-primary to-emerald-500 text-white font-semibold shadow-md hover:scale-[1.02] transition-transform duration-300"
              >
                Update Job
              </button>

              <dialog
                ref={jobModalRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3
                    className="font-bold text-lg text-center gentle-float text-glow
                 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400
                 bg-clip-text text-transparent transform transition-all
                 duration-300 hover:scale-105"
                  >
                    Update The Job
                  </h3>
                  <form onSubmit={handleUpdateJob} class="space-y-4">
                    <div>
                      <label class="block font-semibold mb-1">Job Title</label>
                      <input
                        required
                        defaultValue={jobsDetails.title}
                        type="text"
                        name="title"
                        placeholder="Full Stack Developer"
                        class="w-full border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    </div>

                    <div>
                      <label class="block font-semibold mb-1">Image URL</label>
                      <input
                        required
                        defaultValue={jobsDetails.coverImage}
                        type="url"
                        name="coverImage"
                        placeholder="httpd://www.image.com"
                        class="w-full border p-3 rounded-md"
                      />
                    </div>

                    <div>
                      <label class="block font-semibold mb-1">Category</label>
                      <select
                        className="w-full py-4 border-2 border-gray-400"
                        id="category"
                        name="category"
                      >
                        <option value="">--Select a category--</option>
                        <option value="web-development">Web Development</option>
                        <option value="design">Design</option>
                        <option value="writing">Writing</option>
                        <option value="marketing">Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label class="block font-semibold mb-1">
                        Job Summary
                      </label>
                      <textarea
                        required
                        defaultValue={jobsDetails.summary}
                        name="summary"
                        placeholder="Write a short summary..."
                        class="w-full border p-3 rounded-md"
                        rows="3"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      class="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Update
                    </button>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn bg-accent text-white">
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailsShow;
