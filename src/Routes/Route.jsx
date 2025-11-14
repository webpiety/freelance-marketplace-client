import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../Pages/AllJobs";
import AddJobs from "../Pages/AddJobs";
import AcceptedTask from "../Pages/AcceptedTask";
import JobDetails from "../Pages/JobDetails";
import { Suspense } from "react";
import LoadingSpinner from "../Pages/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
    element: (
      <PrivateRoute>
        <AllJobs></AllJobs>
      </PrivateRoute>
    ),
  },
  {
    path: "/addJobs",
    element: (
      <PrivateRoute>
        <AddJobs></AddJobs>
      </PrivateRoute>
    ),
  },
  {
    path: "/acceptedTask",
    element: (
      <PrivateRoute>
        <AcceptedTask></AcceptedTask>
      </PrivateRoute>
    ),
  },
  {
    path: "/jobs/:id",
    loader: ({ params }) => fetch(`http://localhost:2173/jobs/${params.id}`),
    element: (
      <PrivateRoute>
        <Suspense
          fallback={
            <div>
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
          <JobDetails></JobDetails>
        </Suspense>
      </PrivateRoute>
    ),
  },
]);
export default router;
