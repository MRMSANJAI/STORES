import React from 'react';
import {IoArrowBack} from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const data = [
  {
    img: "https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.1122649304.1704948345&semt=sph",
    heading: "Vegetables",
    subheading: "Onion, Oil, Salt",
    RS: "$35",
    rs: "$50.32",
  },
];

const vegetables =Array(10).fill(data[0]);
const Vegetablespack = () => {
    const navigate=useNavigate();
  return (
    <div>
    <div class=" mt-5 ml-2 mr-3">
    <div class="flex flex-col fixed top-0 w-full z-10 bg-white">
     <div>
       <Link to="/menu"class="text-2xl mt-1 fixed z-40 bg-base-100 w-full "><IoArrowBack/></Link> 
      </div>
     <div>
       <h2 class="pl-6 ml-24 md:pl-50 justify-center text-lg font-medium fixed z-40 bg-base-100 w-11/12 ">Vegetables</h2>
     </div>
    </div>
         <div class="flex flex-wrap" >
           {vegetables.map((item, index) => (
          <div onClick={()=>navigate("/menu")}>
            <div key={index}class="card w-44 h-60 bg-base-100 m-2 shadow-lg border-2 border-solid rounded-lg  px-2 pt-2" >
               <figure>
                 <img class="w-28 h-28" src={item.img} alt="Fruits"/>
               </figure>
               <div class="pl-4 ">
                 <h2 class="card-title text-xl ">{item.heading}</h2>
                  <p class="text-lg text-gray-400">{item.subheading} </p>
                 <div class="card-actions justify-start">
                   <div class=" ">
                     <h2 class="text-xl font-semibold">{item.RS}</h2>
                   </div>
                   <div class=" pt-2 text-lg text-sm font-normal line-through"pl-544 > {item.rs} </div>
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
}

export default Vegetablespack;

