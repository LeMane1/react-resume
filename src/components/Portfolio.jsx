import React from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems } from '../data/constants'

const Portfolio = ({ className }) => {
	return (
		<div className={`${className}`}>
			<h2 className="bold mb-3" id="portfolio">
				Портфолио
			</h2>
			{portfolioItems.map(portfolioItem => (
				<PortfolioItem
					key={portfolioItem.id}
					id={portfolioItem.id}
					className="mb-4"
					images={portfolioItem.images}
					type={portfolioItem.type}
					name={portfolioItem.name}
					description={portfolioItem.description}
					links={portfolioItem.links}
					extraInfo={portfolioItem.extraInfo}
				/>
			))}
		</div>
	)
}

export default Portfolio
