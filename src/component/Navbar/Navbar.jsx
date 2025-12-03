// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router';
// import { AuthContext } from '../../provider/AuthProvider';

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const handleLogout = () => {
//         logOut()
//             .then(() => console.log("Logged out"))
//             .catch((error) => console.error(error));
//     }
//     const navLinks = (
//         <>
//             <li>
//                 <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                         isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
//                     }
//                 >
//                     Home
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/my-orders"
//                     className={({ isActive }) =>
//                         isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
//                     }
//                 >
//                     My Orders
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink
//                     to="/my-profile"
//                     className={({ isActive }) =>
//                         isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
//                     }
//                 >
//                     My Profile
//                 </NavLink>
//             </li>
//         </>
//     );

//     return (
//         <div className="bg-white shadow-md sticky top-0 z-50">
//             <div className="navbar container mx-auto">
//                 <div className="navbar-start">
//                     <Link to="/" className="text-2xl font-bold text-purple-600">
//                         SKToyShop
//                     </Link>
//                 </div>

//                 <div className="navbar-center hidden md:flex">
//                     <ul className="menu menu-horizontal gap-4 px-1">{navLinks}</ul>
//                 </div>

//                 <div className="navbar-end">
//                     {user ? (
//                         <div className="flex items-center gap-3">
//                             <div
//                                 className="tooltip tooltip-bottom"
//                                 data-tip={user?.displayName || "User"}
//                             >
//                                 <img
//                                     src={user?.photoURL}
//                                     alt="user"
//                                     referrerpolicy="no-referrer"
//                                     className="w-10 h-10 rounded-full border-2 border-purple-400"
//                                 />
//                             </div>
//                             <button
//                                 onClick={handleLogout}
//                                 className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700"
//                             >
//                                 Logout
//                             </button>
//                         </div>
//                     ) : (
//                         <Link
//                             to="/login"
//                             className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700"
//                         >
//                             Login
//                         </Link>
//                     )}
//                 </div>
//             </div>

//             <div className="md:hidden bg-white border-t">
//                 <ul className="flex justify-center gap-4 py-2">{navLinks}</ul>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-600 font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/all-items"
          className={({ isActive }) =>
            isActive ? "text-purple-600 font-semibold" : ""
          }
        >
          All Items
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-600 font-semibold" : ""
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-purple-600 font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive ? "text-purple-600 font-semibold" : ""
          }
        >
          Support
        </NavLink>
      </li>

      {/* Private links – only visible after login */}
      {user && (
        <>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              My Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-profile"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-purple-50 shadow-md">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link to="/" className="text-3xl font-bold text-purple-700">
            SKToyShop
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-6 font-medium">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Tooltip */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-purple-500"
                />
              </div>

              <button
                onClick={handleLogout}
                className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-purple-600 text-white hover:bg-purple-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
