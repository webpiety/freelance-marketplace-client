import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo2.png";
import { AuthContext } from "../Auth/AuthProvider";
import { CiUser } from "react-icons/ci";

const Header = () => {
  const { LogOut, user } = use(AuthContext);
  const link = (
    <>
      <li>
        <NavLink className="hover:text-[#0ea5e9]" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allJobs" className="hover:text-[#0ea5e9]">
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/addJobs" className="hover:text-[#0ea5e9]">
          Add a Job
        </NavLink>
      </li>
      <li>
        <NavLink to="/acceptedTask" className="hover:text-[#0ea5e9]">
          My Accepted Tasks
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        console.log("Log out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-black/10">
      <div className="navbar max-w-[1300px] mx-auto bg-transparent px-4 py-6 sm:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-black"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white/60 backdrop-blur-md border border-black/10 rounded-box mt-3 w-52 p-2 shadow text-black"
            >
              {link}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img
              className="w-[90px] h-10 object-contain"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{link}</ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="relative inline-block group">
            <p className="bg-primary rounded-full p-1">
              {user ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <CiUser size={25} />
              )}
            </p>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-md whitespace-nowrap">
              {user ? user.displayName : "Guest User"}
            </span>
          </div>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="text-sm font-semibold text-black hover:text-[#0ea5e9] transition"
            >
              Log Out
            </Link>
          ) : (
            <div className="flex justify-center items-center">
              <Link
                to="/auth/login"
                className="text-sm font-semibold text-black hover:text-[#0ea5e9] px-3 transition"
              >
                Sign In
              </Link>
              <Link
                to="/auth/register"
                className="relative inline-block cursor-pointer bg-gradient-to-b from-[#0ea5e9] to-[#0284c7] px-6 py-1.5 rounded-xl border border-slate-500 text-white font-semibold overflow-hidden group"
              >
                <div className="relative h-[24px] overflow-hidden flex justify-center items-center">
                  <p className="transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-6">
                    Get Started
                  </p>
                  <p className="absolute translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                    Sign Up
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
