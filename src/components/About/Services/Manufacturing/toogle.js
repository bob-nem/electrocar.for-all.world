import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Manufacturing.module.css';

import Accordion from './Accordion';

const Manufacturing = (props) => {
  const [active, setActive] = useState('FIXING EQIPMENT')

  return (
    <div className={style.ManufacturingOwner}>
      <Accordion title="FIXING EQIPMENT" >
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
      <Accordion title="TORQUE TRANSFER PARTS" >
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
      <Accordion title="RECHARGEABLE BATTERIES" >
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
      <Accordion title="ELECTRICAL COMPONENTS" >
        <span className={style.AccordionText}>Cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Velit sed ullamcorper morbi tincidunt ornare. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Mauris nunc congue nisi vitae suscipit tellus mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet.</span>
      </Accordion>
    </div>
  )
}

export default Manufacturing;
