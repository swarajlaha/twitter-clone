import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { CgMoreO } from 'react-icons/cg'
import '../styles/common.css'

const MoreNavItem = () => {
  return (
    <>
      <Button variant='navitem'>
        <CgMoreO
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">More</span>
      </Button>
      <Row></Row>
    </>
  )
}

export default MoreNavItem
