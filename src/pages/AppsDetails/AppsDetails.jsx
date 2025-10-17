
import downLoad from "../../assets/icon-downloads.png"
import iconRating from "../../assets/icon-ratings.png"
import iconReviews from "../../assets/icon-review.png"

import { Link, useLoaderData, useParams } from 'react-router';

const AppsDetails = () => { 
    const {id} = useParams();
 

    const data = useLoaderData();
    const singleApp =data.find(app =>app.id === parseInt(id));
   
    const {title,image,companyName,downloads,ratingAvg,reviews,size}= singleApp;
     
    
    return (
     

      <div className='flex gap-16  items-center'>   

         <img className='w-[350px] h-[350px]' src={image} alt="" />
        
        <div className='space-y-4'>

             <h2 className='text-3xl font-bold'>{title}</h2> 
             <p className='text-xl  text-[#627382]'> Developed by   <span className='font-bold text-xl text-[#632ee3] lowercase'>{companyName}</span></p>


        <div className='mt-18 flex items-center gap-20 '>

            <div className='space-y-4'>
                <img  className= "w-[40px]"   src={downLoad} alt="" />
                <p className='text-base font-normal text-[#001931]'>Downloads</p>
                <span className='text-4xl font-extrabold'>{downloads}</span>

            </div>
            <div className='space-y-4'>
                <img src={iconRating} alt="" />
                <p className='text-base font-normal text-[#001931]'>Average Ratings</p>
                <span className='text-4xl font-extrabold'>{ratingAvg}</span>

            </div>
            <div className='space-y-4'>
                <img src={iconReviews} alt="" />
                <p className='text-base font-normal text-[#001931]'>Total Reviews</p>
                <span className='text-4xl font-extrabold'>{reviews}</span>

            </div>
        </div>
     
     <Link to="/installation" className="btn text-white font-medium text-xl bg-[#00d390] ">Install Now<span>({size}MB)</span></Link>

        </div>






       <div>


       </div>
       
          
        </div>
     
    );
};

export default AppsDetails;