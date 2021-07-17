import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { RiHome7Fill } from 'react-icons/ri'
import '../styles/common.css'

const HomeNavItem = () => {
  return (
    <>
      <Button variant='navitem' className='mb-2'>
        <RiHome7Fill
          className="twitter-color top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-color twitter-font top-margin">Home</span>
      </Button>
    </>
  )
}

export default HomeNavItem
