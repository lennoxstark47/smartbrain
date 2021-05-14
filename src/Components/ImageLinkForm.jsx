import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({
	handleInput,
	handleDetect,
}) => {
	return (
		<div>
			<div className='p-wrap'>
				<p className='f3'>
					{
						'This Magic Brain will detect your Face !!!'
					}
				</p>
			</div>

			<div className='inputAndbutton-wrap'>
				<div className='form pa4 br3 shadow-5 '>
					<input
						className='f4 pa2 w-70 center'
						type='text'
						onChange={handleInput}
					/>
					<button
						className='w-30 grow link f4 ph3 pv2 dib white bg-light-purple pointer br2'
						onClick={handleDetect}>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};
export default ImageLinkForm;
