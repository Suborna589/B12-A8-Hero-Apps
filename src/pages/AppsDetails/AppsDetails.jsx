
import { Bar, BarChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import downLoad from "../../assets/icon-downloads.png"
import iconRating from "../../assets/icon-ratings.png"
import iconReviews from "../../assets/icon-review.png"

import {  useLoaderData, useParams } from 'react-router';


const AppsDetails = () => { 
    const {id} = useParams();
    const data = useLoaderData([]);
    const singleApp =data.find(app =>app.id === parseInt(id));
    const {title,image,companyName,downloads,ratingAvg,reviews,size,ratings}= singleApp || {};
     
    
    const handleInstall = () =>{
        const existAppList =JSON.parse(localStorage.getItem('installation'))
        
        let updatedAppList= [] 

        const isDubble = existAppList.some(app => app.id ===  singleApp.id) 
        if(isDubble)
            return alert("Already One Apps")

        if(existAppList){
             updatedAppList=[...existAppList, singleApp]
        } else { 
            updatedAppList.push(singleApp)

        }

        localStorage.setItem('installation', JSON.stringify(updatedAppList))

    }

    return (

     <div>

     <div className='flex gap-16  items-center bg-base-50'>   

         <img className='w-[350px] h-[350px]' src={image} alt="" />
        
        <div className='space-y-4'>

             <h2 className='text-3xl font-bold'>{title}</h2> 
             <p className='text-xl  text-[#627382]'> Developed by   <span className='font-bold text-xl text-[#632ee3] lowercase'>{companyName}</span></p>

             <div className="divider"></div>
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
     
     <button className="btn text-white font-medium text-xl bg-[#00d390] " onClick={handleInstall}>Install Now<span>({size}MB)</span></button>

        </div>






    
    

         {/* Bar chart */}

       
       
          
        </div>


     <div className="divider"></div> 

      <div className="w-full h-80 p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-left"> Ratings</h2>
      <ResponsiveContainer width={600} height={240} >
        <BarChart data={ratings} >
          <CartesianGrid  strokeDasharray="3 3"  />
           
          <XAxis type="category" dataKey="name"  />
            
          <YAxis  type="number" dataKey='count'  />
          <Tooltip />
           <Bar dataKey="count" fill="#ff8811" barSize={24} />
      
        </BarChart>
      </ResponsiveContainer>
    </div>




     </div>



     
    );
};

export default AppsDetails; 




