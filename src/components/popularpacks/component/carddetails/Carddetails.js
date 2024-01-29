import React, { useState } from 'react';
import { IoArrowBack} from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Carddetails = () => {
    const[activeAddress ,setActiveAddress]= useState('home');
    const [activeCarouselItem ,setActiveCarouselItem]=useState(0);
    const handleRadioChange = (address)=>{
        setActiveAddress(address);
    };
    const handleCarouselChange = (index) =>{
        setActiveCarouselItem(index);
    }
     const carouselItems =[
        {
            image:"https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?size=626&ext=jpg&ga=GA1.1.1122649304.1704948345&semt=ais",
            lable:'Master Card'
        },
        {
            image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///8lO4AXm9cVMHuOlrUAl9YlNHsegr4AI3X6+/2NxecRmtcyotkAldUAktQWntoAIHUZM3wAJ3gmMXissccNLHrl5+4AHHMkO4AmL3cfN34PLXpga5rZ2+XQ0t/BxNVpdJ95gqiZyukqSInt9vtLqdzY6vagpr+Ciq1JWI+Vm7kvQoTIzNpUYZTp6/A6S4hqiLO4vM8Rd7VzfaUmaaW01+4pXptwuOIqUZDQ5vSu1O02SIdEp9sAFHEiVpZ3uuPR4Wa5AAAEaElEQVR4nO3bjVKbQBQF4CwRkojEROJPUGtrtImxta1a/1rr+79VMbGOyL0EdndmL/R8T7BnFvawC7RaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNN1orYT4dfdlxPVJNs0G7jP3t7e7j2fyD6+FqGKrykvbWcK12U7lbIeGz9u7BoesxV7LTrZgwncndjxeuh13B0XblhEoNByPX4y5vtK+RUKnuQc/1yMuatbUSqqGqy5V6kOglVEm3JgvOuWbA1KAeEQf6CVW3DtW4Y5IwGdZgufmiUxavhl9dj381zbL4Z2vqOsBKa5pl8WJvV3xnaJfFi+TAdYJVDMpiaSB9P9XdM0yYnLmOUOyi+s4iN4mye//DlnHC4SfXIQqNjOpwqSu69g3LYmH7yHWKIh+rnNIwZF+m3wzrcMl1iiJVj6FIA8HPNRcmO4tXW4JL30JZpPYFH0v9MNtZvGjPXefgzS2URbqYzlzn4F1ZKIs04ZXrHDw7ZSE5oYVnNiW68i+s1KFqy70P7ZSFGn53HYT1w85VGlyeuk7CsVMWKuiEG66jMOyUhYo9zxca8cxKWajJZhpR5oVq5ZlNJddpQi86dp2GcGJlZ6HiznNCr//ZdZ68QztloRYBPYmrjZ2yCK6XCb3op+tAOVMrZTEOlwG90HMdKOeTjbJIbl6mUOIkWimLsf8voBeKawzzE/03d+FiOT1xHSmrZ2Vn8Sag5z+4zpRloyzGnUzCW9eZsrS+98rKXKPyVtOp8UNbcpcJmN6Isl7SGJdFMtkMswkjWUvNV9NX+Ofee9G961AZidkL7mCSCygsoWFZxH82pSc8NCr88SURUFhCk7IIJhEV0ItE7RH1yyJQ5ASKa4uZXlkkcZqPCSis8XXKIgjimw6XT9xTG98VASkeq7vrNB6bT9qTd489hgouO5TI2yyM50nbPfF/kowXUXK8sDCdJ24HXPBxcPFE8YSdYvAfB080E4ah60xZ/J8kN5oJI1HrTMHHwe92teWnUNqJMHsXBh29hNJO9fmdRdDRCijuzUxBWaxsBYq8t2t8WQQ6F6nAN6R2y8LfELWpWGA/Dk40ykLeJdqyWhZh/8l1GsovNiG3u2Un0Bd1dPGqoCwqJfT7666j0PjfDuMKZRFG0bqoDdMb1coiJPh+FN3K2kxk8H+SEGURbuSc3q4/CHtKe4cvC+KgV9YZYUnsnyRUWcg6nCipUln4rkerg339S5RF+Nv1aDXwf5LEfn4KZZ2ClsN/HEyUhS9t51cG/yfJOZFQcOux/uOySKiykLf3W439k6QxZcH+o/4flEXU9LIYN6QsDh+5hE0pi9Z80M3bj+NxU8oi1ctpPYXkC9BalgXtlD6/qGVZ0PLP3IuykHgWquekT0+hyMNQLff5KqxtWdCO6au0nmVBeqIT1rUsCBv0UtqcsujRC02DyuIznbCWOwtG6FP6zVlKWyfH64TmrKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANr+AtbYXHYB9448AAAAAElFTkSuQmCC",
             lable:"Paypal"
        }, 
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9teGomyxiwu4TX2BzDNB-NUCc1rmRJwHPVA&usqp=CAU",
            lable: 'Cash on Delivery'
        }
     ] 
