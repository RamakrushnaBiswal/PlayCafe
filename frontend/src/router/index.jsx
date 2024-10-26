/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import React from 'react';
import App from '../App';
import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Menu from '../components/Pages/Menu';
import Boardgame from '../components/Pages/Boardgame';
import Event from '../components/Pages/Event';
import MyBook from '../components/Pages/MyBook';
import NotFound from '../components/Pages/Notfound';
import Register from '../components/Pages/Register';
import Signup from '../components/Pages/Signup';
import Login from '../components/Pages/Login';
import ResetPassword from '../components/Pages/ResetPassword';
import Admin from '../components/Pages/Admin';
import VerifyOtp from '../components/Pages/VerifyOtp';
import EmailVerify from '../components/Pages/EmailVerify';
import Membership from '../components/Membership';
import HelpAndSupport from '../components/Pages/HelpAndSupport';
import ContactUs from '../components/Pages/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/boardgame" element={<Boardgame />} />
      <Route path="/events" element={<Event />} />
      <Route path="/book" element={<MyBook />} />
      <Route path="/reservation" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password/:id" element={<ResetPassword />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/verifyotp/:id" element={<VerifyOtp />} />
      <Route path="/email-verify" element={<EmailVerify />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/help" element={<HelpAndSupport />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Route>
  )
);

export default router;
