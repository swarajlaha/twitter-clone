import React from 'react'
import { Container } from 'react-bootstrap'
import ExploreNavItem from '../components/exploreNavItem'
import HomeNavItem from '../components/homeNavItem'

const NavItemsContainer = () => {
  return (
    <>
      <Container className="mt-4">
        <HomeNavItem /><br />
        <ExploreNavItem />
      </Container>
    </>
  )
}

export default NavItemsContainer
