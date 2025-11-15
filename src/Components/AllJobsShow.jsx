import React from "react";
import { Link } from "react-router";

const AllJobsShow = ({ job }) => {
  const { _id, title, summary, coverImage, createdDate } = job;
  return (
    <div className="card card-side bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
      <figure>
        <img
          className="w-28 h-44 object-cover rounded-l-xl transition-transform duration-500 hover:scale-110"
          src={coverImage}
          alt={title}
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between h-44">
        <h2 className="card-title text-lg font-bold text-gray-800 truncate">
          Needed: {title}
        </h2>
        <p className="text-gray-600 text-sm mt-2 flex-1 overflow-hidden">
          {summary.split(" ").slice(0, 10).join(" ")}...
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <div className="bg-secondary px-3 py-1 rounded-full">
              <p className="text-white text-xs truncate">{createdDate}</p>
            </div>
          </div>
          <Link
            to={`/jobs/${_id}`}
            className="btn btn-primary btn-sm transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700 whitespace-nowrap"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllJobsShow;
