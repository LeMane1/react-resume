import React from 'react'
import PropTypes from 'prop-types'

const ExperienceItem = ({
	company,
	period,
	occupation,
	location,
	project,
	site,
	className,
}) => {
	return (
		<div className={`${className}`}>
			<div className="overflow-hidden position-relative default-bg rounded-2 ps-4 pt-3 pb-3 pe-4">
				<h5
					style={{
						fontSize: '12px',
						opacity: '30%',
					}}
					className="mb-1"
				>
					{location}
				</h5>
				<div className="d-flex flex-wrap align-items-center justify-content-between mb-1">
					<h4 className="semi-bold">{company}</h4>
					<h5 style={{ fontSize: '16px', opacity: '30%' }}>{period}</h5>
				</div>

				<h5
					className="pb-2 mb-3"
					style={{
						borderBottom: '1px solid #353535',
						fontSize: '14px',
						opacity: '50%',
					}}
				>
					{project}
				</h5>

				{occupation &&
					occupation.map((item) => (
						<div className="mb-3">
							<h5
								className="semi-bold mb-3"
								style={{ fontSize: '14px', opacity: '80%' }}
							>
								{item.name}
							</h5>

							{item &&
								item.tasks &&
								item.tasks.map((task) => (
									<>
										<p
											className="text-paragraph mb-1"
											style={{ fontSize: '14px' }}
										>
											{task}
										</p>
									</>
								))}
						</div>
					))}

				{site?.length > 0 &&
					<a href={site} target='_blanc' className='link'>
						Посмотреть
					</a>
				}

				<div
					className="position-absolute"
					style={{
						width: 4,
						height: '100%',
						top: 0,
						left: 0,
						backgroundColor: '#D33829',
					}}
				></div>
			</div>
			{/* <div className="overflow-hidden position-relative default-bg rounded-2 ps-4 pt-3 pb-3 pe-4">
				<div className="d-flex flex-wrap align-items-end mb-1">
					<h4 className="semi-bold me-2">{company}</h4>
					<h5 className="text-shaded">{period}</h5>
				</div>
				<p className="text-paragraph">{occupation}</p>
				<div
					className="position-absolute"
					style={{
						width: 4,
						height: '100%',
						top: 0,
						left: 0,
						backgroundColor: '#D33829',
					}}
				></div>
			</div> */}
		</div>
	)
}

ExperienceItem.propTypes = {
	company: PropTypes.string,
	period: PropTypes.string,
	occupation: PropTypes.string,
	location: PropTypes.string,
	project: PropTypes.string,
	className: PropTypes.string,
}

export default ExperienceItem
