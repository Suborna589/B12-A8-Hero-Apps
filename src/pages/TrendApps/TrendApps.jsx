
import { Suspense, useState } from 'react';
import TrendApp from '../TrendApp/TrendApp';
import ShowAll from '../Home/ShowAll';

const TrendApps = ({data}) => { 
    const [apps, setApps]=useState([]); 

       const DataS= data.slice(0, 8); 

       console.log(DataS);

      
    return (
        <div className='mt-16 space-y-16'>
          <div className='text-center space-y-8'>
              <h1 className='text-5xl font-bold'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
          </div> 

          <Suspense fallback={<span>loading.....</span>}>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   space-y-8'>
             {
           DataS.map((singleApp)=> <TrendApp key={singleApp.id} singleApp={singleApp}></TrendApp>)
          }
         </div> 

     

          </Suspense> 
           <ShowAll></ShowAll>
            
        </div>
    );
};

export default TrendApps ;