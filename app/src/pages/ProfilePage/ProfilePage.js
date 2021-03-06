import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EditProfileForm } from './pictureUploadForm'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFoodpic } from '../../store/foodpic'
import { ProfilePics } from './ProfilePics'

//**Here is the inline styling for text and background
//style={{ backgroundColor: 'rgb(255, 137, 6)' }} This is the navbar and footer
//style={{ backgroundColor: 'rgb(15, 14, 23)' }} This is for the body
//style={{ color: 'rgb(167, 169, 190)'}} This is for the text

export function ProfilePage (props) {
	const dispatch = useDispatch()

	const foodpics = useSelector(store => store.foodpics ? store.foodpics : [])

	const sideEffects = () => {
		dispatch(fetchAllFoodpic())
	}

	React.useEffect(sideEffects, [])

	return (

	<>

{/*here are the button colors*/}
		<style type ='text/css'>
			{`
			.btn-flat {
			background-color: rgb(255, 137, 6);
			color: black;
			}
		
			.btn-rigid {
			background-color: rgb(15, 14, 23);
			color: white;
			}
		
			`}
		</style>

{/*This is the Body*/}
<main className="text-white" style={{ backgroundColor: 'rgb(15, 14, 23)' }}>

{/*This is the jumbotron*/}
	<Container fluid>
		<h1 className="py-3 display-1"><u>Profile</u></h1>
	</Container>


{/*This is the title*/}
	<Container fluid>
		<h1 className="display-3 pt-5"><u>Your Mac and Cheese Pictures</u></h1>
	</Container>
{/*This is where the pictures live*/}
	<Container fluid className="py-5">

		<Row className="d-flex justify-content-around">
			{foodpics.map((foodpic) => <ProfilePics foodpic={foodpic} key={foodpic.foodpicId} />)}
		</Row>
		<Row>
			<Col className="py-5">
				<h1 className="display-4 pb-3"><u>Upload Your Photo</u></h1>
				<EditProfileForm/>

			</Col>
			<Col></Col>
		</Row>

	</Container>

</main>


	</>
)}