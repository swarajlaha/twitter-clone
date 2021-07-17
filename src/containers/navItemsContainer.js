import React from 'react'
import { Container } from 'react-bootstrap'
import ExploreNavItem from '../components/exploreNavItem'
import HomeNavItem from '../components/homeNavItem'
import MoreNavItem from '../components/moreNavItem'
import MsgNavItem from '../components/msgNavItem'
import NotifNavItem from '../components/notifNavItem'
import ProfileNavItem from '../components/profileNavItem'

const NavItemsContainer = () => {
  return (
    <>
      <Container className="mt-4">
        <HomeNavItem /><br />
        <ExploreNavItem /><br />
        <NotifNavItem /><br />
        <MsgNavItem /><br />
        <ProfileNavItem /><br />
        <MoreNavItem />
      </Container>
    </>
  )
}

export default NavItemsContainer
