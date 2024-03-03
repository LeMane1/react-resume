import React from 'react'
import HeaderItem from './HeaderItem'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { useWindowScroll } from '../hooks/useWindowScroll'
import { MAX_CONTAINER_WIDTH } from '../data/constants'

const Header = () => {
	const windowWidth = useWindowWidth()
	const windowScrollY = useWindowScroll()

	return (
		<div
			className={`width-fullsize
									sticky-top
									d-flex
									flex-wrap
									justify-content-center
									header
									${windowScrollY > 30 ? 'border-bottom border-white' : ''}`}
			style={{
				zIndex: 1000,
			}}
		>
			{/* Background blur */}
			<div
				className={`position-absolute width-fullsize ${
					windowScrollY > 30 ? 'blur-bg' : ''
				}`}
				style={{ height: '100%' }}
			></div>
			<header
				className={`p-2
									${windowWidth < 450 ? 'ps-3 pe-3' : 'ps-5 pe-5'}`}
				style={{ maxWidth: MAX_CONTAINER_WIDTH, width: MAX_CONTAINER_WIDTH }}
			>
				<nav className="width-fullsize navbar navbar-expand-lg navbar-dark">
					<div className="width-fullsize d-flex flex-wrap justify-content-between align-items-center">
						<h6 className="bold ">Александр Зеленин</h6>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbarDark"
							aria-controls="offcanvasNavbarDark"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="offcanvas offcanvas-end text-bg-dark"
							tabIndex="-1"
							id="offcanvasNavbarDark"
							aria-labelledby="offcanvasNavbarDarkLabel"
						>
							<div className="offcanvas-header">
								<button
									type="button"
									className="btn-close btn-close-white"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div className="offcanvas-body justify-content-end">
								<ul className="navbar-nav justify-content-end">
									<li className="nav-item">
										<HeaderItem text="Навыки" href="#skills" />
									</li>
									<li className="nav-item">
										<HeaderItem text="Опыт работы" href="#experience" />
									</li>
									<li>
										<HeaderItem
											text="Личностные качества"
											href="#soft_skills"
										/>
									</li>
									<li>
										<HeaderItem text="Образование" href="#education" />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header
