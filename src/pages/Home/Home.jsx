import React from 'react';
import Banner from '../../Components/Banner/Banner';

import { useLoaderData } from 'react-router';
import TrendApps from '../TrendApps/TrendApps';


const Home = () => { 
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
          <Banner></Banner> 

          <TrendApps data={data}></TrendApps> 
          
          
          
          

            
        </div>
    );
};

export default Home;