import React from 'react';
import {IoArrowBack ,IoHomeOutline } from "react-icons/io5";
import { PiVanDuotone } from "react-icons/pi";
import { CiGift } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Navfooter from './Navfooter';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='fixed top-0 w-full z-10'>
     <div className=' bg-cover bg-center w-full h-80 rounded-b-[60px]'style={{backgroundImage:"url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30568.jpg?size=626&ext=jpg&ga=GA1.1.1122649304.1704948345&semt=ais')"}}>
       <div className='flex flex-col '>
         <p class="justify-start text-2xl font-bold mt-5 ml-4 absolute"><IoArrowBack/></p>
            <h1 class="text-3xl mt-5 font-bold text-center text-white">Profile</h1>
      </div>
       <div className="avatar">
          <div className="w-24 rounded-full mt-5 ml-4 flex">
             <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
         </div>
         <h1 class="pl-5 pt-8">
            <span class="text-lg text-white font-semibold"> MANI RAJA</span><br/>
            <span class="text-lg text-white font-semibold">ID: 1540580</span>
         </h1>
       </div>
          <div class="px-4 mt-10">
             <ul className="menu menu-horizontal lg:menu-horizontal bg-slate-100 rounded-box w-full h-32 place-content-center justify-around">
        <Link to='/allorder'><li><a><PiVanDuotone class="h-9 w-9 ml-1 text-gray-600" /></a><p class="text-base font-medium text-gray-600">All Order</p></li></Link>
        <Link to='/voucher'> <li><a><CiGift class="h-9 w-9 ml-1 text-gray-600"/></a><p class="text-base font-medium text-gray-600">Voucher</p></li></Link>
             <li><a><IoHomeOutline  class="h-9 w-9 ml-1 text-gray-600"/></a><p class="text-base font-medium text-gray-600">Address</p></li>
            </ul>
        </div>
     </div> 
    <div class="px-4 mt-12">
      <ul className="menu bg-slate-100 w-full h-full rounded-xl">
            <Link to="/profileinput">
           <li><a class="text-xl p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>My Profile <IoIosArrowForward /></a></li></Link>
           <li><a  class="text-xl p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>Notification <IoIosArrowForward /></a></li>
           <li><a  class="text-xl p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
       <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>Settings <IoIosArrowForward /></a></li>
           <li><a  class="text-xl p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>Payment <IoIosArrowForward /></a></li>
           <li><a  class="text-xl p-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" /></svg>Logout <IoIosArrowForward /></a></li>
    </ul>
</div>
<div class=" content-end fixed bottom-0 w-full">
    <Navfooter/>
</div>
    </div>
  );
}

export default Profile;
