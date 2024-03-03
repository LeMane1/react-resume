import React from 'react'
import SoftSkillItem from './SoftSkillItem'
import { softSkills } from '../data/constants'

const SoftSkills = ({ className }) => {
	return (
		<div className={className}>
			<h2 className="bold mb-3" id="soft_skills">
				Личностные качества
			</h2>
			<div className="row gy-3">
				{softSkills.map((item, index) => (
					<SoftSkillItem
						key={index}
						title={item.title}
						iconUrl={item.iconUrl}
						alt={item.alt}
						className={`col-12 col-md-6`}
					/>
				))}
			</div>
		</div>
	)
}

export default SoftSkills
