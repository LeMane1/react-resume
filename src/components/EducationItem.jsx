import React from 'react'
import PropTypes from 'prop-types'

const EducationItem = ({ university, period, speciality, className }) => {
	return (
		<div className={className}>
			<h4 className="semi-bold me-2">{university}</h4>
			<h6 className="text-shaded">{period}</h6>
			<p className="text-paragraph">{speciality}</p>
		</div>
	)
}

EducationItem.propType = {
	university: PropTypes.string,
	period: PropTypes.string,
	speciality: PropTypes.string,
}

export default EducationItem
