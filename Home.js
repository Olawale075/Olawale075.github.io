import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import background from "../assets/imag12.jfif";
import backgrounds from "../assets/imag14.jpg";
import backgroundss from "../assets/imag11.jfif";
export const Home = () => {
  return (
    <div>
     
      <Card className='text-center m-1'>
      <Card.Body>Let know how we can make your busness work out</Card.Body>
    </Card>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={background} />
        <Card.Body>
          <Card.Title>Design Yours Today</Card.Title>
          <Card.Text>
We work to make out client happy contact us today let Bargain together
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={backgrounds} />
        <Card.Body>
          <Card.Title>Contact Today</Card.Title>
          <Card.Text>
           To get your application done 
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
      <Card.Img variant="top" src={backgroundss} />
        <Card.Body>
          <Card.Title>Create a Website</Card.Title>
          <Card.Text>
          You're Proud of to make your busness grow more
          </Card.Text>
        </Card.Body>
     
      </Card>
    </CardGroup></div>
  )
}
