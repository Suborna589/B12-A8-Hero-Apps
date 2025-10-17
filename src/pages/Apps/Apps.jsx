import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

const Apps = () => {  

    const data = useLoaderData()

    const [search, setSearch] = useState(' ')
    const term = search.trim().toLocaleLowerCase()
    const searchApps = term? data.filter(app => 
        app.title.toLocaleLowerCase().includes(term))

        : data 

        // console.log(searchApps);

    return (
        <div> 
           <div className='text-center '>
             <h2 className='text-5xl font-bold mb-8'>Our All Applications</h2>
            <p className='text-xl font-normal  text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
           </div>
           <div className='flex justify-between items-center py-10'>
             <h1 className='text-xl font-medium'> ({searchApps.length}) Apps Found </h1>
             <label className="input">
           
             <input value={search} onChange={(e) => setSearch (e.target.value)} type="search" placeholder="Search Apps" />
             </label>
           </div>



             <Suspense fallback={<span>loading.....</span>}>
                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   space-y-8'>
            {
                searchApps.map((singleApp )=> <App key= {singleApp.id} singleApp={singleApp}></App>)
            } 
                 </div>
            </Suspense>
        </div>
    );
};

export default Apps;