const navigate= useNavigate();
  return (
    <div>
      <div class="flex flex-colm">
         <div class="text-3xl font-semibold top-0 w-full z-10 bg-white ml-2 mt-5 fixed">
            <p class="justify-start text-3xl font-bold mt-5 ml-4 absolute"><Link to="/checkout"><IoArrowBack/></Link></p>
            <h3 class="text-base mt-5 font-semibold text-center pr-20">Checkout</h3>
        </div>
      </div>
      <div className='mt-20 ml-3'>
        <h1 className='flex justify-between'>Select Deliver Address <Link className='text-green-800 font-medium mr-5'>Add New</Link></h1>
      </div>

      <div className={`flex ml-5 mt-5 gap-5 border w-11/12 h-32 rounded-xl p-5 ${ activeAddress === 'home' ?'bg-green-100 border-green-500':'bg-slate-100'}`}>
      <input type="radio" name="radio-5" className="radio radio-success" checked= {activeAddress === 'home'} onChange={()=>handleRadioChange('home')} />
      <h1 className='flex flex-col gap-2 font-semibold ml-2'>Home Address<p className="font-light text-gray-400">(309)071-9396-939</p><p className='font-light text-gray-400'>1749 Custom Road, Chennai</p></h1>
      </div>
      <div className={`flex ml-5 mt-5 gap-5 border w-11/12 h-32 rounded-xl p-5 ${ activeAddress === 'office' ?'bg-green-100 border-green-500':'bg-slate-100'}`}>
      <input type="radio" name="radio-5" className="radio radio-success" checked= {activeAddress === 'office'} onChange={()=>handleRadioChange('office')}/>
      <h1 className='flex flex-col gap-2 font-semibold ml-2'>Office Address<p className="font-light text-gray-400">(309)071-9396-939</p><p className='font-light text-gray-400'>1749 Custom Road, Chennai</p></h1>
      </div>

      <div className='mt-5 ml-3'>
        <h1 className='flex text-base'>Select Payment System</h1>
      </div>
    
      <div className="carousel rounded-box w-96 gap-5 ml-3 mt-4">
          {carouselItems.map((item,index)=>(
          <div key={index} className={`carousel-item w-36 flex flex-col border items-center rounded-xl ${
            index === activeCarouselItem ? 'bg-green-100 border-green-300':'bg-slate-100'}`}onClick={()=>handleCarouselChange(index)} >
            <img src={item.image} className='w-8 h-10'/>
            <p>{item.lable}</p>
            </div>
          ))}
      </div>
      <div className='ml-3 mt-4'>
         <p className='text-gray-400 '>Card Name</p>
         <input type="text" placeholder="" className="input input-bordered w-11/12  h-12" />
      </div>
      <div className='ml-3 mt-4'>
         <p className='text-gray-400 '>Card Number</p>
         <input type="text" placeholder="" className="input input-bordered w-11/12 h-12" />
      </div>

      <div className='ml-3 mt-4 flex justify-between'>
          <div>
             <p className='text-gray-400 '>Expiration Date</p>
             <input type="date" placeholder=''className='input input-bordered input-xs w-48 h-12'/>
          </div>
         <div className='mr-8'>
            <p className='text-gray-400 '>cvv</p>
             <input type="text" placeholder=''className='input input-bordered input-xs w-48 h-12'/>
          </div>
        </div>
        <div className="form-control mt-4 ml-3">
             <label className="label cursor-pointer">
                <span className="label-text">Remember My Card Details</span> 
                <input type="checkbox" className="toggle toggle-success" checked />
            </label>
      </div>
      <div className='grid place-content-center mt-5'>
         <button className="btn w-80 rounded-lg bg-green-500 text-white" onClick={()=>navigate("/orderplaced")}>Pay Now</button>
     </div>
 </div>
  );
}

export default Carddetails;
