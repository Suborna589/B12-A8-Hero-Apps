import React, { useEffect } from 'react';
import { useState } from 'react';
import downLoad from "../../assets/icon-downloads.png"
import iconRating from "../../assets/icon-ratings.png"


const Installation = () => {

const [install, setInstall]  = useState([])
const [sortApp,setSortApp] = useState('none')


useEffect(()=> {
 const savetAppList =JSON.parse(localStorage.getItem('installation'))

 if(savetAppList)
    setInstall(savetAppList)
},[])

const sortedApp =(()=>{
    if(sortApp === 'size-asc'){
        return [...install].sort((s,b)=> s.size - b.size)

    }else if
        (sortApp === 'size-desc'){
        return [...install].sort((s,b)=> b.size - s.size)
    }else{
        return install
    }
}
) ()   


const handleUnstall = (id) =>{ 

     const existAppList =JSON.parse(localStorage.getItem('installation'))
        
        let updatedAppList= existAppList.filter(app => app.id !==id)

      setInstall(updatedAppList)

    

        localStorage.setItem('installation', JSON.stringify(updatedAppList))

}


    return (
        <div> 

         <div className='text-center'>
            <h2 className='text-4xl font-bold '>Your Installed Apps</h2>
            <p className='text-base font-normal text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
         </div>  

       <div  className='flex justify-between items-center py-5'>  
          <h1 className='text-2xl font-normal text-[#001931]'>{sortedApp.length} Apps Found</h1>
          
          <label className='form-control w-full max-w-xs'>   
           <select className='select select-bordered' value={sortApp} onChange={e=> setSortApp(e.target.value)}
        >
            <option value='none'>Sort by  Size</option>
            <option value='size-asc'>Small-&gt;Big</option>
            <option value='size-desc'>Big-&gt;Small</option>
           </select>
          </label>
       </div> 

       <div>

          {
          sortedApp.map(app =>(
            <div key={app.title} className="card card-side bg-base-50 shadow-lg space-y-4  mt-6 w-full" >
 
    <img
      src={app.image} className='w-[130px] h-[130px]'
      />
 
  <div className="card-body space-y-3">
   <h1 className='font-medium text-xl text-[#001931]'>{app.title}</h1>
   <div className='flex items-center gap-7'>

    <div className='flex gap-2 items-center'>
     <img  className= "w-[15px]"   src={downLoad} alt="" />
    <span className='text-base font-medium text-[#00d390]'>{app.downloads}</span>
     </div> 

     <div className='flex gap-2 items-center'>
     <img className='w-[15px]' src={iconRating} alt="" />
     <span className='text-base font-medium text-[#ff8811]' >{app.ratingAvg}</span>
     
    </div> 

     <div className='flex gap-2 items-center'>
    
      <span className='text-base font-medium text-[#627382]'>{app.size}MB</span>
    
    </div>



     </div>
    
  </div> 

       <div className='mt-14 mr-7'>
          <button className='btn text-white bg-[#00d390] text-base font-normal' onClick={()=> handleUnstall(app.id)}>Uninstall</button>

      </div>
</div>))

          }

       </div>
            
        </div>
    );
};

export default Installation;