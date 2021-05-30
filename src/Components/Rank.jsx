import React from 'react';
import './Rank.css';

const Rank = ({name, entries}) => {

	return (
		<div>
			<div className='white f3 rank'>
				{`${name} your current rank is ....`}
			</div>
			<div className='f1 white rank '>{entries}</div>
		</div>
	);
};

export default Rank;
