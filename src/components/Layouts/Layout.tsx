import Navbar from "../Header/Navbar";
import { Outlet } from "react-router-dom";
import Foooter from "../Footer/Footer";
import Copyright from "../Copyright/Copyright";

function Layout(){
    return (
        <div className="max-w-screen-2xl flex flex-col mx-auto min-h-screen bg-orange-50">
            <header className="flex h-16 items-center fixed justify-between px-8 w-full top-0 left-0 bg-orange-50">
                <Navbar/>
            </header>
            <main className="mt-16 ">
                <Outlet />
            </main>
            <footer className="mt-auto">
                <Foooter />
            </footer>
            <Copyright/>
        </div>
      
    );
}
export default Layout;