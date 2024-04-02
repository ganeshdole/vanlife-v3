import { Button } from '@/components/ui/button';
import React from 'react';
import hostImg from '@/assets/images/host.jpg';
import { MdControlCamera } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import CampervanRentalSteps from '@/components/CampervanRentalSteps/CampervanRentalSteps';  

const Host: React.FC = () => {
    return (
        <section className='p-8'>
            <div className='flex flex-col justify-center items-center  lg:grid grid-cols-10 md:px-8'>
                <div className='
                row-span-full
                col-span-6 
                col-end-6 
                self-center
                w-full 
                lg:max-w-[450px]
              bg-white 
                p-8 
               
                rounded-t-lg
                lg:rounded-lg
                shadow-md
                '> 
                <h2 className='text-2xl font-bold'>🌟 Seize the Adventure!</h2>
                <p className='mt-4 font-semibold'>Unlock the door to your Vanlife odyssey with our exclusive limited-time offer! List your campervan now and relish your first two bookings without any commission fees!</p>
                <h3 className='mt-4 text-xl font-semibold'>💰 Earn up to $30,000 annually!</h3>
                <p className='text-sm text-gray-500'>This is an estimation that is based on the projected nightly prices and occupancy rates for the entire year.</p>
                <p className='mt-5'>Don't miss out on this thrilling opportunity to turn your wheels into wealth!</p>
               <div className='mt-4 flex justify-center'>
                <Button className='bg-orange-500'>Start Listing</Button>
               </div>
                </div>
                <div className='lg:order-[-1] row-span-full col-start-4  col-span-8'>
                    <img src={hostImg} className='self-center style="object-fit: cover; object-position: center center  lg:rounded-lg lg:max-h-[600px]' />
                </div>
            </div>
            <div className='m-8'>
                <p className='text-2xl font-bold '>Why should I rent out my campervan with #VANLIFE?</p>
                <Stats/>
            </div>
            <div className='flex flex-col text-center gap-8 w-[100%]' >
            <h3 className='font-semibold text-lg'>How to rent out my campervan?</h3>
             <CampervanRentalSteps/>
            </div>
        </section> 
    );
};

export default Host;

const stats = [
    { 
        id: 1, 
        icon: <MdControlCamera />,
        value: 'You are in the drivers seat',
        description: 'You have the flexibility to manage your own rates, adjust for seasonality, and choose when and to whom you wish to rent your campervan.'
    },
    { 
        id: 2,
        icon: <FaStar/> ,
        value: 'Earn extra income',
        description: 'Generate extra income to boost your savings or finance your dream adventure. You might even kickstart a new side-business.'
     },
    { 
        id: 3,
        icon: <FaMoneyBillTrendUp/>,
        value: 'Trusted by 100k+ customers' 
        ,
         description: 'Become part of a platform renowned for its top customer satisfaction, boasting a 4.5/5.0 star rating on Trustpilot and other reputable platforms'
    },
  ]


function Stats() {
    return (
        <div className="bg-transparent py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-8 gap-y-16">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dd className="order-first text-4xl text-indigo-700">{stat.icon}</dd>
                <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                  {stat.value}
                </dd>
                <dd className="text-base text-gray-500">{stat.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
    )
  }