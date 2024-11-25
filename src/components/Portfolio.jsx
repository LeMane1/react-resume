import React from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems } from '../data/constants'

const Portfolio = ({ className }) => {
	return (
		<div className={`${className}`}>
			<h2 className="bold mb-3" id="portfolio">
				Портфолио
			</h2>
			{portfolioItems.map((item, index) => (
				<PortfolioItem
					key={index}
					className="mb-4"
					image={item.image}
					type={item.type}
					name={item.name}
					description={item.description}
					links={item.links}
					extraInfo={item.extraInfo}
				/>
			))}
		</div>
	)
}

export default Portfolio
