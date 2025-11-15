import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const AddJobShow = () => {
  const [currentDate, setCurrentDate] = useState("");
  const { user } = use(AuthContext);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setCurrentDate(today);
  }, []);

  const handleAddJob = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const summary = e.target.summary.value;
    const budget = e.target.budget.value;
    const coverImage = e.target.coverImage.value;
    const createdDate = e.target.createdDate.value;
    console.log(title, category, summary, budget, coverImage, createdDate);

    const newJob = {
      title,
      category,
      summary,
      coverImage,
      budget,
      createdDate,
      status: "Pending",
      userEmail: user.email,
      postedBy: user.displayName,
    };
    fetch("https://freelance-marketplace-server-six.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("NEW", data);
        toast.success("Job add successful");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(" Job is not added");
      });
  };
  return (
    <div className="mb-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div class="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10">
        <h1 class="text-3xl font-bold text-center mb-6">Add a New Job</h1>

        <form onSubmit={handleAddJob} class="space-y-4">
          <div>
            <label class="block font-semibold mb-1">Job Title</label>
            <input
              required
              type="text"
              name="title"
              placeholder="Full Stack Developer"
              class="w-full border p-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Posted By</label>
            <input
              type="text"
              name="postedBy"
              placeholder="Rashedul Islam"
              value={user.displayName}
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="postedBy"
              placeholder="Rashedul Islam"
              value={user.email}
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Image URL</label>
            <input
              required
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
            <label class="block font-semibold mb-1">Job Summary</label>
            <textarea
              required
              name="summary"
              placeholder="Write a short summary..."
              class="w-full border p-3 rounded-md"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label class="block font-semibold mb-1">Budget ($)</label>
            <input
              required
              type="number"
              name="budget"
              placeholder="100"
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Date</label>
            <input
              type="date"
              name="createdDate"
              placeholder="2025-11-06"
              value={currentDate}
              class="w-full border p-3 rounded-md"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-primary text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobShow;
