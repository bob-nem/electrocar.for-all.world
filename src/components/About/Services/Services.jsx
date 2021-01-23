import React from 'react';
import {Route, NavLink, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTruck, faWrench, faDraftingCompass, } from '@fortawesome/free-solid-svg-icons';
import { GoPlug } from 'react-icons/go';
import style from './Services.module.css'

import VehicleDesign from './VehicleDesign/VehicleDesign';
import PartsSupply from './PartsSupply/PartsSupply';
import Manufacturing from './PartsManufacturing/PartsManufacturing';

const Services = (props) => {
  return (
    <div className={style.ServiceOwner}>
      <div className={style.ServiceTabs}>
        <label className={style.TabItem}>
          <NavLink to="/about/services/design" activeClassName={style.TabItemActive}>
            <FontAwesomeIcon icon={faDraftingCompass} className={style.TabIcon} />
            electric vehicle design
          </NavLink>
        </label>
        <label className={style.TabItem}>
          <NavLink to="/about/services/supply" activeClassName={style.TabItemActive}>
            <FontAwesomeIcon icon={faTruck} className={style.TabIcon} />
            parts supply
          </NavLink>
        </label>
        <label className={style.TabItem}>
          <NavLink to="/about/services/manufacturing" activeClassName={style.TabItemActive}>
            <FontAwesomeIcon icon={faCog} className={style.TabIcon} />
            parts manufacturing
          </NavLink>
        </label>
        <label className={style.TabItem}>
          <NavLink to="/about/services/manufacturing" activeClassName={style.TabItemActive}>
            <GoPlug size="1.5em" className={style.TabIcon} />
            assembly of the items
          </NavLink>
        </label>
        <label className={style.TabItem}>
          <NavLink to="/about/services/manufacturing" activeClassName={style.TabItemActive}>
            <FontAwesomeIcon icon={faWrench} className={style.TabIcon} />
            maintenance and repair
          </NavLink>
        </label>
      </div>
      <div className={style.ServiceContetnt}>
        <Redirect from='/about/services' to='/about/services/design'/>
        <Route path="/about/services/design" component={VehicleDesign} />
        <Route path="/about/services/supply" component={PartsSupply} />
        <Route path="/about/services/manufacturing" component={Manufacturing} />
      </div>
    </div>
  )
};

export default Services;
