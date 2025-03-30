import React from "react";
import PropTypes from "prop-types";
import PortfolioLinkItem from "./UI/link/PortfolioLinkItem";

const PortfolioItem = ({ name, id, description, images, className, links, extraInfo }) => {
	return (
		<div className={className}>
			<div className="row gx-3 gy-3">
				<div className="col col-12 col-md-6">

					<div id={`carousel${id}`} className="carousel slide">
						<div className="carousel-inner">
							{
								images && images.map((image, index) => (
									<div
										key={image.id}
										className={`carousel-item ${index === 0 ? 'active' : ''}`}
									>
										<img
											src={image.image}
											className="d-block w-100 portfolio-image"
											alt={image.alt}
											loading="lazy"
										/>
									</div>
								))
							}
						</div>
						{
							images && images.length > 1 &&
							<>
								<button
									className="carousel-control-prev"
									type="button"
									data-bs-target={`#carousel${id}`}
									data-bs-slide="prev"
								>
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</button>

								<button
									className="carousel-control-next"
									type="button"
									data-bs-target={`#carousel${id}`}
									data-bs-slide="next"
								>
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</button>
							</>
						}
					</div>
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
	images: PropTypes.array,
	type: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.number,
	description: PropTypes.string,
	className: PropTypes.string,
};

export default PortfolioItem;
