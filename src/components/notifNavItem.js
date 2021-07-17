import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { VscBell } from 'react-icons/vsc'
import '../styles/common.css'

const NotifNavItem = () => {
  return (
    <>
      <Button variant='navitem' className='mb-2'>
        <VscBell
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">Notifications</span>
      </Button>
    </>
  )
}

export default NotifNavItem
