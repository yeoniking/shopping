/* eslint-disable */
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import kuromi from './img/kuromi.jpeg'
import heart from './img/kuromiheart.jpeg'
import cherry from './img/kuromicherry.jpeg'
import cup from './img/kuromicup.jpeg'
import purple from './img/purple.jpg'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


function App() {
  return (
    <div className="App">


   {/* 메인페이지 */}
    <Routes>
     <Route path="/" element={<div>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Row className="align-items-center">
      <Col>
        <Nav className="me-auto d-flex justify-content-center">
        
        <Link to="/" style={{ textDecoration: "none"}}>
          <Navbar.Brand href="#Main">Main</Navbar.Brand>
          </Link>

          <Link to="/clothes" style={{ textDecoration: "none"}}>
          <Nav.Link href="#clothes">clothes</Nav.Link>
          </Link>

          <Link to="/dress" style={{ textDecoration: "none"}}>
          <Nav.Link href="#dress">dress</Nav.Link>
          </Link>
          
          <Link to="/accessory" style={{ textDecoration: "none"}}>
          <Nav.Link href="#accessory">accessory</Nav.Link>
          </Link>
        </Nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <button className="btn btn-light">Cart</button>
      </Col>
      </Row>
      </Container>
    </Navbar>

    <div className="main-bg"></div>
      <div><strong>♥︎</strong></div> <br></br><br></br>

      <Nav variant="tabs" defaultActiveKey="link0">
     <Nav.Item>
     <Nav.Link eventKey="link0">버튼0</Nav.Link>
     </Nav.Item>
     <Nav.Item>
     <Nav.Link eventKey="link1">버튼1</Nav.Link>
     </Nav.Item>
     <Nav.Item>
     <Nav.Link eventKey="link2">버튼2</Nav.Link>
     </Nav.Item>
     </Nav>

      
      <div className="rectangle">
      <br></br>

      <Container>
        <Row>
          <Col xs={4} md={4}>
            <button style={{ border: 'none'}} onClick={() => alert('3000원 할인 쿠폰이 지급 되었습니다.')}>
            <img src={heart} alt="쿠로미 하트" style={{ width: '150px', height: '150px' }} className="responsive-image"/></button>
            <div className="kuromiheart"></div>
            <div style={{ marginTop: '20px' }}></div>
            <h3>쿠로미 하트</h3>
            <p>3000원 할인</p>
          </Col>

          <Col xs={4} md={4}>
          <button style={{ border: 'none'}} onClick={() => alert('5000원 할인 쿠폰이 지급 되었습니다.')}>
            <img src={cherry} alt="쿠로미 체리" style={{ width: '150px', height: '150px' }} className="responsive-image" /></button>
            <div style={{ marginTop: '20px' }}></div>
            <h3>쿠로미 체리</h3>
            <p>5000원 할인</p>
          </Col>

          <Col xs={4} md={4}>
            <div></div>
            <button style={{ border: 'none'}} onClick={() => alert('10000원 할인 쿠폰이 지급 되었습니다.')}>
            <img src={cup} alt="쿠로미 찻잔" style={{ width: '150px', height: '150px' }} className="responsive-image"/></button>
            <div style={{ marginTop: '20px' }}></div>
            <h3>쿠로미 찻잔</h3>
            <p>10000원 할인</p>
          </Col>
        </Row>
      </Container>
      </div>
     </div>}/>

     <Route path="/clothes" element={<div>
        <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Row className="align-items-center">
      <Col>
        <Nav className="me-auto d-flex justify-content-center">
        <Link to="/" style={{ textDecoration: "none"}}>
          <Navbar.Brand href="#Main">Main</Navbar.Brand>
          </Link>

          <Link to="/clothes" style={{ textDecoration: "none"}}>
          <Nav.Link href="#clothes">clothes</Nav.Link>
          </Link>

          <Link to="/dress" style={{ textDecoration: "none"}}>
          <Nav.Link href="#dress">dress</Nav.Link>
          </Link>
          
          <Link to="/accessory" style={{ textDecoration: "none"}}>
          <Nav.Link href="#accessory">accessory</Nav.Link>
          </Link>
        </Nav>
      </Col>

      <Col className="d-flex justify-content-center">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <button className="btn btn-light">Cart</button>
      </Col>
      </Row>
      </Container>
    </Navbar>
      </div>}/>

      {/* dress */}
      <Route path="/dress" element={<div>
        <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Row className="align-items-center">
      <Col>
        <Nav className="me-auto d-flex justify-content-center">
        
        <Link to="/" style={{ textDecoration: "none"}}>
          <Navbar.Brand href="#Main">Main</Navbar.Brand>
          </Link>

          <Link to="/clothes" style={{ textDecoration: "none"}}>
          <Nav.Link href="#clothes">clothes</Nav.Link>
          </Link>

          <Link to="/dress" style={{ textDecoration: "none"}}>
          <Nav.Link href="#dress">dress</Nav.Link>
          </Link>
          
          <Link to="/accessory" style={{ textDecoration: "none"}}>
          <Nav.Link href="#accessory">accessory</Nav.Link>
          </Link>
        </Nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <button className="btn btn-light">Cart</button>
      </Col>
      </Row>
      </Container>
    </Navbar>
      </div>}/>

        {/* accessorry */}
      <Route path="/accessory" element={<div>
        <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Row className="align-items-center">
      <Col>
        <Nav className="me-auto d-flex justify-content-center">
        
        <Link to="/" style={{ textDecoration: "none"}}>
          <Navbar.Brand href="#Main">Main</Navbar.Brand>
          </Link>

          <Link to="/clothes" style={{ textDecoration: "none"}}>
          <Nav.Link href="#clothes">clothes</Nav.Link>
          </Link>

          <Link to="/dress" style={{ textDecoration: "none"}}>
          <Nav.Link href="#dress">dress</Nav.Link>
          </Link>
          
          <Link to="/accessory" style={{ textDecoration: "none"}}>
          <Nav.Link href="#accessory">accessory</Nav.Link>
          </Link>
        </Nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </Col>
      <Col className="d-flex justify-content-center">
        <button className="btn btn-light">Cart</button>
      </Col>
      </Row>
      </Container>
    </Navbar>
      </div>}/>
     </Routes>

      
    <br></br><br></br>
    <br></br><br></br>
    <br></br><br></br>
    

    <div className='purple'>
    <img src={purple} />
  
    </div>
    </div>

  );

}



export default App;