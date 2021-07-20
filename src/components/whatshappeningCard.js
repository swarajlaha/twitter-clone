import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../styles/common.css'
import '../styles/whatshappeningCard.css'
import { VscDebugStackframeDot } from 'react-icons/vsc'
import whatshappening from '../assets/img/whatshappening1.jpg'
import whatshappeningtwo from '../assets/img/whatshappening2.jpg'

const WhatshappeningCard = () => {
  return (
    <>
      <Card
        style={{ borderTop: 'none', borderBottom: 'none' }}
        className="mt-4 whatshappeningcard"
      >
        <Card.Header
          className="whatshappeningcard"
          style={{
            width: '19rem',
            fontSize: '1.2rem',
            backgroundColor: 'whitesmoke',
          }}
        >
          <b>What's Happening</b>
        </Card.Header>
        <Button variant="whatshappeningbtn">
          <span className="whatshappeningtxt">
            Formula 1 <VscDebugStackframeDot /> LIVE
          </span>
          <br />
          <b>British Grand Prix 2021</b>
          <span>
            <img
              className="whatshappeningimg"
              src={whatshappening}
              alt="avatarpic"
            />
            <br />
            Trending with <a href="">British GP</a>&nbsp;
            <br />
            <a href="">Grand Prix</a>
          </span>
        </Button>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
        <Button variant="whatshappeningbtn" className="pt-3">
          <span className="whatshappeningtxt">
            Entertainment <VscDebugStackframeDot /> Trending
          </span>
          <br />
          <b>#TheKapilSharmaShow</b>
          <br />
          1,000 tweets
        </Button>
        <hr
          style={{
            marginTop: '1px',
            marginBottom: '1px',
            color: '#CDCDCE',
          }}
        />
        <Button variant="whatshappeningbtn">
          <span className="whatshappeningtxt">
            Formula 1 <VscDebugStackframeDot /> LIVE
          </span>
          <br />
          <b>British Grand Prix 2021</b>
          <span style={{fontSize: '0.9rem'}}>
            <img
              className="whatshappeningimg"
              src={whatshappeningtwo}
              alt="avatarpic"
            />
            <br />
            Trending with <a href="">British GP</a>&nbsp;
            <br />
            <a href="">Grand Prix</a>
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
      </Card>
    </>
  )
}

export default WhatshappeningCard
