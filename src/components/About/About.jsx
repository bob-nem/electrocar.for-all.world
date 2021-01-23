import React from 'react';
import {Redirect, Route, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna, faChargingStation, faCreditCard, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import style from './About.module.css';

import Mission from './Mission/Mission';
import Services from './Services/Services';
import Prices from './Prices/Prices';

const About = (props) => {
  return (
      <div className={style.AboutOwner}>
        <div className={style.AboutContainer}>
          <div className={style.NavAbout}>
            <div className={style.NavAboutItem}>
              <NavLink to="/about/mission" activeClassName={style.NavAboutItemActive}><FontAwesomeIcon icon={faDna} /> Mission</NavLink >
            </div>
            <div className={style.NavAboutItem}>
              <NavLink to="/about/services" activeClassName={style.NavAboutItemActive}><FontAwesomeIcon icon={faChargingStation} /> Services</NavLink>
            </div>
            <div className={style.NavAboutItem}>
              <NavLink to="/about/prices" activeClassName={style.NavAboutItemActive}><FontAwesomeIcon icon={faCreditCard} /> Prices</NavLink>
            </div>
            <div className={style.NavAboutItem}>
              <NavLink to="/about/contacts" activeClassName={style.NavAboutItemActive}><FontAwesomeIcon icon={faMapMarkedAlt} /> Contacts</NavLink>
            </div>
          </div>
          <div className={style.ContentAbout}>
            <Redirect from='/about' to='/about/mission'/>
            <Route path="/about/mission" component={Mission} />
            {/*<Route exact path="/about/services/:page?" render={props => <Services {...props} />} />*/}
            <Route path="/about/services" render={props => <Services {...props} />} />
            <Route path="/about/prices" component={Prices} />
          </div>
        </div>
      </div>
  )
};

export default About;
