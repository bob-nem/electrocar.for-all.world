import React, { useState, useRef, useEffect } from 'react';
import style from './Manufacturing.module.css';

import Chevron from './Chevron';

const Accordion = (props) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState(`${style.AccordionIcon}`)
  const contentRef = useRef(null)

//content setseight by commentGuy
  {/*useEffect(() => {
    contentRef.current.style.maxHeight = setActive ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [contentRef, setActive])*/}

//my own try to make toggler
  const toggleActive = (i) => {
    if (setHeight == i) {
      return setHeightState(null)
    }
    setHeightState()
  }

  const toogleItemActive = () => {
    setActiveState(setActive === '' ? `${style.Active}` : '');
    setHeightState(
      setActive === `${style.Active}` ? '0px' : `${contentRef.current.scrollHeight}px`
    );
    setRotateState (
      setActive === `${style.Active}` ? `${style.AccordionIcon}` : `${style.AccordionIcon} ${style.AccordionIconRotate}`
    );
  }

  return (
    <div className={style.AccordionOwner}>
      <button className={`${style.AccordionTitle} ${setActive}`} onClick={toogleItemActive}>
        <li>{props.title}</li>
        <Chevron className={ `${setRotate}` } width={10} fill={'white'} />
      </button>

        <div
          ref={contentRef}
          style={{maxHeight: `${setHeight}`}}
          className={style.AccordionContent}
        >
          {props.children}
        </div>

    </div>
  )
}

export default Accordion;
