import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Correct import

function Navbar() {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setIsUserAuthenticated(false);
        navigate("/");
    };

    const tokenValidation = () => {
        const userToken = localStorage.getItem("token");
        if (userToken) {
            try {
                const decodedToken = jwtDecode(userToken);
                setIsUserAuthenticated(true);
                setUsername(decodedToken.username); // Assuming username is in the token
            } catch (error) {
                setIsUserAuthenticated(false);
                console.log("Invalid Token", error);
            }
        }
    };

    useEffect(() => {
        tokenValidation();
    }, []);

    return (
        <nav className="flex justify-evenly items-center bg-slate-800 text-white p-8 sticky w-full top-0">
            <div className="text-3xl text-orange-600">eTickets</div>
            <div className="flex gap-6 place-items-center">
                {!isUserAuthenticated ? (
                    <>
                        <button className="btn btn-info">
                            <Link to="/login">Login</Link>
                        </button>
                        <button className="btn btn-info">
                            <Link to="/register">Sign Up</Link>
                        </button>
                    </>
                ) : (
                    <Link to="/contact">Contact Us</Link>
                )}
                {isUserAuthenticated ? (
                    <details className="dropdown bg-slate-800">
                        <summary className="btn m-1">Hi, {username}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
                            <li>
                                <a className="text-black" onClick={logout}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </details>
                ) : null}
            </div>
        </nav>
    );
}

export default Navbar;
