import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { IoShareOutline } from 'react-icons/io5'

const ReactionBar = () => {
  return (
    <>
      <Row className="mt-1">
        <Col>
          <Button variant="reactmsg">
            <BiMessageRounded size={22} />
          </Button>
        </Col>
        <Col>
          <Button variant="reactretweet">
            <AiOutlineRetweet size={22} />
          </Button>
        </Col>
        <Col>
          <Button variant="reactheart">
            <AiOutlineHeart size={22} />
          </Button>
        </Col>
        <Col>
          <Button variant="reactshare">
            <IoShareOutline size={22} />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default ReactionBar
