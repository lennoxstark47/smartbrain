import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='mt0 ma4'>
			<Tilt
				className='Tilt br2 shadow-2'
				options={{ max: 55 }}
				style={{
					display: 'flex',
					justifyContent: 'center',
					height: 150,
					width: 150,
				}}>
				<div className='Tilt-inner pa3'>
					<img src={brain} alt='brain' />
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
