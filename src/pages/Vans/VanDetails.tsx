import React from 'react';
import { useEffect } from 'react';
import supabase from '@/Config/supabaseClient';
import { useParams } from 'react-router-dom';
import Loading from '@/components/Loading/Loading';
import { Button } from '@/components/ui/button';
import { MdPerson } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { MdSoupKitchen } from "react-icons/md";
import { GiShower } from "react-icons/gi";
import { PiTentFill } from "react-icons/pi";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';


const VanDetails: React.FC = () => {
    const { id } = useParams();
    const [van, setVan] = React.useState<null | { star: number | null; hostId: number | null; id: number; imageUrl: string | null; name: string | null; price: number | null; type: string | null; }[]>(null);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase.from('vans').select('*').eq('id', parseInt(id || ''));
            if (error) {
                throw new Error(error.message);
            }
            setVan(data);
        };
        fetchData();
    }, []);

    if (!van) {
        return(
                <Loading/>
        )
    }

    if(van[0].imageUrl === null) {
        return(
            <div>
                <h1>Van not found</h1>
            </div>
        )
    }   

    return (
        <div className="p-16">
            <Link to="/vans" className='text-xl'> &larr; 
                <span className='underline'>Back to all vans </span>
            </Link>
            <h1 className='text-4xl font-extrabold'>Van Details</h1>
            <div className='grid md:grid-cols-3 grid-flow-row mt-5' >
                <div className='flex 	col-start-1 col-end-3	 items-center gap-2 pb-2s'  >
                    <img  className="md:h-[500px] w-full rounded-lg object-cover  col-start-1 col-end-3 md:rounded-e-none" src={van[0].imageUrl} alt='van' />
                </div>
                <div className='hidden md:block'>
                    <div  >
                        <img className='md:rounded-s-none rounded-lg h-[250px] w-full ' src={van[0].imageUrl} alt='van' />
                    </div>
                    <div>
                        <img  className="rounded-lg md:rounded-s-none  h-[250px] w-full " src={van[0].imageUrl} alt='van' />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-5xl font-extrabold font mt-8'>{van[0].name}</h2>
                <div className='flex gap-4'>
                <Button  className='bg-black mt-4 uppercase'> {van[0].type}</Button>
                <p className='mt-5 text-2xl font-extrabold'>${van[0].price} / night</p>
                </div>
                <hr className='mt-5 text-gray-600'/>
                <h2 className='text-3xl mt-5 font-extrabold'>Description</h2>
                <div className='md:flex justify-betweet'>
                 <div>
                    <div className=' flex mt-5 gap-5 items-center underline'>
                        <div className='flex flex-col items-center max-w-auto' >
                            <MdPerson className='text-4xl'/>
                            <p className='font-semibold' > 4 sets </p>
                        </div>
                        <div className='flex flex-col items-center max-w-auto' >
                            <IoBedOutline className='text-4xl'/>
                            <p className='font-semibold'> Sleep 2 </p>
                        </div>
                        <div className='flex flex-col items-center max-w-auto' >
                            <MdSoupKitchen className='text-4xl'/>
                            <p className='font-medium'> Kitchen </p>
                        </div>
                        <div className='flex flex-col items-center max-w-auto' >
                            <GiShower className='text-4xl'/>
                            <p className='font-medium'> Exterior shower </p>
                        </div>
                        <div className='flex flex-col items-center max-w-auto' >
                            <PiTentFill className='text-4xl'/>
                            <p className='font-medium'> Rooftop tent </p>
                        </div>
                    </div>
                    <div className='mt-4 md:w-[50%]'>
                        <h4 className='text-2xl font-semibold '>Vehicle description</h4>
                            <p className=' text-gray-700 font-medium'>
                            Introducing the Green Wonder campervan – a sustainable marvel that takes your travel adventures to the next level. This eco-friendly vehicle is designed for those who appreciate style and eco-friendliness.
                            <br />
                            The van comes with several features to enhance your eco-friendly travels, including a cooler, a collapsible ladder, a radio with AUX and USB, and a kitchen kit with a portable gas cooker.
                            <br />
                            Safety is a top priority, and the Green Wonder campervan equips you with essential tools such as a car jack, triangle, and vests. The van is equipped with automatic transmission, a rear-view camera, and a rooftop tent for comfortable sleeping accommodations.
                            The Green Wonder campervan is your sustainable and stylish gateway to eco-friendly travel. Make a statement with your eco-conscious choice and embark on eco-friendly adventures that leave a positive footprint with Green Wonder – your ideal eco-conscious travel companion. 
                            </p>
                    </div>
                </div>
                <div className='w-full h-full my-8'>
                    <Card className='bg-white rounded-lg'>
                        <CardHeader>
                            <CardTitle>From ${van[0].price}/day</CardTitle>
                            <CardDescription>Fast booking</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label htmlFor="">Start Date</Label>
                            <Input type="Date" />
                            <Label htmlFor="">End Date</Label>
                            <Input type="Date" />
                        </CardContent>
                        <CardFooter>
                           <Button className='bg-orange-400'>Check Availability</Button>
                        </CardFooter>
                    </Card>

                </div>
               </div>
            </div>
            <div className='mt-5'>
                <hr />
                <h4 className='mt-5 text-2xl font-semibold'>Cancellation policy</h4>
                <p className='font-semibold'>Our Flexible Cancellation Policy</p>
                <p className='text-gray-400'>We recognize that plans may alter, and we are committed to offering flexible options to our esteemed clients. If you decide to cancel your booking 20 or more days before your scheduled pick-up date, you will receive a full refund of the amount paid up to that date. For cancellations made within the window of less than 20 days but more than 72 hours before your scheduled check-in date, two options are available. Firstly, you can receive a 50% refund of the booking value. Secondly, you can opt for a travel voucher for the full amount of your booking value, with a 15% cancellation fee deducted. Please note that both options are applicable only if you have already paid the full amount of your booking value. Unfortunately, if you need to cancel your reservation within 72 hours of the scheduled check-in date, we regret to inform you that no refund or travel voucher will be provided. We appreciate your understanding and hope that these flexible options cater to your travel needs.</p>
            </div>
        </div>
        
    );
};

export default VanDetails;