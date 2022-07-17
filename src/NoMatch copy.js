import React from 'react'

import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import background from "./assets/img1.png";
import backgrounds from "./assets/img2.jpg";
const NoMatch = () => {
  return (
    <div content-fluse> 

    <Card>
    <Card.Img variant="top" src={backgrounds}/>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to
          additional content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    
  
    </div>
  )
}

export default NoMatch