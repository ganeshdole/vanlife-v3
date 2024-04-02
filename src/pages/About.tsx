import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const About: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="
        flex    
        bg-about    
        h-[400px]
        w-full
        bg-cover 
        bg-bottom
        bg-no-repeat
        min-w-screen
        justify-center
        items-center 
        md:justify-start
        md:items-end
        flex-row    
        bg-blend-darken
        ">
            <h2 className="text-6xl font-extrabold text-black md:text-white text-center md:px-10 md:py-5 ">About Us</h2>
           
            </div>
            <div className='max-w-[800px] mt-5 px-8'>
            <p className='text-5xl font-extrabold'>Don’t squeeze in a sedan when you could relax in a van.</p>
            <p className='py-4'>Welcome to #VANLIFE, your one-stop destination for campervan adventures. Whether you're a seasoned campervan enthusiast or a curious newcomer, we're here to make your road trip dreams a reality.</p>
            <p className='py-4'>At Vanlife, we believe in the transformative power of van life. It's an opportunity to escape the ordinary, embrace the open road, and connect with nature on a deeper level. It's about forging new paths, discovering hidden gems, and creating memories that will last a lifetime.</p>
            </div>
            <div >
                <div className='flex md:flex-row flex-col gap-4 m-4'>
                    <Card className='p-4 bg-orange-100'>
                        <div className='max-w-[600px] '>
                            <h3 className='font-bold text-xl'>Rent a Van</h3> 
                            <p className='mt-4'>Our comprehensive fleet of campervans caters to every need and budget. From compact pop-top vans to spacious motorhomes, we have the perfect vehicle to suit your adventure plans. Each campervan ismeticulously maintained and equipped with all the essentials for a comfortable and enjoyable journey.</p>
                        </div>
                    </Card>
                    <Card className='p-4 bg-orange-100'>
                        <div className='max-w-[600px]'>
                            <h3 className='font-bold text-xl'>Host Your Van</h3>
                            <p className='mt-4'>If you own a campervan that's not in constant use, why not share it with others and earn some extra income? With #VANLIFE, you can list your campervan for rent and reach a wide network of potential renters. We handle the booking process, payments, and insurance, so you can sit back and relax while earning passive income.</p>
                        </div>
                    </Card>
                </div>
                <div className='flex md:flex-row flex-col gap-4 m-4'>
                    <Card className='p-4 bg-orange-100'>
                        <div className='max-w-[600px]'>
                            <h3 className='font-bold text-xl' >Our Community</h3>
                            <p className='mt-4'>Join our vibrant community of campervan enthusiasts and connect with fellow adventurers. Share your experiences, exchange tips, and discover new destinations along the way. We're here to support you every step of your van life journey.</p>
                        </div>
                    </Card>
                    <Card className='p-4 bg-orange-100'>
                        <div className='max-w-[600px]'>
                            <h3 className='font-bold text-xl'>Embrace the #VANLIFE Experience</h3>
                            <p className='mt-4'>#VANLIFE is more than just renting a campervan; it's a lifestyle. It's about embracing the freedom of the open road, exploring new horizons, and living life on your own terms. Let us be your guide as you embark on your unforgettable #VANLIFE adventure.</p>
                            </div>
                    </Card>
                </div>
            </div>
            <Card className='flex flex-col gap-4 max-w-[600px] p-10 bg-[#FFCC8D]  mt-8'>
                <p className='font-bold text-4xl'>Your destination is waiting.Your van is ready.</p>
                <Button className=''>Explore our vans</Button>
            </Card>
        </div> 

    );
};


export default About;


