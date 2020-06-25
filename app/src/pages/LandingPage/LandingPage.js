import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTop5Restaurant } from '../../store/restaurant'
import { Top5RestaurantCard } from './Top5RestaurantCard'
import { fetchTopFiveFoodpic} from '../../store/topFivePic'
import { TopFiveFoodpics} from '../PicturePage/TopFiveFoodpics'
import { Image } from 'react-bootstrap'

export const LandingPage = () => {
  const dispatch = useDispatch()

  const restaurants = useSelector(store => store.restaurants ? store.restaurants : [])
  const topFivePics = useSelector(store => store.topFivePics ? store.topFivePics : [])
  console.log(topFivePics)
  const sideEffects = () => {
    dispatch(fetchTop5Restaurant())
    dispatch(fetchTopFiveFoodpic())
  }

  React.useEffect(sideEffects, [])
  return (
    <>
      <main style={{ backgroundColor: 'black' }} className="text-white">

        {/* Page Title */}

        <Container className="text-center">
          <Row>
            <Col>
              <Image src="twcs-logo-white.png" alt="That's What Cheese Said Logo" width={550} fluid />
            </Col>
          </Row>
        </Container>

        {/* Top 5 Lists */}

        <Container className="my-3">
          <Row>
            <Col className="text-center display-4"><u>Top Restaurants</u></Col>
          </Row>
        </Container>
        <Container className="text-center" fluid>
          <Row className="justify-content-center">
            {restaurants.map((restaurant, index) => <Top5RestaurantCard restaurant={restaurant} key={restaurant.restaurantId} rank={index+1} />)}
          </Row>
          <Row>
            <Col className="text-center">
              <Button className="mb-5" href="/restaurants">Rank the Best Restaurants Now!</Button>
              <p>Did we miss the best Mac in ABQ? <br /><a href="/aboutUs"><u>Click Here</u></a> to submit a new Restaurant!</p>
            </Col>
          </Row>
        </Container>
        <Container className="my-5">
          <Row>
            <Col className="text-center display-4"><u>Cheesiest of the Cheesiest Pictures</u></Col>
          </Row>
        </Container>
        <Container className="text-center" fluid>
          <Row className="justify-content-center">
            {topFivePics.map((foodpic, index) => <TopFiveFoodpics foodpic={foodpic} key={foodpic.foodpicId} rank={index+1} />)}
          </Row>
          <Row>
            <Col className="text-center">
              <Button className="mb-5" href="/cheesey">Vote for the Cheesiest Pic Now!</Button>
              <p>How Cheesy is your Mac?<br /><a href="/profile"><u>Post a pic</u></a> and put it up against<br /> the rest!</p>
            </Col>
          </Row>
        </Container>

      </main>


    </>
  )
}