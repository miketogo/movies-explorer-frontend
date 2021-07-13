import '../../index.css';
import './Main.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';




function Main(props) {
  return (
    <>
    <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={props.isLoggedIn}/>
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
    <Footer />
    </>

  );
}

export default Main;
