import { Link } from "react-router-dom";

export const Nav = () => (
    <div className="flex items-center justify-between px-4 h-[70px] w-full bg-gradient-to-r from-gray-700 to-gray-900">
        <h1 className="text-4xl text-white font-bold">My Stopwatch</h1>
        <div>
        <ul className="flex flex-row justify-between items-end w-full space-x-4">
            <li className="text-white text-2xl hover:text-gray-300"><Link to="/">Home</Link></li> 
            <li className="text-white text-2xl hover:text-gray-300"><Link to="/About">About</Link></li>
            <li className="text-white text-2xl hover:text-gray-300"><Link to="/Blogs">Blogs</Link></li>
        </ul>
        </div>
    </div>
);