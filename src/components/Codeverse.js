
import React, { Component } from "react";
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import background from "../assets/img1.png";
import backgrounds from "../assets/img2.jpg";
export class Codeverse extends Component{
  render() {
  return (
    <div content-fluse> 

    <Card>
    <Card.Img variant="top" src={backgrounds}/>
      <Card.Body>
        <Card.Title className='bg-primary p-4 m- text-center text-light'>Contact us today</Card.Title>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
   
    </Card>
    
  
    </div>
  )
}}

export default Codeverse