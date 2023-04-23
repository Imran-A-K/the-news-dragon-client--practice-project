import React from 'react'
import Header from '../pages/Shared/Header/Header'
import Footer from '../pages/Shared/Footer/Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../pages/Shared/leftNav/leftNav';
import RightNav from '../pages/Shared/rightNav/RightNav';


const Main = () => {
  return (
    <div>
        <Header></Header>
        
        <Container>
      <Row>
        <Col lg={3}>
        <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
        <h2>Main Content Coming.....</h2>
        </Col>
        <Col lg={3}>
        <RightNav></RightNav>
        </Col>
      </Row>
    </Container>

        <Footer></Footer>
    </div>
  )
}

export default Main