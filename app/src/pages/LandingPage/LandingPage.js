import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTop5Restaurant } from '../../store/restaurant'
import { Top5RestaurantCard } from './Top5RestaurantCard'
import { fetchTopFiveFoodpic} from '../../store/foodpic'
import { TopFiveFoodpics} from '../PicturePage/TopFiveFoodpics'

export const LandingPage = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector(store => store.restaurants ? store.restaurants : [])
  const foodpics = useSelector(store => store.foodpics ? store.foodpics : [])
  console.log(foodpics)
  const sideEffects = () => {
    dispatch(fetchTop5Restaurant())
    dispatch(fetchTopFiveFoodpic())
  }

  React.useEffect(sideEffects, [])
  return (
    <>
      <main style={{ backgroundColor: 'black' }} className="text-white">

        {/* Page Title */}

        <Container className="text-center py-5">
          <Row>
            <Col className="display-1">That's What Cheese Said</Col>
          </Row>
        </Container>

        {/* Top 5 Lists */}

        <Container className="my-5">
          <Row>
            <Col className="text-center display-4"><u>Top Restaurants</u></Col>
          </Row>
        </Container>
        <Container className="text-center" fluid>
          <Row>
            <Col></Col>
            {restaurants.map((restaurant, index) => <Top5RestaurantCard restaurant={restaurant} key={restaurant.restaurantId} rank={index+1} />)}
            <Col></Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button className="mb-5">Rank the Best Restaurants Now!</Button>
              <p>Did we miss the best Mac in ABQ? <br /><a href="#"><u>Click Here</u></a> to submit a new Restaurant!</p>
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col className="text-center display-4"><u>Cheesiest Pictures of your Life</u></Col>
          </Row>
        </Container>
        <Container className="text-center" fluid>
          <Row>
            <Col></Col>
            {foodpics.map((foodpic, index) => <TopFiveFoodpics foodpic={foodpic} key={foodpic.foodpicId} rank={index+1} />)}
            <Col></Col>
          </Row>
          <Row>
            <Col className="text-center">
              <Button className="mb-5">Vote for the Cheesiest Pic Now!</Button>
              <p>How Cheesy is your Mac?<br /><a href="#"><u>Post a pic</u></a> and put it up against<br /> the rest!</p>
            </Col>
          </Row>
        </Container>

      </main>


    </>
  )
}