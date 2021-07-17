import React from 'react'
import { Container } from 'react-bootstrap'
import HomeNavItem from '../components/homeNavItem'

const NavItemsContainer = () => {
  return (
    <>
      <Container className="mt-4">
        <HomeNavItem />
      </Container>
    </>
  )
}

export default NavItemsContainer
