import React from 'react'
import SkillBlock from './SkillBlock'
import { devSkills, designSkills } from '../data/constants'

const Skills = ({ className }) => {
	return (
		<div className={className}>
			<h2 className="bold mb-3" id="skills">
				Навыки
			</h2>
			<div className="mb-3">
				<h4 className="bold mb-2">Разработка</h4>
				<div className="row gy-2">
					{devSkills.map((item, index) => (
						<SkillBlock
							key={index}
							skillBlockTitle={item.skillBlockTitle}
							skills={item.skills}
							className="col-12 col-md-6"
						/>
					))}
				</div>
			</div>
			<div>
				<h4 className="bold mb-2">Дизайн</h4>
				<div className="row">
					{designSkills.map((item, index) => (
						<SkillBlock
							key={index}
							skillBlockTitle={item.skillBlockTitle}
							skills={item.skills}
							className="col-md-6 col-12"
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills
