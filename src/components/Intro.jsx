import React, { useState } from 'react'
import photo from '../assets/photo.png'
import Button from './UI/button/Button'
import Links from './Links'
import CV_Aleksandr_Zelenin from '../assets/CV_Aleksandr_Zelenin.pdf'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { ReactComponent as MarkIcon } from '../assets/icon_mark.svg'
import { ReactComponent as CopyIcon } from '../assets/icon_copy.svg'

const Intro = ({ className }) => {
	const windowWidth = useWindowWidth()
	const [isMailExpanded, setIsMailExpanded] = useState(false)
	const [isCopied, setIsCopied] = useState(false)

	const handleMailCopy = () => {
		navigator.clipboard.writeText('alexandrzelenin2013@yandex.ru').then(function () {
			setIsCopied(true)
		}, function () {
			setIsCopied(false)
		});
	}

	return (
		<div className={`p-0 ${className}`}>
			<div className="d-flex flex-md-nowrap flex-wrap">
				<img src={photo} alt="Фото меня" className="intro-image me-4 mb-3" />
				<div>
					<h1 className="bold">Александр Зеленин</h1>
					<h4 className="semi-bold text-shaded mb-3">Фронтенд разработчик</h4>
					<p className="text-paragraph mb-3">
						{`Привет! Я разрабатываю пользовательские интерфейсы уже более 4 лет. Специализируюсь на создании интерфейсов на React, TypeScript и ReduxToolkit. Участвовал в разработке и поддержке высоконагруженных внутренних сервисов в крупных продуктовых компаниях (Wargaming, Lesta).`}
					</p>
					<div className="d-flex flex-wrap mb-4">
						<Button
							href="mailto:alexandrzelenin2013@yandex.ru"
							onClick={() => setIsMailExpanded(true)}
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
					{
						isMailExpanded &&
						<div className='mb-4 default-bg p-2 rounded-2 d-flex flex-wrap justify-content-between align-items-center gap-1'>
							alexandrzelenin2013@yandex.ru

							<button
								className='small-button'
								onClick={handleMailCopy}
							>
								{isCopied ?
									<MarkIcon style={{ fill: 'white' }} />
									:
									<CopyIcon style={{ fill: 'white' }} />
								}
							</button>
						</div>
					}
					<Links />
				</div>
			</div>
		</div>
	)
}

export default Intro
