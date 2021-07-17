import React from 'react'
import { Button, Row } from 'react-bootstrap'
import '../styles/common.css'
import '../styles/profileBarNavItem.css'
import profilepic from '../assets/img/profilepic.jpg'
import { GrMore } from 'react-icons/gr'

const ProfileBarNavItem = () => {
  return (
    <>
      <Row style={{marginTop: '-15px'}}></Row>
      <Button variant="profilebarnavitem">
        <img src={profilepic} alt='profilepic' />
        <span className="profilebar-font">Swaraj Laha
          <span className='morestyle'><GrMore /></span><br />
        </span>
        <span className="profilename-font">@swaraj_srj</span>
      </Button>
    </>
  )
}

export default ProfileBarNavItem
