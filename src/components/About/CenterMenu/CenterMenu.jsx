import React from 'react';
import {Route, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDna, faChargingStation, faCreditCard, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import style from './CenterMenu.module.css';

import About from '../About';
import Mission from '../Mission/Mission';
import Services from '../Services/Services';

const CenterMenu = () => {
  return (
    <div className={style.AboutOwner}>
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
        <div className={style.ContentAbout}>
          <Route path="/about/mission" component={About} />
          <Route path="/about/mission" component={Mission} />
          <Route path="/about/services" component={Services} />
        </div>
      </div>
    </div>

  )
}

export default CenterMenu;
