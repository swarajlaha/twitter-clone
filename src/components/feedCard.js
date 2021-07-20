import React from 'react'
import { Card, Button, Row, Container } from 'react-bootstrap'
import avatar from '../assets/img/avatar1.jpg'
import postpic from '../assets/img/postpic.jpg'
import postpictwo from '../assets/img/postpic2.jpg'
import { VscDebugStackframeDot } from 'react-icons/vsc'
import { GrMore } from 'react-icons/gr'
import { GoVerified } from 'react-icons/go'
import ReactionBar from './reactionBar'

const FeedCard = () => {
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
                <b>Ver User</b>&nbsp;<GoVerified style={{color: '#1da1f2'}} />&nbsp;
                <span className='username'>@VUser<VscDebugStackframeDot />17m</span>
              </Button>
              <Button variant="profilemore">
                <GrMore />
              </Button>
              <p className='feedcontent'>This is a demo tweet. Are you reading it?</p>
              <img
                  className='postpic'
                  src={postpictwo}
                  alt="avatarpic"
                  style={{ marginTop: '-10px', marginLeft: '0.5px' }}
                />
                <ReactionBar />
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  )
}

export default FeedCard
