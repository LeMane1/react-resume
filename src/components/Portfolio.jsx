import React from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems } from '../data/constants'

const Portfolio = ({ className }) => {
	return (
		<div className={`${className}`}>
			<h2 className="bold mb-3" id="portfolio">
				Портфолио
			</h2>
			<div className="row gy-2">
				{portfolioItems.map((item, index) => (
					<PortfolioItem
						key={index}
						className="col-12 col-md-6 mb-2"
						status={item.status}
						type={item.type}
						name={item.name}
						description={item.description}
					/>
				))}
			</div>
		</div>
	)
}

export default Portfolio
