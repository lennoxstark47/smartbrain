import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
	return (
		<div
			className='pa3 ma'
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<div className='absolute '>
				<img
					id='inputimage'
					src={imageURL}
					alt=''
					width='500px'
					height='auto'
					className='shadow-5-l'
				/>
				<div
					className='bounding-box'
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol,
					}}></div>
			</div>
		</div>
	);
};

export default FaceRecognition;
