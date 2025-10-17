import React from 'react';

import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => { 
    const {id} = useParams(); 
    const Id =parseInt(id)
    const data = useLoaderData();
    const singleApp = data.find(app =>app.id === Id);
    const {title,image}= singleApp;
     
    
    return (
        <div>  

        <h2>{title}</h2>
        <img src={image} alt="" />
          
        </div>
    );
};

export default AppsDetails;