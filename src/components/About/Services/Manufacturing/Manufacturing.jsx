import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Manufacturing.module.css';

import fixingEqipment from './fixing-equipment.webp'

import Accordion from './Accordion';

const Manufacturing = (props) => {
  const [setActive, setActiveState] = useState('FIXING EQIPMENT')

  return (
    <div className={style.ManufacturingOwner}>
      <Accordion title="FIXING EQIPMENT">
        <div className={style.AccordionItem1}>
          <div>
            <p>Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Id ornare arcu odio ut sem nulla pharetra diam. Diam quis enim lobortis scelerisque fermentum dui. Dictum sit amet justo donec enim diam vulputate ut pharetra. Eget magna fermentum iaculis eu non diam phasellus. Cursus metus aliquam eleifend mi. Risus quis varius quam quisque id diam vel. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Feugiat in fermentum posuere urna. Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</p>
            <p>Pellentesque dignissim enim sit amet venenatis urna cursus eget. Velit sed ullamcorper morbi tincidunt. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. In arcu cursus euismod quis. Pulvinar elementum integer enim neque. Volutpat odio facilisis mauris sit. Justo laoreet sit amet cursus sit. Urna condimentum mattis pellentesque id nibh. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Facilisi cras fermentum odio eu.</p>
            <p>Porttitor lacus luctus accumsan tortor. Ipsum consequat nisl vel pretium. Quam pellentesque nec nam aliquam sem. Id ornare arcu odio ut sem. Mattis pellentesque id nibh tortor id aliquet lectus proin. Nisl tincidunt eget nullam non. Augue eget arcu dictum varius duis at consectetur. Dui sapien eget mi proin sed libero. Ultrices dui sapien eget mi proin. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Metus aliquam eleifend mi in nulla.</p>
          </div>
          <img
          className={style.FixingEqipmentImg}
          src={fixingEqipment}
          alt='electric car parts fixing eqipment'
          />
        </div>
        <p className={style.AccordionItem1AfterAll}>Ante in nibh mauris cursus mattis molestie a iaculis at. Sit amet est placerat in egestas erat imperdiet sed euismod. Nibh tellus molestie nunc non blandit massa enim nec. Lacus luctus accumsan tortor posuere ac ut consequat. Vulputate ut pharetra sit amet aliquam id diam. Leo urna molestie at elementum eu facilisis sed odio. Tincidunt arcu non sodales neque sodales ut. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Duis ut diam quam nulla.</p>
      </Accordion>
      <Accordion title="TORQUE TRANSFER PARTS">
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
      <Accordion title="RECHARGEABLE BATTERIES">
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
      <Accordion title="ELECTRICAL COMPONENTS">
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
    </div>
  )
}

export default Manufacturing;
