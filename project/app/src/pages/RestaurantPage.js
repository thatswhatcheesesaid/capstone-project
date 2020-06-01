import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const RestaurantPage = () => {
  return(
    <>
      <main style={{ backgroundColor: 'black' }} className="text-white">

        {/* Page Title */}

        <Container className="text-center py-5">
          <Row>
            <Col>
              <h1 className="display-1">Restaurants</h1>
              <p className="display-4 pt-5">The Best Mac you can buy in ABQ, ranked by <u>YOU!</u></p>
            </Col>
          </Row>
        </Container>

        {/* Restaurant Ranking List */}

        <Container className="py-3 text-white">
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">1</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50} />
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50} className="pl-1 pt-2" />
                <label for="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">2</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">3</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">4</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">5</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">6</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">7</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">8</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">9</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
          <Card className="my-3 border-0 bg-transparent">
            <Row fluid>
              <Col md></Col>
              <Col md={2} className="display-1 pt-3 text-center">10</Col>
              <Col md={1} className="pt-4 text-center">
                <label htmlFor="upfork">Upfork</label>
                <input type="image" id="upfork" src="upfork.png" alt="Submit Upfork" width={50}/>
                <input type="image" id="downfork" src="downfork.png" alt="Submit Downfork" width={50}
                       className="pl-1 pt-2"/>
                <label htmlFor="downfork">Downfork</label>
              </Col>
              <Col md={1} className="text-center">
                <p className="pt-5">Upfork Score +/-</p>
              </Col>
              <Col md={2} className="text-center pt-2">
                <Image src="blue-box.jpg" alt="Blue Box Mac" width={200} fluid />
              </Col>
              <Col md={4}>
                <Card.Body>
                  <Card.Title><h3>Restaurant Name</h3></Card.Title>
                  <Card.Text>Info for restaurant(phone number, hyperlink to directions, etc.)</Card.Text>
                </Card.Body>
              </Col>
              <Col md></Col>
            </Row>
          </Card>
        </Container>

        {/* Submit Button routes to About Me Page */}

        <Container className="py-3 text-white">
          <Row>
            <Col className="text-center">
              <p>Did we miss your favorite? Send us a line and we'll put it on the list!</p>
              <Button className="mx-3">Submit Restaurant</Button>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}