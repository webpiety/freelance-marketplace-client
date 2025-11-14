import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const MyJobsShow = ({ myJobs: initialTasks }) => {
  const [myTasks, setMyTasks] = useState(initialTasks);

  useEffect(() => {
    setMyTasks(initialTasks);
  }, [initialTasks]);

  const handleRemove = (_id) => {
    fetch(`http://localhost:2173/myTasks/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingTasks = myTasks.filter((myTask) => myTask._id !== _id);
          setMyTasks(remainingTasks);
          toast.success("Delete the job successfully");
        }
      })
      .catch((err) => {
        console.error(err);
        toast("Not deleted");
      });
  };
  const handleDone = (_id) => {
    fetch(`http://localhost:2173/myTasks/${_id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingTasks = myTasks.filter((task) => task._id !== _id);
          setMyTasks(remainingTasks);
          toast.success("Task completed and removed permanently");
        }
      });
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
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
          {myTasks.map((task, index) => (
            <tbody>
              {/* row 1 */}
              <tr key={task._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={task.buyerImage}
                          alt="Avatar Tailwind CSS Component"
                        />
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
                    className="btn btn-outline btn-info hover:text-white hover:bg-accent"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyJobsShow;
