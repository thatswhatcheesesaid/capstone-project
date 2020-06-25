import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFoodpic } from "../../store/foodpic";
import { TopFiveFoodpics } from "./TopFiveFoodpics";
import { RandomFoodpic } from "./RandomFoodpic";
import { fetchTopFiveFoodpic } from "../../store/topFivePic";
// import Style from 'react-bootstrap/Style'

//**Here is the inline styling for text and background
//style={{ backgroundColor: 'rgb(255, 137, 6)' }} This is the navbar and footer
//style={{ backgroundColor: 'rgb(15, 14, 23)' }} This is for the body
//style={{ color: 'rgb(167, 169, 190)'}} This is for the text

export function PicturePage() {
	const dispatch = useDispatch()
	const foodpics = useSelector(store => store.foodpics ? store.foodpics : [])
	const topFivePics = useSelector(store => store.topFivePics ? store.topFivePics : [])
	const sideEffects = () => {
		dispatch(fetchAllFoodpic())
		dispatch(fetchTopFiveFoodpic())
	}
	React.useEffect(sideEffects, [])
	return(
	<>

{/*here are the button colors*/}
{/*<style type ='text/css'>*/}
{/*	{`*/}
{/*		.btn-flat {*/}
{/*		background-color: rgb(255, 137, 6);*/}
{/*		color: black;*/}
{/*		}*/}
{/*	*/}
{/*	.btn-rigid {*/}
{/*	background-color: rgb(15, 14, 23);*/}
{/*	color: white;*/}
{/*	}*/}
{/*	*/}
{/*	`}*/}
{/*</style>*/}



{/*This is the body of the page*/}
		<main style={{ backgroundColor: 'rgb(15, 14, 23)' }} className="text-white">

{/*This is the title*/}
		<Container fluid className="text-center py-5">
			<h1 className="display-1"><u>Mac and Cheese</u></h1>
			<h1 className="text-center">Vote on the cheesiest pictures. Each click will shuffle new pictures for more votes.</h1>
		</Container>


			{/*This is the voting*/}
			<Container fluid>
				<h1 className="display-3 text-center py-3">Vote Here</h1>
				<Row className="justify-content-center">
					{foodpics.length > 2 && (
						<>
							<RandomFoodpic foodpic={foodpics[0]} key={foodpics[0].foodpicId}/>
							<RandomFoodpic foodpic={foodpics[1]} key={foodpics[1].foodpicId}/>
						</>)}
				</Row>
			</Container>

{/*This is the top 5 pics*/}
			<Container fluid className="text-center">
				<h1 className="display-3 text-center py-4">Top 5</h1>
				<Row className="justify-content-center">
					{topFivePics.map((foodpic, index) => <TopFiveFoodpics foodpic={foodpic} key={foodpic.foodpicid} rank={index+1} />)}
				</Row>
			</Container>


{/*This is the bottom message*/}
	<Container fluid className="py-5 text-light">
		<Row>
			<Col>
				<h1 className="text-center display-4">Vote on the cheesiest pictures. Each click will shuffle new pictures for more votes.</h1>
			</Col>
		</Row>
	</Container>


{/*This is the upload button*/}
	<Container fluid className="pb-5 text-light">
		<Row>
			<Col className="text-center">
				<Button href="/profile"><strong>Upload your picture</strong></Button>
			</Col>
		</Row>
	</Container>

</main>


		</>
	)}

