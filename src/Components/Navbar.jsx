import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import navLogo from '../assets/logo.png';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("✅ You logged out successfully");
                navigate("/auth/login");
            })
            .catch((error) => toast.error(`❌ Logout failed: ${error.message}`));
    };

    const profileLink = user ? "/profile" : "/auth/login";

    const navLinks = (
        <>
            <NavLink className="mr-5 text-[#016630] text-lg font-bold" to="/">Home</NavLink>
            <NavLink className="mr-5 text-[#016630] text-lg font-bold" to="/plants">Plants</NavLink>
            <NavLink className="text-[#016630] text-lg font-bold" to={profileLink}>My Profile</NavLink>
        </>
    );

    return (
        <div className="navbar bg-[#46a96a] shadow-sm px-6">
            
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                    >
                        {navLinks}

                    </ul>
                </div>
                <NavLink to="/"><img height={40} width={100} src={navLogo} alt="Logo" /></NavLink>
            </div>

            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

           
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        
                        <label tabIndex={0} className="btn btn-ghost p-0">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img src={user.photoURL || "/avatar.png"} alt="User" className="w-full h-full object-cover" />
                            </div>
                        </label>

                        
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <span className="font-semibold text-green-800">{user.displayName || "Unnamed User"}</span>
                            </li>
                            {/* <li>
                                <NavLink to="/profile">My Profile</NavLink>
                            </li> */}
                            <li>
                                <button onClick={handleLogOut}>Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="space-x-5">
                        <NavLink to="/auth/login" className="btn bg-[#008236]">Login</NavLink>
                        <NavLink to="/auth/sign-up" className="btn bg-[#008236]">Register</NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;







{/* <details>
    <summary>Parent</summary>
    <ul className="p-2">
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
    </ul>
</details> */}



// const profileLink = user ? "/profile" : "/auth/login";
{/* <NavLink className="text-[#016630] text-lg font-bold" to={profileLink}>My Profile</NavLink> */}