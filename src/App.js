import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';
import ImageLinkForm from './Components/ImageLinkForm';
import Rank from './Components/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesConfig = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 500,
			},
		},
	},
};

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Particles
					params={particlesConfig}
					className='particles'
				/>
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm />
				{/* <FaceRecognition /> */}
			</div>
		);
	}
}

export default App;
