import React from 'react'
import EducationItem from './EducationItem'
import { educationItems } from '../data/constants'

const Education = ({ ...props }) => {
	return (
		<div {...props}>
			<h2 className="bold mb-3" id="education">
				Образование
			</h2>
			<div className="row">
				{educationItems.map((item, index) => (
					<EducationItem
						key={index}
						className="col-12 col-md-6 mb-2"
						university={item.university}
						period={item.period}
						speciality={item.speciality}
					/>
				))}
			</div>
		</div>
	)
}

export default Education
