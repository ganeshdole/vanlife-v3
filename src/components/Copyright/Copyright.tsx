import React from 'react';

const Copyright: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return ( 
        <div>
            <p className="px-0 bg-gray-950
          text-center text-primaryText py-5 text-gray-200">
          &copy; {currentYear} Your Company. All rights reserved.
              Created by <a href="https://ganeshdole.me/" className="text-white font-bold ">Ganesh Dole</a> with ❤️
            </p>
        </div>
    );
};

export default Copyright;