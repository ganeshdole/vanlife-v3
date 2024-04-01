import { Link } from "react-router-dom";
import {Button} from "../components/ui/button";

function Home(){
    return (
        <div className="
            min-h-screen 
            flex 
            justify-center 
            items-center 
            bg-cover  
            min-w-[100%]   
            bg-no-repeat  
            flex-col	 
            bg-center 
            px-8 

            bg-[url('./src/assets/images/hero.jpg')]
        "
        >
          <h1 className="text-5xl font-extrabold text-white mb-5 drop-shadow-md">
            You got the <span>travel plans,</span> we got the{" "}
            <span>travel vans.</span>
          </h1>
          <p className="text-xl font-semibold text-white mb-5 drop-shadow-md">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Button className="bg-orange-400 font-bold text-xl hover:bg-orange-500  ">
          <Link className="link-button px-6" to="vans">
            Find your van
          </Link>
          </Button>
        </div>
    )
}

export default Home;