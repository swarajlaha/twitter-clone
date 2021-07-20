import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../styles/common.css'
import '../styles/whatshappeningCard.css'
import '../styles/whotofollow.css'
import { VscDebugStackframeDot } from 'react-icons/vsc'
import whatshappening from '../assets/img/whatshappening1.jpg'

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
              src={whatshappening}
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
            marginTop: '2px',
            marginBottom: '2px',
            color: 'transparent',
          }}
        />
        <Button variant="whotofollowbtn">
          <span>
            <img
              className="whotofollowimg"
              src={whatshappening}
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
            marginTop: '2px',
            marginBottom: '2px',
            color: 'transparent',
          }}
        />
      </Card>
    </>
  )
}

export default WhotofollowCard
