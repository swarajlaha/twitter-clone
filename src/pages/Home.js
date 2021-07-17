import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import SideNavBar from '../commons/sideNavBar'
import PageHeaderContainer from '../containers/pageHeaderContainer'
import WhatsHappeningContainer from '../containers/whatsHappeningContainer'

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
            <SideNavBar />
          </Col>
          <Col md={6}>
            <PageHeaderContainer />
            <WhatsHappeningContainer />
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
