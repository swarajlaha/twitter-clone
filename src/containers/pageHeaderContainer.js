import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import { GiStarShuriken } from 'react-icons/gi'
import '../styles/pageHeaderContainer.css'

const PageHeaderContainer = () => {
  return (
    <>
      <Container className="twitter-font">
        <Row>
          <Card className='borderstyle'>
            <Card.Body>
              Home
              <GiStarShuriken className='icon-margin' size={25} />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default PageHeaderContainer
