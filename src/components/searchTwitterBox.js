import React from 'react'
import { InputGroup, FormControl, Container } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import '../styles/searchTwitterBox.css'

const SearchTwitterBox = () => {
  return (
    <>
      <InputGroup className="mt-1">
        <InputGroup.Text className="searchbox" id="basic-addon1">
          <FiSearch />
        </InputGroup.Text>
        <FormControl
          placeholder={"Search Twitter"}
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="searchbox"
        />
      </InputGroup>
    </>
  )
}

export default SearchTwitterBox
