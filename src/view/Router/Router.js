import React from "react";
import Home from '../home/Home';
import { Routes, Route } from "react-router-dom"
import WebApplication from "../Services/WebApplication";
import Wordpress from "../Services/Wordpress";
import Laravel from "../Services/Laravel";
import Php from "../Services/Php";
import Android from "../Services/Android";
import Magento from "../Services/Magento";
import Flutter from "../Services/Flutter";
import Ios from "../Services/Ios";
import Reactjs from "../Services/Reactjs";
import Angular from "../Services/Angular";
import WebsiteDesign from "../Services/WebsiteDesign";
import Hybrid from "../Services/Hybrid";
import PaymentGateway from "../Services/PaymentGateway";
import GraphicDesign from "../Services/GraphicDesign";
import FigmaDesign from "../Services/FigmaDesign";
import UiUx from "../Services/UiUx";
import Logo from "../Services/Logo";
import SocialMedia from "../Services/SocialMedia";
import AboutUs from "../about/AboutUs";
import ContactUs from "../contact/ContactUs";
import Portfolio from "../portfolio";
import Page from "../portfolio/pages";
import TermsCondition from "../termsAndCond/TermsCondition";
import Career from "../career/Career";
import Login from "../admin/Login";
import history from './history';
function Router(){
  return(
    <>
      <Routes history={history}>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="wordpress" element={ <Wordpress/> } />
        <Route exact path="laravel" element={ <Laravel/> } />
        <Route exact path="php" element={ <Php/> } />
        <Route exact path="android" element={ <Android/> } />
        <Route exact path="magento" element={ <Magento/> } />
        <Route exact path="flutter" element={ <Flutter/> } />
        <Route exact path="ios" element={ <Ios/> } />
        <Route exact path="reactjs" element={ <Reactjs/> } />
        <Route exact path="angular" element={ <Angular/> } />
        <Route exact path="websiteDesign" element={ <WebsiteDesign/> } />
        <Route exact path="hybrid" element={ <Hybrid/> } />
        <Route exact path="payment-gateway" element={ <PaymentGateway/> } />
        <Route exact path="graphic-design" element={ <GraphicDesign/> } />
        <Route exact path="figma-design" element={ <FigmaDesign/> } />
        <Route exact path="ui-ux" element={ <UiUx/> } />
        <Route exact path="logo-design" element={ <Logo/> } />
        <Route exact path="social-media" element={ <SocialMedia/> } />
        <Route exact path="about-us" element={ <AboutUs/> } />
        <Route exact path="contact-us" element={ <ContactUs/> } />
        <Route exact path="portfolio" element={ <Portfolio/> } />
        <Route exact path="pages/:id/:slug" element={ <Page/> } />
        <Route exact path="career" element={ <Career/> } />
        <Route exact path="terms-and-Condition" element={ <TermsCondition/> } />
        <Route exact path="admin" element={ <Login/> } />
      </Routes>
    </>
  )
}

export default Router
