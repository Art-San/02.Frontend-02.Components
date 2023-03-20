import React from 'react'

const Counter = () => {
	let count = 0

	const formatCount = () => {
		return count === 0 ? 'empty' : count
	}

	const getBageClasses = () => {
		let classes = 'badge m-2 '
		classes += count === 0 ? 'bg-warning' : 'bg-primary'
		return classes
	}

	const handleIncrement = () => {
		count = count + 1
		console.log('count', count)
	}

	return (
		<>
			<span className={getBageClasses()}>{formatCount()}</span>
			<button
				className='btn btn-primary btn-sm'
				onClick={handleIncrement}
			>
				+
			</button>
		</>
	)
}

export default Counter
