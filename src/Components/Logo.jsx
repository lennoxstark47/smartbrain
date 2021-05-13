import React from 'react';
import Tilt from 'react-tilt';

const Logo = () => {
	return (
		<div className='mt0 ma4'>
			<Tilt
				className='Tilt br2 shadow-2'
				options={{ max: 25 }}
				style={{ height: 150, width: 150 }}>
				<div className='Tilt-inner'> </div>
			</Tilt>
		</div>
	);
};

export default Logo;
