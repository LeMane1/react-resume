import React from 'react'
import photo from '../assets/photo.png'
import Button from './UI/button/Button'
import Links from './Links'
import CV_Aleksandr_Zelenin from '../assets/CV_Aleksandr_Zelenin.pdf'
import { useWindowWidth } from '../hooks/useWindowWidth'

const Intro = ({ className }) => {
	const windowWidth = useWindowWidth()

	return (
		<div className={`p-0 ${className}`}>
			<div className="d-flex flex-md-nowrap flex-wrap">
				<img src={photo} alt="Фото меня" className="intro-image me-4 mb-3" />
				<div className="">
					<h1 className="bold">Александр Зеленин</h1>
					<h4 className="semi-bold text-shaded mb-3">Фронтенд разработчик</h4>
					<p className="text-paragraph mb-3">
						{`Привет! Я разрабатываю пользовательские интерфейсы уже более 3 лет. Специализируюсь на создании интерфейсов на React, TypeScript и ReduxToolkit. Участвовал в разработке и поддержке высоконагруженных внутренних сервисов в крупных продуктовых компаниях (Wargaming, Lesta).`}
					</p>
					<div className="d-flex flex-wrap mb-4">
						<Button
							href="mailto:alexandrzelenin2013@yandex.ru"
							type="primary"
							className={`mb-2 align-self-start ${windowWidth < 400 ? 'me-0' : 'me-2'
								}`}
							style={{ width: windowWidth < 400 ? '100%' : '' }}
						>
							Написать мне
						</Button>
						<Button
							href={CV_Aleksandr_Zelenin}
							type="secondary"
							className={'align-self-start'}
							style={{ width: windowWidth < 400 ? '100%' : '' }}
							download
						>
							Скачать резюме
						</Button>
					</div>
					<Links />
				</div>
			</div>
		</div>
	)
}

export default Intro
