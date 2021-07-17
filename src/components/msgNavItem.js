import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi'
import '../styles/common.css'

const MsgNavItem = () => {
  return (
    <>
      <Button variant='navitem'>
        <FiMail
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">Messages</span>
      </Button>
      <Row></Row>
    </>
  )
}

export default MsgNavItem
