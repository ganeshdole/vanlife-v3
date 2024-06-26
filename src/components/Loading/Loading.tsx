import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Box sx={{ display: 'flex' }}>
                 <CircularProgress />
            </Box>
        </div>
    );
};

export default Loading;