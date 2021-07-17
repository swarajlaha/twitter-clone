import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { RiFileList2Line } from 'react-icons/ri'
import '../styles/common.css'

const ListsNavItem = () => {
  return (
    <>
      <Button variant='navitem' className='mb-2'>
        <RiFileList2Line
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">Lists</span>
      </Button>
    </>
  )
}

export default ListsNavItem
