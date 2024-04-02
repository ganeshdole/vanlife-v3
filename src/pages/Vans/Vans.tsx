import supabase from "@/Config/supabaseClient";
import { useEffect } from "react";
import { useState } from "react";
import Vancard from "@/components/VanCard/Vancard";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Vans: React.FC = () => {
   const [vans,setVans] = useState<null | { description: string | null; hostId: number | null; id: number; imageUrl: string | null; name: string | null; price: number | null; type: string | null; }[]>(null);
    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase.from('vans').select('*');
            if(error)
            {
                throw new Error(error.message)
            }
            setVans(data);
        };
        fetchData();
    }, []);

    if (!vans) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
    );
    }

    const vanCards = vans.map((van) => {
        const { id, imageUrl, name, description, price } = van;
        return (
            <Vancard key={id} id={id} imageUrl={imageUrl} name={name} description={description} price={price} />
        );
    });

    return (
        <div className="px-8">
            <h2 className="text-2xl font-bold">Explore our van options</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
                {vanCards}
            </div>
        </div>
    );
};

export default Vans;