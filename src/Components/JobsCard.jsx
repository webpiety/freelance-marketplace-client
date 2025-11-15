import React from "react";

const JobsCard = ({ job }) => {
  const { title, postedBy, category, summary, coverImage, createdDate } = job;

  return (
    <div
      className="bg-base-200/10 p-4 rounded-2xl transition-all duration-500 ease-out 
             hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1 hover:scale-[1.02]
             flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex gap-4">
          <div>
            <img
              className="w-[85px] h-[82px] rounded-2xl border border-black/20 object-cover"
              src={coverImage}
              alt=""
            />
          </div>

          <div className="w-full">
            <div className="w-full">
              <h2 className="text-[1.1rem] font-semibold text-base-200">
                Needed - {title}
              </h2>
            </div>
            <p className="text-[.8rem] text-base-200/80">{postedBy}</p>

            <div className="flex justify-between mt-4 w-full">
              <p className="bg-primary px-2 py-[2px] rounded-2xl text-[.7rem] text-white">
                {category}
              </p>
              <p className="bg-secondary px-2 py-[2px] rounded-2xl text-[.7rem] text-white">
                {createdDate}
              </p>
            </div>
          </div>
        </div>

        <div className="py-[.5px] bg-black/10 px-4 mt-4"></div>

        <p className="text-[.8rem] inter-font text-base-200 mt-3 leading-relaxed">
          {summary.split(" ").slice(0, 30).join(" ")}...
        </p>
      </div>
      <div className="mt-4">
        <button className="btn btn-outline btn-info w-full">
          View Details
        </button>
      </div>
    </div>

    // <div className="bg-base-200 rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
    //   {/* Image Section */}
    //   <div className="relative">
    //     <img
    //       src={coverImage}
    //       alt={title}
    //       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
    //     />
    //     <span className="absolute top-3 right-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
    //       {category}
    //     </span>
    //   </div>

    //   {/* Content Section */}
    //   <div className="p-5 flex flex-col gap-3 flex-1">
    //     <h2 className="text-lg font-bold text-gray-800 group-hover:text-sky-600 transition-colors duration-300">
    //       {title}
    //     </h2>
    //     <p className="text-sm text-gray-500 italic">Posted by {postedBy}</p>
    //     <p className="text-gray-600 text-sm leading-relaxed">
    //       {summary.split(" ").slice(0, 22).join(" ")}...
    //     </p>

    //     <div className="flex justify-between items-center text-xs text-gray-400 mt-auto">
    //       <span>{createdDate}</span>
    //       <span className="font-medium text-sky-600">{category}</span>
    //     </div>
    //   </div>

    //   {/* Button */}
    //   <div className="p-5">
    //     <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg">
    //       View Details
    //     </button>
    //   </div>
    // </div>
  );
};

export default JobsCard;
