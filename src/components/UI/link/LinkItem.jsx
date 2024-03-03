import React from 'react'
import classes from './LinkItem.module.css'

const LinkItem = ({
	source,
	altText,
	size = 26,
	className,
	href,
	...props
}) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<img
				src={source}
				alt={altText}
				style={{ width: size, height: size }}
				{...props}
				className={`${className} ${classes.myLink}`}
			/>
		</a>
	)
}

export default LinkItem
