import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import '../styles/pageHeaderContainer.css'
import profilepic from '../assets/img/profilepic.jpg'
import HomeButtonsRow from '../components/homeButtonsRow'

const WhatsHappeningContainer = () => {
  return (
    <>
      <Container className="twitter-font">
        <Row>
          <Card className='fontstyle'>
            <Card.Body>
              <Row ></Row>
              <img src={profilepic} alt="profilepic" style={{ marginTop: '-10px', marginLeft: '0.5px'}} />
              <span className="fontstyle">What's happening?</span>
            </Card.Body>
            <HomeButtonsRow />
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default WhatsHappeningContainer
