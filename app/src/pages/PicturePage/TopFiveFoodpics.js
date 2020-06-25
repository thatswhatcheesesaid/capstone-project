import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


export function TopFiveFoodpics({foodpic, rank}) {
  return (
    <>
      <Col xs={6} md={2}>
        <Card className="border-0 bg-transparent">
          <Card.Img variant="top" src={foodpic.foodpicUrl} alt={foodpic.foodpicCaption} height={200} width={200} />
          <Card.Body>
            <Card.Title><p>#{rank} Picture</p></Card.Title>
            <Card.Text><p>Score: {foodpic.cheeseyScore}</p></Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}