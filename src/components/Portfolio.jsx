import React from 'react'
import PortfolioItem from './PortfolioItem'
import { portfolioItems } from '../data/constants'

const Portfolio = ({ className }) => {
	return (
		<div className={`${className}`}>
			<h2 className="bold mb-3" id="portfolio">
				Портфолио
			</h2>
			{portfolioItems.map(({id, images, type, name, description, links, extraInfo, needVpn}) => (
				<PortfolioItem
					key={id}
					id={id}
					className="mb-4"
					images={images}
					type={type}
					name={name}
					description={description}
					links={links}
					extraInfo={extraInfo}
					needVpn={needVpn}
				/>
			))}
		</div>
	)
}

export default Portfolio
