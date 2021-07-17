import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { FiHash } from 'react-icons/fi'
import '../styles/common.css'

const ExploreNavItem = () => {
  return (
    <>
      <Button variant='navitem' className='mb-2'>
        <FiHash
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">Explore</span>
      </Button>
    </>
  )
}

export default ExploreNavItem
