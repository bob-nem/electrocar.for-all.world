import React from 'react';
import style from './PartsSupply.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTags, faFileAlt, faBook} from '@fortawesome/free-solid-svg-icons';
import { RiShoppingCartLine } from 'react-icons/ri';

const PartsSupply = () => {
 return (
    <div className={style.SupplyOwner}>
      <div classname={style.SupplyContainerLeft}>
        <div className={style.SupplyCard}>
          <div className={style.SupplyCardLeft}>
            <h3 className={style.SupplyCardLeftHeader}><FontAwesomeIcon icon={faTags}/> Special Shop</h3>
            <p>*goods and equipment for electric vehicle </p>
          </div>
          <div className={style.SupplyCardRight}>
            <div className={style.SupplyCardList}>
              <ul>
                <li>Trusted products</li>
                <li>Quality guarantee</li>
                <li>Producer prices</li>
                <li>Safety delivery</li>
              </ul>
            </div>
            <button className={style.SupplyCardButton}> Go to shop <RiShoppingCartLine size="1.5em" className={style.ShoppingCartLine}/></button>
          </div>
        </div>
      </div>
      <div className={style.SupplyContainerRight}>
        <h4>
          <FontAwesomeIcon icon={faFileAlt} className={style.SupplyFontAwesome} />Sit amet mattis vulputate enim nulla aliquet porttitor.
        </h4>
        <p>
          Nunc sed blandit libero volutpat sed cras. Sed risus pretium quam vulputate dignissim. In eu mi bibendum neque egestas congue quisque. Fusce ut placerat orci nulla pellentesque dignissim enim. Magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis egestas integer. Platea dictumst vestibulum rhoncus est pellentesque elit. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus sit amet dictum sit amet justo donec enim diam. Senectus et netus et malesuada fames. Arcu cursus vitae congue mauris. Dolor purus non enim praesent elementum facilisis. Dictumst quisque sagittis purus sit amet.
        </p>
        <h4>
          <FontAwesomeIcon icon={faBook} className={style.SupplyFontAwesome} />Lobortis feugiat vivamus at augue eget.
        </h4>
        <p>
          Porttitor massa id neque aliquam vestibulum. Purus viverra accumsan in nisl nisi scelerisque eu. Donec pretium vulputate sapien nec sagittis aliquam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Feugiat in ante metus dictum at. Augue lacus viverra vitae congue eu consequat ac felis donec. Eget sit amet tellus cras adipiscing enim. Bibendum neque egestas congue quisque egestas diam in. Tortor at risus viverra adipiscing at in tellus integer. Cras tincidunt lobortis feugiat vivamus at augue. In egestas erat imperdiet sed euismod. Id donec ultrices tincidunt arcu non. Eu non diam phasellus vestibulum lorem sed.
        </p>
        <p className={style.SupplyBottomText}>
          Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Vitae et leo duis ut diam quam nulla porttitor. Lectus quam id leo in vitae turpis massa. Sapien pellentesque habitant morbi tristique senectus et netus. Vitae purus faucibus ornare suspendisse sed. Praesent tristique magna sit amet purus gravida. Fames ac turpis egestas maecenas pharetra convallis posuere. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat.
        </p>
        <strong>Tincidunt dui ut ornare lectus sit amet est.</strong>
      </div>
    </div>
  )
};

export default PartsSupply;
