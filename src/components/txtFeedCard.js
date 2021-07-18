import React from 'react'
import { Card, Button, Row, Container } from 'react-bootstrap'
import avatar from '../assets/img/avatar1.jpg'
import postpic from '../assets/img/postpic.jpg'
import { VscDebugStackframeDot } from 'react-icons/vsc'
import { GrMore } from 'react-icons/gr'
import ReactionBar from './reactionBar'

const TxtFeedCard = () => {
  return (
    <>
      <Container className="twitter-font">
        <Row>
          <Card>
            <Card.Body>
              <Row></Row>
              <Button variant="avatar">
                <img
                  src={avatar}
                  className="main-avatar"
                  alt="avatarpic"
                  style={{ marginTop: '-10px', marginLeft: '0.5px' }}
                />
              </Button>
              <Button variant="profilename">
                <b>Tweeter User</b>&nbsp;
                <span className="username">
                  @TUser
                  <VscDebugStackframeDot />
                  25m
                </span>
              </Button>
              <Button variant="profilemore">
                <GrMore />
              </Button>
              <p className="feedcontent">
                This is a demo text tweet. I wonder if you find this interesting enough to go through!!
              </p>
              <ReactionBar />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default TxtFeedCard
