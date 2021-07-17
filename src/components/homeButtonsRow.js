import React from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { AiOutlineFileGif, AiOutlineCalendar } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { GrEmoji, GrSchedule } from 'react-icons/gr'
import { Row, Col, Button } from 'react-bootstrap'
import '../styles/homeButtonsRow.css'

const HomeButtonsRow = () => {
  return (
    <>
      <Row className="twitter-color">
        <Col md={1}></Col>
        <Col md={1}>
          <IoImageOutline />
        </Col>
        <Col md={1}>
          <AiOutlineFileGif />
        </Col>
        <Col md={1}>
          <BiPoll />
        </Col>
        <Col md={1}>
          <GrEmoji />
        </Col>
        <Col md={1}>
          <AiOutlineCalendar />
        </Col>
        <Col md={1}></Col>
        <Col></Col>
        <Col>
          <Button variant="tweet">
            <span>
              <b>Tweet</b>
            </span>
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default HomeButtonsRow
