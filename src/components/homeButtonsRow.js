import React from 'react'
import { IoImageOutline } from 'react-icons/io5'
import { AiOutlineFileGif, AiOutlineCalendar } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'
import { GrEmoji } from 'react-icons/gr'
import { Row, Col, Button } from 'react-bootstrap'
import '../styles/homeButtonsRow.css'

const HomeButtonsRow = () => {
  return (
    <>
      <Row>
        <Col md={1}></Col>
        <Col md={1}>
          <Button variant="homebuttonsrow" size="lg"><IoImageOutline /></Button>
        </Col>
        <Col md={1}>
        <Button variant="homebuttonsrow" size="lg"><AiOutlineFileGif /></Button>
        </Col>
        <Col md={1}>
        <Button variant="homebuttonsrow" size="lg"><BiPoll /></Button>
        </Col>
        <Col md={1}>
        <Button variant="homebuttonsrow" size="lg"><GrEmoji /></Button>
        </Col>
        <Col md={1}>
        <Button variant="homebuttonsrow" size="lg"><AiOutlineCalendar /></Button>
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
