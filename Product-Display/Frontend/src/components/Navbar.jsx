import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1>Product Display</h1>
      </Link>
      <button>
        <Link to={"/create"}>
          <AiFillPlusCircle></AiFillPlusCircle>
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
