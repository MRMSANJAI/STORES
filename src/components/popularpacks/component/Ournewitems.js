import React from 'react';
import {IoArrowBack} from "react-icons/io5";
import { Link,useNavigate} from "react-router-dom";

const data =[
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfPvAxRwVyjy9nLMTFGCPli38QCLiD2NYTVg&usqp=CAU",
        heading:"Peery Ice Cream Banana",
        weight: "800gm",
        offer: "$13",
        rate : "$15"
    },
];
const Ournewitems =()=>{
  const dummyData = Array(8).fill(0).map((_,index)=>({
    ...data[0],
    id:index +1,
  }));
  const navigate = useNavigate();
  
  return (
    <div>
   <div className=" mt-1 ml-2 mr-3">
   <div className="flex">
    <div className="justify-items-start">
      <Link to="/dashboard"class="text-xl mt-1 fixed z-40 bg-base-100 w-full"><IoArrowBack/></Link> 
     </div>
    <div>
      <h1 className="pl-6 ml-24 md:pl-50 justify-center text-base font-medium fixed z-40 bg-base-100 w-11/12 ">New Items</h1>
    </div>
   </div>
        <div className="flex flex-wrap" >
          {dummyData.map((data) => (
         <div key={data.id} >
           <div className="card w-44 h-64 bg-base-100 m-2 border-2 border-solid rounded-lg shadow-lg px-4 pt-2" onClick={() => navigate(`/productdetails/${data.id}`)} >
              <figure>
                <img className="w-28 h-28" src={data.img} alt="Fruits"/>
              </figure>
              <div className="pl-4">
                <h2 className="card-title text-xl font-base ">{data.heading}</h2>
                 <p className="text-sm font-base">{data.weight}</p>
                <div classNam="card-actions justify-start">
                    <h2 className="text-xl font-semibold">{data.offer}</h2>
                  <div className=" pt-2 text-sm font-normal line-through">{data.rate} </div>
                </div>
              </div>
            </div>
            </div>
    
))}
        </div>
        <div>
        </div>
      </div>
   </div>
    
  );

};
export default Ournewitems;
