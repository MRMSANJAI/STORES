import React from 'react';
import { IoArrowBack} from "react-icons/io5";
import { Link } from 'react-router-dom';
const Profileinput = () => {
  return (
    <div>
       <div class="flex flex-col fixed top-0 w-full z-10 bg-white">
             <div >
             <Link to="/profile"class="text-3xl font-semibold mt-4 ml-5"><IoArrowBack/></Link> 
             </div>
            <div>
              <h2 class="text-center text-lg font-medium">Profile</h2>
              </div>
        </div>
        <div className="p-10 mt-12">
        <p className='text-gray-400 font-semibold pb-2'> First Name</p>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs h-16" />
        <p className='text-gray-400 font-semibold pb-2'> Last Name</p>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs h-16" />
        <p className='text-gray-400 font-semibold pb-2'> Phone Number</p>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs h-16" />
        <p className='text-gray-400 font-semibold pb-2'> Gender</p>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs h-16" />
        <p className='text-gray-400 font-semibold pb-2' > Birthday</p>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs h-16" />
        <p className='text-gray-400 font-semibold pb-2'> Password</p>
        <input type="text" placeholder="" className="input input-bordered w-full max-w-xs h-16" />
        </div>
        <div class="flex flex-colm place-content-center">
        <button className="btn btn-wide bg-green-600 rounded-lg font-semibold text-white">Save</button>
        </div>
    </div>
  );
}

export default Profileinput;
