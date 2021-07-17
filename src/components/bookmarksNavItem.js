import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { BiBookmark } from 'react-icons/bi'
import '../styles/common.css'

const BookmarksNavItem = () => {
  return (
    <>
      <Button variant='navitem' className='mb-2'>
        <BiBookmark
          className="top-margin logo fa-lg right-margin"
          size={28}
        />
        <span className="twitter-font top-margin">Bookmarks</span>
      </Button>
    </>
  )
}

export default BookmarksNavItem
