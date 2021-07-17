import React from 'react'
import { Button, Row } from 'react-bootstrap'
import '../styles/common.css'
import '../styles/tweetBtnNavItem.css'

const TweetBtnNavItem = () => {
  return (
    <>
      <Button variant='tweetnavitem'>
        <span className="twitter-font tweet-btn-nav-item txt-font-size">Tweet</span>
      </Button>
      <Row className='mb-5'></Row>
    </>
  )
}

export default TweetBtnNavItem
