import React from 'react'
import Links from './Links'
import Button from './UI/button/Button'
import { useWindowWidth } from '../hooks/useWindowWidth'

const Footer = ({ className }) => {
	const windowWidth = useWindowWidth()
	return (
		<div
			className={` ${
				windowWidth < 450 ? 'ps-3 pe-3 pt-4 pb-4' : 'pt-5 pb-5 ps-5 pe-5'
			}
			${className}`}
			style={{ backgroundColor: '#2A2A2A' }}
		>
			<div className="row">
				<div className="col-12 col-md-6 mb-3">
					<h6 className="semi-bold text-shaded mb-2">Александр Зеленин</h6>
					<Links />
				</div>
				<div className="col-12 col-md-6">
					<h6 className="semi-bold text-shaded mb-2">Свяжитесь со мной</h6>
					<Button
						href="mailto:alexandrzelenin2013@yandex.ru"
						type="primary"
						className={`mb-2 align-self-start`}
						style={{ width: windowWidth < 400 ? '100%' : '' }}
					>
						Написать мне
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Footer
