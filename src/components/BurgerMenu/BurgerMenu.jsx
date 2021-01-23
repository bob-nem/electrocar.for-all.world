import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import {NavLink} from "react-router-dom";
import {BsInfoSquare} from 'react-icons/bs';
import {BiDna, BiCreditCard, BiMap} from 'react-icons/bi';
import {RiChargingPile2Fill, RiShoppingBag3Fill, RiBook2Line} from 'react-icons/ri';
import {GiTalk} from 'react-icons/gi';
import './BurgerMenu.css';

import bmLogo from './bm-logo.png';

const BurgerMenu = (props) => {
  return (
      <Menu {...props}>
        <div className='bm-logo'>
          <NavLink to="/"><img src={bmLogo} alt='logotype'/></NavLink>
        </div>
        <NavLink to="/about" activeClassName="bm-item-active"><BsInfoSquare size=".8em" className="bm-icon" /> About</NavLink>
        <div style={{
          fontSize: '1.2rem',
          marginLeft: '2rem',
        }}>
          <div>
            <NavLink to="/about/mission" activeClassName="bm-item-active"><BiDna /> Mission</NavLink>
          </div>
          <div>
            <NavLink to="/about/services" activeClassName="bm-item-active"><RiChargingPile2Fill /> Services</NavLink>
          </div>
          <div>
            <NavLink to="/about/prices" activeClassName="bm-item-active"><BiCreditCard /> Prices</NavLink>
          </div>
          <div>
            <NavLink to="/about/contacts" activeClassName="bm-item-active"><BiMap /> Contacts</NavLink>
          </div>
        </div>
        <NavLink to="/shop"  activeClassName="bm-item-active"><RiShoppingBag3Fill size=".9em" className="bm-icon" /> Shop</NavLink>
        <NavLink to="/library" activeClassName="bm-item-active"><RiBook2Line size=".9em" className="bm-icon" /> Library</NavLink>
        <NavLink to="/forum" activeClassName="bm-item-active"><GiTalk size=".9em" className="bm-icon" /> Forum</NavLink>
      </Menu>
  );
};

export default BurgerMenu;
