import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import React from 'react'

export function ProfilePics (props) {
  const {foodpic} = props
  return (
    <>
      <Col xs={6} md={4} lg={2}>
        <Image fluid src={foodpic.foodpicUrl} alt={foodpic.foodpicCaption} width={200}/>
      </Col>
    </>
  )
}
