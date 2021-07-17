import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { BsPerson } from 'react-icons/bs'
import '../styles/common.css'

const ProfileNavItem = () => {
  return (
    <>
      <Button variant='navitem'>
        <BsPerson
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">Profile</span>
      </Button>
      <Row></Row>
    </>
  )
}

export default ProfileNavItem
