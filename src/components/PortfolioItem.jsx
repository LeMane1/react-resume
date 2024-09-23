import React from 'react'
import PropTypes from 'prop-types'

const PortfolioItem = ({ status, type, name, description, className }) => {
	return (
		<div className={className}>
			<h4 className="semi-bold me-2">{name}</h4>
			<h6 className="text-shaded mb-2">{type}</h6>
			<h6
				className="mb-2 p-2 rounded-2"
				style={{
					backgroundColor: '#292929',
					color: 'rgba(255, 255, 255, 0.7)',
				}}
			>
				{status}
			</h6>
			<p className="text-paragraph">{description}</p>

			{/* <a>Посмотреть проект</a>
			<div id="carouselExample" class="carousel slide">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="..." class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="..." class="d-block w-100" alt="..." />
					</div>
					<div class="carousel-item">
						<img src="..." class="d-block w-100" alt="..." />
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExample"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div> */}
		</div>
	)
}

PortfolioItem.propTypes = {
	status: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	className: PropTypes.string,
}

export default PortfolioItem
