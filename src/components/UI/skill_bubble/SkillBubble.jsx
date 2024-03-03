import React from 'react'
import classes from './SkillBubble.module.css'
import PropTypes from 'prop-types'

const SkillBubble = ({ title, className }) => {
	return (
		<h6
			className={`ps-4 pe-4 pt-2 pb-2 rounded-2 ${classes.mySkillBubble} ${className}`}
		>
			{title ?? 'Default'}
		</h6>
	)
}

SkillBubble.propTypes = {
	title: PropTypes.string,
}

export default SkillBubble
