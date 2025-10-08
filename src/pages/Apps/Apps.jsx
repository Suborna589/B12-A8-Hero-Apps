
import { Suspense, useState } from 'react';
import App from '../App/App';

const Apps = ({data}) => { 
    const [apps, setApps]=useState([]); 


    return (
        <div className='mt-16 space-y-16'>
          <div className='text-center space-y-8'>
              <h1 className='text-5xl font-bold'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
          </div> 

          <Suspense fallback={<span>loading.....</span>}>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   space-y-8'>
             {
            data.map((singleApp)=> <App key={singleApp.id} singleApp={singleApp}></App>)
          }
         </div>

          </Suspense>
            
        </div>
    );
};

export default Apps;