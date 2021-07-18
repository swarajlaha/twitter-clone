import React from 'react'
import { Col } from 'react-bootstrap'
import FeedCard from '../components/feedCard'
import TxtFeedCard from '../components/txtFeedCard'

const FeedCardsContainer = () => {
  return (
    <>
      <Col className='mt-2'>
        <FeedCard />
        <TxtFeedCard />
        <FeedCard />
        <FeedCard />
        <TxtFeedCard />
        <FeedCard />
      </Col>
    </>
  )
}

export default FeedCardsContainer