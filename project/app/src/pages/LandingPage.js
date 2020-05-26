import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export const LandingPage = () => {
  return (
    <>
      <main style={{ backgroundColor: 'black' }} className="text-white">

        {/* Navbar */}

        <Container fluid className="px-0" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand>
              <span style={{fontSize: 37}}>That's What Cheese Said</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Button className="mx-3"><Nav.Link href="#">Restaurants</Nav.Link></Button>
                <Button className="mx-3"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
                <Button className="mx-3"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
                <Button className="mx-3"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </main>
    </>
  )
}