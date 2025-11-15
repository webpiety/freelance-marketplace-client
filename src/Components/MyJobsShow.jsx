import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyJobsShow = ({ myJobs: initialTasks }) => {
  const [myTasks, setMyTasks] = useState(initialTasks);
  console.log;

  useEffect(() => {
    setMyTasks(initialTasks);
  }, [initialTasks]);

  const handleRemove = async (_id) => {
    try {
      const res = await fetch(`http://localhost:2173/myTasks/${_id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount) {
        const remainingTasks = myTasks.filter((task) => task._id !== _id);
        setMyTasks(remainingTasks);
        toast.success("Successfully Completed or Delete the job successfully");
      } else {
        toast.error("Task not found");
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not delete task");
    }
  };

  const handleDone = (_id) => {
    handleRemove(_id); // same as remove
  };
  return (
    <div className="max-w-[1300px] mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>S/L</th>
              <th>Buyer Photo</th>
              <th>Name & Profession</th>
              <th>Title</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {myTasks.map((task, index) => (
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={task.buyerImage} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {task.buyer_name}
                  <br />
                  <span className="badge badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{task.title}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {task.budget} $
                  </button>
                </th>
                <td>
                  <span className="badge badge-secondary badge-sm">
                    {task.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleDone(task._id)}
                    className="btn btn-outline btn-info"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => handleRemove(task._id)}
                    className="btn btn-outline btn-info"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobsShow;
