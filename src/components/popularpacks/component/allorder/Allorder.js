import React from 'react';
import { IoArrowBack} from "react-icons/io5";
import { Link } from 'react-router-dom';
import All from './All';


const Allorder = () => {
  return (
    <div>
      <div class="flex flex-col fixed top-0 w-full z-10 bg-white">
         <Link to="/profile"class="justify-start text-2xl ml-4 font-semibold"><IoArrowBack/></Link>
              <h2 class="text-center text-lg font-medium pb-5">My Order</h2>
            <div role="tablist" className="tabs tabs-lifted place-content-around">
             <input type="radio" name="my_tabs_2" role="tab" className="tab ml-6 text-gray-500"aria-label="All(58)" checked/>
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box px-3 w-full"><All/></div>

             <input type="radio" name="my_tabs_2" role="tab" className="tab  ml-8 text-gray-500" aria-label="Running(14)"/>
             <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box px-3"><All/></div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab  ml-10 text-gray-500 " aria-label="Previous(44)" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box px-3"><All/></div>
        </div> 
            
        </div>
    </div>
  );
}

export default Allorder;

