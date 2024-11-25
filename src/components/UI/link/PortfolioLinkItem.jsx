import React from 'react'
import classes from './PortfolioLinkItem.module.css'

const PortfolioLinkItem = ({
  text,
  altText,
  className,
  href,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      alt={altText}
      className={`${className} ${classes.portfolioLinkItem}`}
      {...props}
    >
      {text}
    </a>
  )
}

export default PortfolioLinkItem