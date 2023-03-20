import React from 'react'

const Counter = () => {
	const count = 0

	const formatCount = () => {
		return count === 0 ? 'empty' : count
	}
	const imageUrl = 'https://picsum.photos/200'
	return (
		<React.Fragment>
			<img src={imageUrl} alt='home' />
			<span className='badge bg-primary m-2'>{formatCount()}</span>
			<button className='btn btn-primary btn-sm'>+</button>
		</React.Fragment>
	)
}

export default Counter
