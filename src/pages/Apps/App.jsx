import React from 'react';
import downLoad from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"

const App = ({singleApp}) => {

    const {title,image,downloads,ratingAvg,} =singleApp
    return (
          <div className="card bg-base-100 w-96 h-[454px] shadow-sm hover:scale-105 transition ease-in-out">
         
           <img
           src={image} className='w-[432px] h-[321px]'
             />
        
         <div className="card-body">
           <h2 className="card-title">
             {title}
            
           </h2>
           <div className="flex justify-between mt-4">
          <div className='flex gap-1 rounded-sm p-2 items-center w-[80px] h-8 bg-[#f1f5e8] text-[#00d390]  '>
           <img src={downLoad} className='w-[18px] h-[18px]' alt="" />
             <span className=" text-base font-medium ">{downloads}</span>
          </div>
          <div className='flex gap-3 rounded-sm p-2 items-center w-[80px] h-8 bg-[#fff0e1] text-[#ff8811]  '>
           <img src={rating} className='w-[18px] h-[18px]' alt="" />
             <span className=" text-base font-medium ">{ratingAvg}</span>
          </div>
       
       
       
          
           </div>
         </div>
       </div>
    );
};

export default App;