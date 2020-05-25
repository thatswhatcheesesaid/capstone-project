import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

export const RestaurantPage = () => {
  return(
    <>
      <main style={{ backgroundColor: 'black' }} className="text-white">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center py-3">Restaurants</h1>
              <h3 className="text-center py-3">The Cheesiest of the Cheesiest in ABQ</h3>
            </Col>
          </Row>
        </Container>
        <Container className="py-5">
          <Card className="my-3 border-0 bg-warning">
            <Row>
              <Col></Col>
              <Col md={3}>
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
              </Col>
              <Col></Col>
            </Row>
          </Card>
          <Card className="mb-3 border-0 bg-warning">
            <Row>
              <Col></Col>
              <Col md={3}>
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
              </Col>
              <Col></Col>
            </Row>
          </Card>
          <Card className="mb-3 border-0 bg-warning">
            <Row>
              <Col></Col>
              <Col md={3}>
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
              </Col>
              <Col></Col>
            </Row>
          </Card>
          <Card className="mb-3 border-0 bg-warning">
            <Row>
              <Col></Col>
              <Col md={3}>
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</Card.Text>
                </Card.Body>
              </Col>
              <Col></Col>
            </Row>
          </Card>
        </Container>
      </main>
    </>
  )
}