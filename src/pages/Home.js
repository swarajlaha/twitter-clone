import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import SideNavBar from '../commons/sideNavBar'
import FeedCardsContainer from '../containers/feedCardsContainer'
import PageHeaderContainer from '../containers/pageHeaderContainer'
import WhatsHappeningContainer from '../containers/whatsHappeningContainer'
import '../styles/common.css'

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3} className='sidenav'>
            <SideNavBar />
          </Col>
          <Col md={6} className='feedcontentcol'>
            <PageHeaderContainer />
            <WhatsHappeningContainer />
            <FeedCardsContainer />
          </Col>
          <Col md={3}>
            <SideNavBar />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
