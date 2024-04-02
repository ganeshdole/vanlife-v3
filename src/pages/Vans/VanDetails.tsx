import React from 'react';
import { useEffect } from 'react';
import supabase from '@/Config/supabaseClient';
import { useParams } from 'react-router-dom';

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

    console.log(van);
    return (
        <div className='px-8 min-h-full'>


        </div>
    );
};

export default VanDetails;