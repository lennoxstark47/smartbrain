import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Logo from './Components/Logo';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navigation />
				<Logo />
				{/* <ImageLinkForm />
        <FaceRecognition /> */}
			</div>
		);
	}
}

export default App;
