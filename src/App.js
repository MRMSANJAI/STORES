import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from '../src/components/login/Login'
import PopularPacks from '../src/components/popularpacks/PopularPacks'
import BundleDetails from '../src/components/bundledetails/BundleDetails'
import Homepage from '../src/components/homepage/Homepage';
import FrontPage from './components/frontpage/FrontPage';
import Welcome from './components/welcome/Welcome';
import Ournewitems from './components/popularpacks/component/Ournewitems';
import ProductDetails from './components/productdetails/Productdetails';
import Packs from './components/popularpacks/Packs';
import Newpacks from './components/popularpacks/Newpacks';
import Menu from './components/popularpacks/component/Menu';
import Save from './components/popularpacks/component/Save';
import Vegetablespack from './components/popularpacks/Vegetablespack';
import Profile from './components/popularpacks/component/Profile';
import Profileinput from './components/popularpacks/component/profileinput/Profileinput';
import Allorder from './components/popularpacks/component/allorder/Allorder';
import All from './components/popularpacks/component/allorder/All';
import Ordercontent from './components/popularpacks/component/ordercontent/Ordercontent';
import Voucher from './components/popularpacks/component/voucher/Voucher';
import Offerdetails from './components/popularpacks/component/voucher/Offerdetails';
import Checkout from './components/popularpacks/component/Checkout';
import Carddetails from './components/popularpacks/component/carddetails/Carddetails';
import Orderplaced from './components/popularpacks/component/orderplaced/Orderplaced';




function App() {
  return (
    <div>
      <Router> 
            <Routes>
            <Route path='/' element={<Login />}/>
            <Route path="/popularpacks" element={<PopularPacks/>}/>
            <Route path='/ournewitems' element={<Ournewitems/>}/>
            <Route path="/bundledetails/:id" element={<BundleDetails/>}/>
            <Route path='/homepage' element={<Homepage/>}/>
            <Route path='/dashboard' element={<Homepage/>}/>
            <Route path='/menu'element={<Menu/>}/>
            <Route path='/save'element={<Save/>}/>
            <Route path='/FrontPage' element={<FrontPage/>}/>
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path="/productdetails/:id"element={<ProductDetails/>}/>
            <Route path="/Packs"element={<Packs/>}/>
            <Route path='/newpacks'element={<Newpacks/>}/>
            <Route path="/vegetablespack"element={<Vegetablespack/>}/>
            <Route path='/profile'element={<Profile/>}/>
            <Route path='/profileinput'element={<Profileinput/>}/>
            <Route path='/allorder'element={<Allorder/>}/>
            <Route path='/all'element={<All/>}/>
            <Route path ='/ordercontent'element= {<Ordercontent/>}/>    
            <Route path ='/voucher'element={<Voucher/>}/> 
            <Route path ='/offerdetails'element={<Offerdetails/>}/>
            <Route path ='/checkout'element={<Checkout/>}/>
            <Route path ='/carddetails' element={<Carddetails/>}/>
            <Route path ='/orderplaced'element ={<Orderplaced/>}/>
            </Routes>
           
      </Router>
    </div>
  );
}

export default App;
