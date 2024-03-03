import React from 'react'
import ExperienceItem from './ExperienceItem'
import { experienceCompanies } from '../data/constants'

const Experience = ({ className }) => {
	return (
		<div className={className}>
			<h2 className="bold mb-3" id="experience">
				Опыт работы
			</h2>
			{experienceCompanies.map((item, index) => (
				<ExperienceItem
					key={index}
					company={item.company}
					period={item.period}
					occupation={item.occupation}
					className={index === experienceCompanies.length - 1 ? 'mb-0' : 'mb-3'}
				/>
			))}
		</div>
	)
}

export default Experience
