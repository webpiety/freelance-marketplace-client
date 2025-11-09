import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllJobs from "../Pages/AllJobs";
import AddJobs from "../Pages/AddJobs";
import AcceptedTask from "../Pages/AcceptedTask";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/allJobs",
    element: <AllJobs></AllJobs>,
  },
  {
    path: "/addJobs",
    element: <AddJobs></AddJobs>,
  },
  {
    path: "/acceptedTask",
    element: <AcceptedTask></AcceptedTask>,
  },
]);
export default router;
