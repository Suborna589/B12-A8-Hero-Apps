import React from 'react';
import { Link } from 'react-router';

const ShowAll = () => {
    return (
        <div>
             <Link to="/apps" className=" ml-40 md:ml-[740px] text-white btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] mb-28">Show All</Link>
            
        </div>
    );
};

export default ShowAll;