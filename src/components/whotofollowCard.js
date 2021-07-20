import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../styles/common.css'
import '../styles/whatshappeningCard.css'
import '../styles/whotofollow.css'
import whotofollowone from '../assets/img/whotofollow1.jpg'
import whotofollowtwo from '../assets/img/whotofollow2.jpg'

const WhotofollowCard = () => {
  return (
    <>
      <Card
        style={{ borderTop: 'none', borderBottom: 'none' }}
        className="mt-5 whatshappeningcard"
      >
        <Card.Header
          className="whatshappeningcard"
          style={{
            width: '19rem',
            fontSize: '1.2rem',
            backgroundColor: 'whitesmoke',
          }}
        >
          <b>Who to follow</b>
        </Card.Header>
        <Button variant="whotofollowbtn">
          <span>
            <img
              className="whotofollowimg"
              src={whotofollowone}
              alt="avatarpic"
            />
            <span className="profilefollow-font">Jon Doe</span><br />
            <span className="namefollow-font">@reachjon_doe</span>
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
          <span>
            <img
              className="whotofollowimg"
              src={whotofollowtwo}
              alt="avatarpic"
            />
            <span className="profilefollow-font">Michael Scott</span><br />
            <span className="namefollow-font">@dunder_scott</span>
            <Button variant="follow">
            <span>
              <b>Follow</b>
            </span>
          </Button>
          </span>
          <Card.Header
            style={{
              width: '19.2rem',
              fontSize: '1.2rem',
              backgroundColor: 'whitesmoke',
              marginLeft: '-15px',
              fontSize: '0.9rem',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px'
            }}
          >
            <a href=''>Show more</a>
          </Card.Header>
        </Button>
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

export default WhotofollowCard
