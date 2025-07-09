import React from 'react'
import ExperienceItem from './ExperienceItem'
import { experienceCompanies } from '../data/constants'

const Experience = ({ className }) => {
	return (
		<div className={className}>
			<h2 className="bold mb-3" id="experience">
				Опыт работы
			</h2>

			<div className="row gx-5 gy-3">
				{experienceCompanies.map((item, index) => (
					<ExperienceItem
						key={index}
						company={item.company}
						period={item.period}
						occupation={item.occupation}
						location={item.location}
						project={item.project}
						site={item.site}
						className="col col-12 col-md-6"
					/>
				))}
			</div>
		</div>
	)
}

export default Experience
