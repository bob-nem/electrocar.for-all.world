import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faVk, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons';
import style from './Footer.module.css';


class Footer extends React.Component {
  state = {
    curYear : new Date().getFullYear(),
  }
  render() {
    return (
      <div className={style.FooterOverall}>
        <div className={style.FooterCopyright}>
          <p>© Copyright 2018-{this.state.curYear} ElectroCar. for-all .World | All Rights Reserved | Powered by <a href="https://reactjs.org/" rel="noopener">React-JSX</a> | Development by <a href="https://it.for-all.world" rel="noopener">IT_Department</a></p>
        </div>
        <div className={style.FooterSocialIcons}>
          <p>
            we are in social:<span> </span>
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faVk} size="lg" />
            <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </p>
        </div>
      </div>
    )
  }
}


export default Footer;
