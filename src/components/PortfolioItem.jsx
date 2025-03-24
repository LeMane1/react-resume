import React from "react";
import PropTypes from "prop-types";
import PortfolioLinkItem from "./UI/link/PortfolioLinkItem";

const PortfolioItem = ({ type, name, description, image, className, links, extraInfo }) => {
	return (
		<div className={className}>
			<div className="row gx-3 gy-3">
				<div className="col col-12 col-md-6">
					<img src={image} className="portfolio-image" />
				</div>
				<div className="col col-12 col-md-6">
					<h4 className="semi-bold">{name}</h4>
					<p className="text-paragraph mb-1">{description}</p>
					<div>
						{links && links.map((link, index) => (
							<PortfolioLinkItem
								text={link.name}
								href={link.linkSource}
								className={index === links.length - 1 ? '' : 'me-2'}
							/>
						))}
					</div>
					{extraInfo && <p className="extra-info">{extraInfo}</p>}
				</div>
			</div>
		</div>
	);
};

PortfolioItem.propTypes = {
	image: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	className: PropTypes.string,
};

export default PortfolioItem;
