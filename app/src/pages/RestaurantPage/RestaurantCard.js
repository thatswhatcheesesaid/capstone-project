import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../../utils/http-config'

export function RestaurantCard (props) {
  const {restaurant, rank} = props

  const dispatch = useDispatch()
  const upFork = {
    forkProfileId: null,
    forkRestaurantId: restaurant.restaurantId,
    forkScore: 1,
  }

  const downFork = {
    forkProfileId: null,
    forkRestaurantId: restaurant.restaurantId,
    forkScore: -1,
  }

  const submitUpFork = () => {
    dispatch()
    httpConfig.post("/apis/fork", upFork).then(reply => {
      let {message, type} = reply
    })
  }

  const submitDownFork = () => {
    dispatch()
    httpConfig.post("/apis/fork", downFork).then(reply => {
      let {message, type} = reply
    })
  }

  return(
    <>
      <Card className="my-3 border-0 bg-transparent">
        <Row fluid>
          <Col md></Col>
          <Col md={2} className="display-1 pt-3 text-center">{rank}</Col>
          <Col md={1} className="pt-4 text-center">
            <label htmlFor="upfork">Upfork</label>
            <input type="image" onClick={submitUpFork} id="upfork" src="upfork.png" alt="Submit Upfork" width={50} />
            <input type="image" onClick={submitDownFork} id="downfork" src="downfork.png" alt="Submit Downfork" width={50} className="pl-1 pt-2" />
            <label for="downfork">Downfork</label>
          </Col>
          <Col md={1} className="text-center">
            <p className="pt-4">Score:</p>
            <p className="display-4 pt-2">{restaurant.forkScore}</p>
          </Col>
          <Col md={2} className="text-center pt-2">
            <Image src={restaurant.restaurantFeaturedPic} alt={restaurant.restaurantFeaturedPicCaption} width={200} fluid />
          </Col>
          <Col md={4}>
            <Card.Body className="text-center">
              <Card.Title><h3>{restaurant.restaurantName}</h3></Card.Title>
              <Card.Text>
                <p><a href={restaurant.restaurantGoogleLink}>Click here for more info</a></p>
                <p><a href={restaurant.restaurantSocialMediaUrl}>@social_media_link</a></p>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col md></Col>
        </Row>
      </Card>
    </>
  )
}