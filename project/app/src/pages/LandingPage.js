import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
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
        {/*
        <Container className="text-center">
          <Row>
            <Col><h1>Restaurants</h1></Col>
            <Col><h1>Cheesiest Photos</h1></Col>
          </Row>
        </Container>*/}


        <Container className="text-center my-5">
          <Row>
            <Col className="display-1">That's What Cheese Said</Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col className="text-center"><h2><u>Top Restaurants</u></h2></Col>
          </Row>
        </Container>
        <Container fluid>
          <CardDeck className="text-center pb-5">
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#1 Restaurant</h3></Card.Title>
                <Card.Text><p>Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#2 Restaurant</h3></Card.Title>
                <Card.Text><p>Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#3 Restaurant</h3></Card.Title>
                <Card.Text><p>Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#4 Restaurant</h3></Card.Title>
                <Card.Text><p>Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#5 Restaurant</h3></Card.Title>
                <Card.Text><p>Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>

        <Container className="my-5">
          <Row>
            <Col className="text-center"><h2><u>Cheesiest Pictures of your Life</u></h2></Col>
          </Row>
        </Container>
        <Container fluid>
          <CardDeck className="text-center pb-5">
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#1 Picture</h3></Card.Title>
                <Card.Text><p>User/Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#2 Picture</h3></Card.Title>
                <Card.Text><p>User/Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#3 Picture</h3></Card.Title>
                <Card.Text><p>User/Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#4 Picture</h3></Card.Title>
                <Card.Text><p>User/Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
            <Card className="border-0 bg-transparent">
              <Card.Img variant="top" src="blue-box.jpg" alt="Blue Box Mac" />
              <Card.Body>
                <Card.Title><h3>#5 Picture</h3></Card.Title>
                <Card.Text><p>User/Restaurant Name</p><p>Score</p></Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        <Container className="pb-5">
          <Row>
            <Col className="text-center">
              <Button className="mb-5">Rank the Best Restaurants Now!</Button>
              <p>Did we miss the best Mac in ABQ? <br></br><a href="#">Click Here</a> to submit a new Restaurant!</p>
            </Col>
            <Col className="text-center">
              <Button className="mb-5">Vote for the Cheesiest Pic Now!</Button>
              <p>How Cheesy is your Mac?<br></br><a href="#">Post a pic</a> and put it up against<br></br> the rest!</p>
            </Col>
          </Row>
        </Container>
        <Container fluid className= "py-3" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
          <Row>
            <Col>
              <p className="text-center">Copyright info</p>
            </Col>
          </Row>
        </Container>
      </main>


    </>
  )
}