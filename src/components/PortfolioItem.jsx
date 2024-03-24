import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ status, type, name, description, className }) => {
	return (
		<div className={className}>
			<h4 className="semi-bold me-2">{name}</h4>
			<h6 className="text-shaded mb-2">{type}</h6>
			<h6
				className="mb-2 p-2 rounded-2"
				style={{
					backgroundColor: '#292929',
					color: 'rgba(255, 255, 255, 0.7)',
				}}
			>
				{status}
			</h6>
			<p className="text-paragraph">{description}</p>
		</div>
	)
}

PortfolioItem.propTypes = {
	status: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	className: PropTypes.string,
}

export default PortfolioItem
