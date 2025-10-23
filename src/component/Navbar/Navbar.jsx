import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => console.log("Logged out"))
            .catch((error) => console.error(error));
    }
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/extra"
                    className={({ isActive }) =>
                        isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
                    }
                >
                    Extra
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-profile"
                    className={({ isActive }) =>
                        isActive ? "text-purple-600 font-semibold" : "hover:text-purple-500"
                    }
                >
                    My Profile
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link to="/" className="text-2xl font-bold text-purple-600">
                        SKTOYSHOP
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-4 px-1">{navLinks}</ul>
                </div>

                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user?.displayName || "User"}
                            >
                                <img
                                    src={user?.photoURL || "https://i.ibb.co/2WcvbV3/default-user.png"}
                                    alt="user"
                                    className="w-10 h-10 rounded-full border-2 border-purple-400"
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

            <div className="md:hidden bg-white border-t">
                <ul className="flex justify-center gap-4 py-2">{navLinks}</ul>
            </div>
        </div>
    );
};


export default Navbar;