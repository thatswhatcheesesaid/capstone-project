import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRestaurants } from '../../store/restaurant'
import { RestaurantCard } from './RestaurantCard'

export const RestaurantPage = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector(store => store.restaurants ? store.restaurants : [])

  const sideEffects = () => {
    dispatch(fetchAllRestaurants())
  }

  React.useEffect(sideEffects, [])
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
          {restaurants.map((restaurant, index) => <RestaurantCard restaurant={restaurant} key={restaurant.restaurantId} rank={index+1} />)}
        </Container>

        {/* Submit Button routes to About Me Page */}

        <Container className="py-3 text-white">
          <Row>
            <Col className="text-center">
              <p>Did we miss your favorite? Send us a line and we'll put it on the list!</p>
              <Button className="mx-3" href="aboutUs">Submit Restaurant</Button>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}