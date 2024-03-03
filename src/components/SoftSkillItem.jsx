import React from 'react'
import PropTypes from 'prop-types'

const SoftSkillItem = ({ iconUrl, alt, size = 28, title, className }) => {
	return (
		<div className={`d-flex ${className}`}>
			<img
				src={iconUrl}
				alt={alt}
				style={{ width: size, height: size }}
				className="me-2"
			/>
			<h6 className="text-paragraph" style={{ marginTop: 4 }}>
				{title}
			</h6>
		</div>
	)
}

SoftSkillItem.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
}

export default SoftSkillItem
