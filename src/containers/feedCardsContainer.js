import React from 'react'
import { Col } from 'react-bootstrap'
import FeedCard from '../components/feedCard'

const FeedCardsContainer = () => {
  return (
    <>
      <Col className='mt-2'>
        <FeedCard />
      </Col>
    </>
  )
}

export default FeedCardsContainer