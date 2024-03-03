import React from 'react'
import PropTypes from 'prop-types'
import { useWindowWidth } from '../hooks/useWindowWidth'

const HeaderItem = ({ text, href, className }) => {
	const windowWidth = useWindowWidth()
	return (
		<a
			className={`nav-link ${
				windowWidth > 500 ? 'fs-6' : 'fs-3'
			} mb-0 ${className}`}
			href={href}
		>
			<button className="header-link-button" data-bs-dismiss="offcanvas">
				{text}
			</button>
		</a>
	)
}

HeaderItem.propTypes = {
	text: PropTypes.string,
	href: PropTypes.string,
	className: PropTypes.string,
}

export default HeaderItem
