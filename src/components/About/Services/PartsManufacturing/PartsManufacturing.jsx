import React from 'react';
import {Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './PartsManufacturing.module.css';

const Manufacturing = () => {
  return (
    <div className={style.ManufacturingOwner}>
      <Accordion defaultActiveKey="0">
        <Card className={style.ManufacturingCard}>
          <Accordion.Toggle as={Card.Header}  className={style.ManufacturingCardHeader}eventKey="0">
            <h5>transitional transmission units</h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            fixing accessories
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            electrical components
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            software customization
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default Manufacturing;
