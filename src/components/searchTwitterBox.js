import React from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import '../styles/searchTwitterBox.css'

const SearchTwitterBox = () => {
  return (
    <>
      <InputGroup className="mt-1">
        <InputGroup.Text className="searchbox" id="basic-addon1">
          <FiSearch />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search Twitter
        </InputGroup.Text>
      </InputGroup>
    </>
  )
}

export default SearchTwitterBox
