import React from 'react'
import PropTypes from 'prop-types'

const ExperienceItem = ({ company, period, occupation, className }) => {
	return (
		<div className={`position-relative ${className}`}>
			<div className="ps-3 pt-1 pb-1 pe-3">
				<div className="d-flex flex-wrap align-items-end mb-1">
					<h4 className="semi-bold me-2">{company}</h4>
					<h5 className="text-shaded">{period}</h5>
				</div>
				<p className="text-paragraph">{occupation}</p>
			</div>
			<div
				className="position-absolute"
				style={{ width: 4, height: '100%', top: 0, backgroundColor: '#D33829' }}
			></div>
		</div>
	)
}

ExperienceItem.propTypes = {
	company: PropTypes.string,
	period: PropTypes.string,
	occupation: PropTypes.string,
	className: PropTypes.string,
}

export default ExperienceItem
