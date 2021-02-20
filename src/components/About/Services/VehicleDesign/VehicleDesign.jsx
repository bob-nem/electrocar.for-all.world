import React from 'react';
import style from './Design.module.css'

import designDraw from './draw-banner.webp';
import schemePlaning from './e-tron-scheme.webp';

 const VehicleDesign = () => {
  return (
    <div className={style.DesignOwner}>
    <div className={style.DesignHeader}>
      <h3>Some actions simply should not be done without planning ahead. And all because planning allows you to reduce possible risks, that everything will go wrong as intended. The golden rule applies to life as a whole.</h3>
    </div>
      <div className={style.DesignRow}>
          <img
          className={style.DesignDrawImage}
          src={designDraw}
          alt="Drawing"
          />
        <div className={style.ServicesDesignText}>
          <p>
            Convallis posuere morbi leo urna molestie at elementum. Id velit ut tortor pretium viverra. Dolor morbi non arcu risus quis. Habitant morbi tristique senectus et netus. Egestas pretium aenean pharetra magna ac placerat. Justo donec enim diam vulputate ut pharetra sit amet. Justo eget magna fermentum iaculis. Diam maecenas sed enim ut sem. Massa tincidunt dui ut ornare. Quam pellentesque nec nam aliquam.
          </p>
          <p>
             Elit duis tristique sollicitudin nibh sit amet commodo. Lobortis mattis aliquam faucibus purus. Faucibus et molestie ac feugiat sed. Ipsum consequat nisl vel pretium. Ipsum faucibus vitae aliquet nec ullamcorper.  Elementum integer enim neque volutpat ac tincidunt vitae semper quis. At auctor urna nunc id cursus metus aliquam.
          </p>
        </div>
      </div>
    <div className={style.DesignHeader}>
      <h3>It is rational to take into account several design approaches to one project with different solutions.</h3>
    </div>
    <div className={style.DesignRow}>
      <img
        className={style.DesignDrawImage}
        src={schemePlaning}
        alt="Electrocar scheme planing"
      />
      <div className={style.ServicesDesignText}>
        <p>
          Nunc sed blandit libero volutpat sed cras. Sed risus pretium quam vulputate dignissim. In eu mi bibendum neque egestas congue quisque. Fusce ut placerat orci nulla pellentesque dignissim enim. Magna sit amet purus gravida quis. Senectus et netus et malesuada fames ac turpis egestas integer. Platea dictumst vestibulum rhoncus est pellentesque elit. Vulputate dignissim suspendisse in est ante in nibh. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Cursus sit amet dictum sit amet justo donec enim diam. Senectus et netus et malesuada fames. Arcu cursus vitae congue mauris. Dolor purus non enim praesent elementum facilisis. Dictumst quisque sagittis purus sit amet.
        </p>
        <p>
          Pretium nibh ipsum consequat nisl vel pretium lectus quam id.  Amet nisl suscipit adipiscing bibendum est ultricies.
        </p>
      </div>
      </div>
      <div className={style.DesignBottomText}>
        <p>
           Arcu non sodales neque sodales ut etiam. Vestibulum sed arcu non odio euismod lacinia at. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Praesent semper feugiat nibh sed pulvinar proin gravida. Ultricies mi eget mauris pharetra et ultrices neque. In vitae turpis massa sed elementum. Augue ut lectus arcu bibendum at varius vel. Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Ipsum nunc aliquet bibendum enim facilisis. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Pulvinar elementum integer enim neque. Neque ornare aenean euismod elementum nisi.
        </p>
      </div>
    </div>
  )
};

export default VehicleDesign;
