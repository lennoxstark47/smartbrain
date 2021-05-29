import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import Rank from './Components/Rank';
import FaceRecognition from './Components/FaceRecognition';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const particlesConfig = {
	particles: {
		number: {
			value: 40,
			density: {
				enable: true,
				value_area: 500,
			},
		},
	},
};

const app = new Clarifai.App({
	apiKey: 'c14191b446b14919afd059c9a0666edf',
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',
			box: {},
			route: 'signin',
			isSignedIn: false,
			user: {
				id: '',
				name: '',
				email: '',

				entries: 0,
				joined: '',
			},
		};
	}

	// componentDidMount() {
	// 	fetch('http://localhost:3001/')
	// 		.then((response) => response.json())
	// 		.then((data) => console.log(data));
	// }
	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.entries,
			},
		});
	};

	calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info
				.bounding_box;
		const image =
			document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		// console.log(width, height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol:
				width - clarifaiFace.right_col * width,
			bottomRow:
				height - clarifaiFace.bottom_row * height,
		};
	};

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({
			box: box,
		});
	};

	handleInput = (event) => {
		this.setState({
			input: event.target.value,
		});
	};
	handleDetect = () => {
		this.setState({
			imageURL: this.state.input,
		});
		app.models
			.predict(
				Clarifai.FACE_DETECT_MODEL,
				this.state.input
			)
			.then((response) =>
				this.displayFaceBox(
					this.calculateFaceLocation(response)
				)
			)
			.catch((err) => console.log(err));
	};

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState({ isSignedIn: false });
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};

	render() {
		return (
			<div className='App'>
				<Particles
					params={particlesConfig}
					className='particles'
				/>

				<Navigation
					onRouteChange={this.onRouteChange}
					isSignedIn={this.state.isSignedIn}
				/>
				{this.state.route === 'home' ? (
					<div>
						<Logo />

						<div style={{ marginTop: '-90px' }}>
							<Rank />
							<ImageLinkForm
								handleInput={this.handleInput}
								handleDetect={this.handleDetect}
							/>

							<FaceRecognition
								imageURL={this.state.imageURL}
								box={this.state.box}
							/>
						</div>
					</div>
				) : this.state.route === 'signin' ? (
					<Signin onRouteChange={this.onRouteChange} />
				) : (
					<Register
						loadUser={this.loadUser}
						onRouteChange={this.onRouteChange}
					/>
				)}
			</div>
		);
	}
}

export default App;
