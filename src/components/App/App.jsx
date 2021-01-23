import React from 'react';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {Route, Switch} from "react-router-dom";
import style from './App.module.css';

import About from '../About/About';
import CenterMenu from '../About/CenterMenu/CenterMenu';
import Shop from '../Shop/Shop';

import BackgroundImage from '../images/yellow-electro-platform-1_.webp';

export default function App() {
  return (
    <div className={style.Site} id="outer-container">
      <BurgerMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main
        style = {{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className={style.ContentOwner}
        id="page-wrap">
          <header><h1 className={style.CompanySlogan}>install electric traction on car</h1><h1 className={style.CompanySloganMin}>electric traction</h1></header>
          <div className={style.MainContent}>
          <Switch>
            {/*<Redirect from='/' to='/about'/>*/}
            <Route path="/" exact render={CenterMenu} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            {/*<Route path="/about/mission" component={Mission} />*/}
            {/*<Route path="/about/services" component={About} />*/}
          </Switch>
          </div>
        <footer className={style.Footer}>
          <Footer />
        </footer>
      </main>
    </div>
  )
};
