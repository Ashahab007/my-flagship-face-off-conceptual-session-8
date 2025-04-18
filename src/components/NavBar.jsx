import React from "react";
import { NavLink } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";

const NavBar = () => {
  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "bg-amber-200 rounded-2xl" : ""
        }
      >
        <li className="hover:bg-gray-100 rounded-2xl p-2">Home</li>
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "bg-amber-200 rounded-2xl" : ""
        }
      >
        <li className="hover:bg-gray-100 rounded-2xl p-2">About</li>
      </NavLink>
    </>
  );
  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div>{links}</div>
              {/* <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li> */}
            </ul>
          </div>
          <a className="text-xl font-extrabold">FlagShipFaceOff</a>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end space-x-4">
          <div className="flex list-none gap-4">{links}</div>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "bg-amber-200 rounded-2xl" : ""
            }
          >
            <button className="btn btn-ghost hover:bg-gray-100 rounded-2xl ">
              <FaCartArrowDown size={20} />
              {/* <p>Cart</p> */}
            </button>
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "bg-amber-200 rounded-2xl" : ""
            }
          >
            <button className="btn btn-ghost hover:bg-gray-100 rounded-2xl p-2">
              <MdBookmarkAdd size={20} />
              {/* <p>Favorites</p> */}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
