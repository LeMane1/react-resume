import React from 'react'
import SkillBubble from './UI/skill_bubble/SkillBubble'
import PropTypes from 'prop-types'

const SkillBlock = ({ skillBlockTitle, skills, className }) => {
	return (
		<div className={`${className}`}>
			<h5 className="text-shaded mb-2">{skillBlockTitle}</h5>
			<div className="d-flex flex-wrap">
				{skills.map((item, index) => (
					<SkillBubble
						key={index}
						title={item}
						className={`mb-2 ${index + 1 === skills.length ? 'me-0' : 'me-2'}`}
					/>
				))}
			</div>
		</div>
	)
}

SkillBlock.propTypes = {
	skillBlockTitle: PropTypes.string,
	skills: PropTypes.array,
}

export default SkillBlock
