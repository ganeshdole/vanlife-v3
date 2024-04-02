export default function Vancard( {id,imageUrl,name,description,price} : { 
  id :number ;
  imageUrl: string | null;
  name: string | null;
  description: string | null;
  price: number | null;
}) {
    if (!imageUrl || !name || !description || !price) {
      return null;
    }
    return (
      <div className="m-4 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <img src={imageUrl}
                alt={name}
                className="w-full h-52 object-cover object-center"
      />
      <div className="flex flex-1 flex-col p-4">
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="flex-1"></div>
        <div className="mt-4 flex items-baseline justify-between">
          <h1 className="text-xl font-bold text-gray-700">${price}/night</h1>
          <button className="rounded bg-gray-800 px-3 py-2 text-xs font-bold uppercase text-white">Book Now</button>
        </div>
      </div>
      </div>
    )
  }
  