import React from 'react'
import {
  Container,
  Row,
  Card,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import '../styles/pageHeaderContainer.css'
import '../styles/common.css'
import '../styles/whatsHappeningContainer.css'
import profilepic from '../assets/img/profilepic.jpg'
import HomeButtonsRow from '../components/homeButtonsRow'

const WhatsHappeningContainer = () => {
  return (
    <>
      <Container className="twitter-font">
        <Row>
          <Card className="fontstyle">
            <Card.Body>
              <Row></Row>
              <Button variant="avatar">
                <img
                  src={profilepic}
                  className="main-avatar"
                  alt="profilepic"
                  style={{ marginTop: '-10px', marginLeft: '0.5px' }}
                />
              </Button>
              <span>
                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    placeholder="What's Happening?"
                    className='noborder-inputgroup'
                  />
                </InputGroup>
              </span>
            </Card.Body>
            <HomeButtonsRow />
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default WhatsHappeningContainer
