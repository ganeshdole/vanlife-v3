
import { Link } from "react-router-dom";
import {Button} from "../ui/button";



function Navbar()
{
    return(
      <>
      <Link to="/" className="text-2xl font-extrabold" >
            #VANLIFE
      </Link>
      <nav className="flex ml-auto gap-10 ">
        <Menu/>
      </nav>
      <div>
       <Button> <Link to="/login" className="nav-link px-2"  >Login</Link></Button>
      </div>
      </>
    )
}

export default Navbar;

function Menu() {
  return (
    <div className="nav-links  px-5">
      <ul className="flex gap-10">
        <li>
          <Link to="/host" className="font-semibold nav-link">Host</Link>
        </li>
        <li>
          <Link to="/about" className="font-semibold  nav-link">About</Link>
        </li>
        <li>
          <Link to="/vans" className="font-semibold  nav-link">Vans</Link>
        </li>
      </ul>
    </div>
  );
}