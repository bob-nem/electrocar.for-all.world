import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faBook, faFileAlt, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import style from './Mission.module.css';

import aboutResource from './el-engine.webp';
import aboutScheme from './car-scheme.webp';

const Mission = (props) => {
  return (
    <div className={style.MissionOwner}>
      <div className={style.MissionSlogan}>
        <h2>Technical resource about the capabilities of electric motors, rechargeable batteries, related equipment for cars and their installation in place of outdated power units.</h2>
      </div>
      <div className={style.MissionRow1}>
        <img
        className={style.EngineSchemeImage}
        src={aboutResource}
        alt="electric motor with attachments"
        />
        <h4 className="pt-1"><FontAwesomeIcon icon={faBook} className={style.MissionFontAwesome} />All kinds of educational materials for those interested in the topic of electric vehicles.</h4>
        <p className={style.MissionLibraryText}>
          Information about electric civilian cars and motorcycles, freight tractors and special equipment, sports cars. Historical and reference materials, technical literature, specialized articles and reviews. Considerations of both integrated solutions of individual components and assemblies for installation in electric cars are available for your attention. We try to give an unbiased assessment of the effectiveness and rationality of different solutions for the same task. The future of electric cars is now available to everyone.
        </p>
        <p>
          <FontAwesomeIcon icon={faInfoCircle} className={style.MissionFontAwesome} />Safety, reliability, economy and comfort are the hallmarks of electric vehicles. Moreover, it is breathtaking and a lot of fun.
        </p>
      </div>
      <div className={style.MissionRow2}>
        <h4>
          <FontAwesomeIcon icon={faFileAlt} className={style.MissionFontAwesome} />Team of experienced technical specialists, enthusiasts of electric cars, we adapt vehicles to electric traction. We will consider your task, give professional advice and do the whole range of work.
        </h4>
        <img
          className={style.CarLayoutImage}
          src={aboutScheme}
          alt="electrocar sheme"
        />
        <p className={style.MissionTeamText}>
          Vehicle equipment with a modern electric motor has many diverse solutions in choosing the power plant itself, related mechanisms and electronic components. The installation methods and final adjustment of the design are different for each task, vehicle model and applied parts. For independent study of the possibilities of modernization of ordinary cars into electric cars with examples of specific tasks, go to the “solutions” section. The “library” section contains reference materials with the characteristics and description of spare parts for electric vehicles and their comparison. Before embarking on a real work, we strongly recommend that you carefully read all the information on the upcoming case and evaluate your capabilities. We wish you success, a clear sky and pure energy of movement.
        </p>
        <cite>
          <FontAwesomeIcon icon={faGlobeEurope} className={style.MissionFontAwesome} />
          <strong>
            The world can only develop in a natural way due to universal enlightenment - <em>Nikola Tesla.</em>
          </strong>
        </cite>
      </div>
      <div className={style.MissionFooter}>
        <div className={style.MissionFooterLink1}>
          Magazine
          <div className={style.MissionFooterLinkDescr}>
          <ul>
            <li>Ready-made kits</li>
            <li>Main components</li>
            <li>Related parts</li>
          </ul>
          </div>
        </div>
        <div className={style.MissionFooterLink2}>
          Forum
          <div className={style.MissionFooterLinkDescr}>
          <ul>
            <li>Discussions</li>
            <li>Advertising</li>
            <li>Soviets</li>
          </ul>
          </div>
        </div>
        <div className={style.MissionFooterLink3}>
          Library
          <div className={style.MissionFooterLinkDescr}>
          <ul>
            <li>Instructions</li>
            <li>Articles</li>
            <li>Literarure</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Mission;
