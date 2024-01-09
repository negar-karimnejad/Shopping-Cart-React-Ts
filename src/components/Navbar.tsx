import { Link } from "react-router-dom";
import Cart from "./Cart";

function Navbar() {
  return (
    <div className="w-full bg-white h-16 shadow-sm sticky top-0">
      <div className=" md:w-4/5 mx-auto px-3 py-2 md:px-0 flex items-center justify-between">
        <ul className="flex gap-5 text-lg font-semibold text-gray-500 ">
          <li className="hover:text-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/store">Store</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="relative text-sky-600 border-2 border-sky-600 p-2 rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="absolute -bottom-1 -right-1 flex items-center justify-center text-white bg-red-500 rounded-full w-5 h-5">
            3
          </span>
        </div>
      </div>
      {/* <Cart /> */}
    </div>
  );
}

export default Navbar;
