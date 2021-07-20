import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../styles/common.css'
import '../styles/whatshappeningCard.css'
import '../styles/whotofollow.css'
import whatshappening from '../assets/img/whatshappening1.jpg'
import { VscChromeClose } from 'react-icons/vsc'

const TopicstofollowCard = () => {
  return (
    <>
      <Card
        style={{ borderTop: 'none', borderBottom: 'none', backgroundColor: 'whitesmoke' }}
        className="mt-3 whatshappeningcard"
      >
        <Card.Header
          className="whatshappeningcard"
          style={{
            width: '19rem',
            fontSize: '1.2rem',
            backgroundColor: 'whitesmoke',
          }}
        >
          <b>Topics to follow</b>
        </Card.Header>
        <Button variant="whotofollowbtn">
          <span style={{ marginLeft: '5px' }}>
            <span className="profilefollow-font">Space</span>
            <br />
            <span style={{ marginLeft: '5px' }} className="namefollow-font">
              Space
            </span>
            <Button variant="closecross">
              <span>
                <VscChromeClose />
              </span>
            </Button>
            <Button variant="follow">
              <span>
                <b>Follow</b>
              </span>
            </Button>
          </span>
        </Button>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
        <Button variant="whotofollowbtn">
          <span style={{ marginLeft: '5px' }}>
            <span className="profilefollow-font">Odisha</span>
            <br />
            <span style={{ marginLeft: '5px' }} className="namefollow-font">
              All about Odisha
            </span>
            <Button variant="closecross">
              <span>
                <VscChromeClose />
              </span>
            </Button>
            <Button variant="follow">
              <span>
                <b>Follow</b>
              </span>
            </Button>
          </span>
        </Button>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
        <Button variant="whotofollowbtn">
          <span style={{ marginLeft: '5px' }}>
            <span className="profilefollow-font">Cricket</span>
            <br />
            <span style={{ marginLeft: '5px' }} className="namefollow-font">
              Sports
            </span>
            <Button variant="closecross">
              <span>
                <VscChromeClose />
              </span>
            </Button>
            <Button variant="follow">
              <span>
                <b>Follow</b>
              </span>
            </Button>
          </span>
        </Button>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
        <Button variant="whotofollowbtn">
          <span style={{ marginLeft: '5px' }}>
            <span className="profilefollow-font">Physics</span>
            <br />
            <span style={{ marginLeft: '5px' }} className="namefollow-font">
              Science
            </span>
            <Button variant="closecross">
              <span>
                <VscChromeClose />
              </span>
            </Button>
            <Button variant="follow">
              <span>
                <b>Follow</b>
              </span>
            </Button>
          </span>
        </Button>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
        <Card.Header
          style={{
            width: '19.2rem',
            fontSize: '1.2rem',
            backgroundColor: 'whitesmoke',
            fontSize: '0.9rem',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
          }}
        >
          <a href="">Show more</a>
        </Card.Header>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
      </Card>
    </>
  )
}

export default TopicstofollowCard
