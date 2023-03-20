import React from 'react'

const Counter = () => {
	const count = 0

	const formatCount = () => {
		return count === 0 ? 'empty' : count
	}

	const classes = count === 0 ? 'bg-warning' : 'bg-primary'
	const imageUrl = 'https://picsum.photos/200'

	const getBageClasses = () => {
		let classes1 = 'badge m-2 '
		classes1 += count === 0 ? 'bg-warning' : 'bg-primary'
		// classes1 = classes1 + (count === 0 ? 'bg-warning' : 'bg-primary')
		return classes1
	}

	return (
		<React.Fragment>
			<img src={imageUrl} alt='home' />
			<span className={`badge ${classes} m-2`}>{formatCount()}</span>
			<span className={getBageClasses()}>{formatCount()}</span>
			<button className='btn btn-primary btn-sm'>+</button>
		</React.Fragment>
	)
}

export default Counter
