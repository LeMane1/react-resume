import React from 'react'
import classes from './Button.module.css'

const Button = ({ href, type, className, ...props }) => {
	const types = {
		primary: classes.myPrimaryButton,
		secondary: classes.mySecondaryButton,
	}

	return (
		<a
			className={`btn semi-bold pt-2 pb-2 ps-5 pe-5 ${className} ${types[type]}`}
			href={href}
			{...props}
		>
			{props.children}
		</a>
	)
}

export default Button
