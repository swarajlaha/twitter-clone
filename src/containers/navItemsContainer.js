import React from 'react'
import { Container } from 'react-bootstrap'
import ExploreNavItem from '../components/exploreNavItem'
import HomeNavItem from '../components/homeNavItem'
import MoreNavItem from '../components/moreNavItem'
import MsgNavItem from '../components/msgNavItem'
import NotifNavItem from '../components/notifNavItem'
import ProfileBarNavItem from '../components/profileBarNavItem'
import ProfileNavItem from '../components/profileNavItem'
import TweetBtnNavItem from '../components/tweetBtnNavItem'

const NavItemsContainer = () => {
  return (
    <>
      <Container className="mt-4">
        <HomeNavItem /><br />
        <ExploreNavItem /><br />
        <NotifNavItem /><br />
        <MsgNavItem /><br />
        <ProfileNavItem /><br />
        <MoreNavItem /><br />
        <TweetBtnNavItem /><br /><br />
        <ProfileBarNavItem /> 
      </Container>
    </>
  )
}

export default NavItemsContainer
