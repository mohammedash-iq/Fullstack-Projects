import { Link } from "react-router-dom";
import { AiFillPlusCircle, AiFillPlusSquare } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to={"/"}>
          <h1 className=" text-xl">Product Display</h1>
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1">
          <Link to={"/create"}>
            <button className="px-5 py-2 bg-gray-400 rounded-2xl hover:bg-gray-500">
              Create
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
