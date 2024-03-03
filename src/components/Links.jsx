import React from 'react'
import LinkItem from './UI/link/LinkItem'
import { links } from '../data/constants'

const Links = () => {
	return (
		<div className="d-flex flex-wrap">
			{links.map((item, index) => (
				<LinkItem
					key={index}
					source={item.iconUrl}
					alt={item.alt}
					href={item.href}
					className={index === links.length - 1 ? '' : 'me-3'}
				/>
			))}
		</div>
	)
}

export default Links
