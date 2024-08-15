import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes , Route, BrowserRouter } from "react-router-dom"
import Login2 from './components/Login2';
import Menu from './components/Menu';
import RegisterProtectedRoute from './components/RegisterProtectedRoute'
import HotelOwnerRegisterFirstPage from './components/HotelOwnerRegisterFirstPage';
import AddDish from './components/AddDish';
import AddAddress from './components/AddAddress';
import Address from './components/Address';
import AddCards from './components/AddCards';
import CartWrapper from './components/CartWrapper';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/city/:searchBy" element={<Menu/>}></Route>
      <Route path="/search/:search" element={<Menu/>}></Route>
      <Route path='/hotelownerNext' element={<HotelOwnerRegisterFirstPage/>}></Route>
      <Route path="/" element={<Menu/>}></Route>
      <Route path='/login' element={<Login2/>}></Route>
      <Route path="/addDish/:hotel_Id" element={<AddDish/>}></Route>
      <Route path="/addToCart/:itemId" element={ localStorage.getItem("user_id")!=undefined? <CartWrapper/>:<Login2></Login2>}></Route>
      <Route path='/addAddress/:cust_Id' element={<AddAddress/>}></Route>
      <Route path='/userNext/:cust_Id' element={<Address/>}></Route>
      <Route path='/addCards/:cust_Id' element={<AddCards/>}></Route>
      <Route path='/register' element={<RegisterProtectedRoute/>}></Route>
      
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>
);

