import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function Vancard( {id,imageUrl,name,price,star} : { 
  star:number|null;
  id :number ;
  imageUrl: string | null;
  name: string | null;
  price: number | null;
}) {
    if (!imageUrl || !name || !price) {
      return null;
    }
    return (
      <Link to={`${id}`}>
      <div className="m-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <img src={imageUrl}
                alt={name}
                className="w-full h-52 object-cover object-center"
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
          <p className="font-bold items-center text-xl">{star} <AiFillStar className="inline-block text-yellow-500 "/></p>
        </div>
        <div className="flex-1"> </div>
        <div className="mt-4 flex items-baseline justify-between">
          <h1 className="text-xl font-bold text-gray-700">${price}/night</h1>
          <button className="rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white">Book Now</button>
        </div>
      </div>
      </div>
      </Link>
    )
  }
  