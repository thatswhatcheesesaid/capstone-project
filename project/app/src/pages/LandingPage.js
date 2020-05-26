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

        {/* Ranking Lists */}

        {/*
          <table className="table table-borderless text-white text-center" style={{ tableLayout: 'fixed' }}>
            <thead className="mb-3">
            <tr className="py-5">
              <th scope="col" className="py-5"><h1>Restaurants</h1></th>
              <th scope="col" className="py-5"><h1>Cheesiest User Photos</h1></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <Card className="border-0 bg-transparent">
                  <Col md={3}>
                    <Card.Body>
                      <Card.Title><h3>#1 Restaurant</h3></Card.Title>
                      <Card.Text>Restaurant name</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col md={3}>
                    <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
                  </Col>
                </Card>
              </td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>@twitter</td>
              <td>asdfjkl;</td>
            </tr>
            </tbody>
          </table>
*/}

        <Container className="d-inline">
          <Row>
            <Col md={6}><h1>Restaurants</h1></Col>
            <Col md={6}><h1>Restaurants</h1></Col>
          </Row>
        </Container>
        <Container className="d-inline">
          <h1>Cheesiest Photos of the Week</h1>
        </Container>
      </main>
    </>
  )
}