import React, { use } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const AddJobShow = () => {
  const { user } = use(AuthContext);
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
      budget,
      createdDate,
      status: "Pending",
      userEmail: user.email,
      postedBy: user.displayName,
    };
    fetch("http://localhost:2173/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("NEW", data);
        toast.success("Job add successful");
        e.target.reset;
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
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Image URL</label>
            <input
              type="url"
              name="coverImage"
              placeholder="httpd://www.image.com"
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Full Stack"
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Job Summary</label>
            <textarea
              name="summary"
              placeholder="Write a short summary..."
              class="w-full border p-3 rounded-md"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label class="block font-semibold mb-1">Budget ($)</label>
            <input
              type="number"
              name="budget"
              placeholder="100"
              class="w-full border p-3 rounded-md"
            />
          </div>

          <div>
            <label class="block font-semibold mb-1">Created Date</label>
            <input
              type="date"
              name="createdDate"
              placeholder="2025-11-06"
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
