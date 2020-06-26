import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export function Top5RestaurantCard ({restaurant, rank}) {
  return (
    <>
      <Col xs={6} md={2}>
        <Card className="border-0 bg-transparent">
          <Card.Img variant="top" height={200} width={200} src={restaurant.restaurantFeaturedPic} alt={restaurant.restaurantFeaturedPicCaption} />
          <Card.Body>
            <Card.Title><h3>#{rank} Restaurant</h3></Card.Title>
            <Card.Text>
              <p>{restaurant.restaurantName}</p>
              <p>{restaurant.forkScore}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}