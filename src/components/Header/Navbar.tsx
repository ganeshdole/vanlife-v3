import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <>
      <NavLink to="/" className="text-2xl font-extrabold">
        #VANLIFE
      </NavLink>
      <nav className="flex ml-auto gap-10 ">
        <Menu />
      </nav>
      <div>
        <Button>
          {" "}
          <NavLink to="/login" className="nav-NavLink px-2">
            Login
          </NavLink>
        </Button>
      </div>
    </>
  );
}

export default Navbar;

function Menu() {
  return (
    <div className="nav-NavLinks  px-5 hidden sm:block">
      <ul className="flex gap-10">
        <li>
          <NavLink to="/host" className="font-semibold nav-NavLink">
            Host
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="font-semibold  nav-NavLink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/vans" className="font-semibold  nav-NavLink">
            Our Vans
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

/*