import React from 'react'

const Counter = () => {
	const count = 2
	const x = <h1>empty</h1>
	const formatCount = () => {
		return count === 0 ? x : count
	}
	return (
		<React.Fragment>
			<h1>{formatCount()}</h1>
			<button>+</button>
		</React.Fragment>
	)
}

export default Counter
