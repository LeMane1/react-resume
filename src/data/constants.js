import icon_communication from '../assets/icon_communication.svg'
import icon_idea from '../assets/icon_idea.svg'
import icon_team from '../assets/icon_team.svg'
import icon_task from '../assets/icon_task.svg'
import icon_reward from '../assets/icon_reward.svg'
import icon_code from '../assets/icon_code.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import telegram from '../assets/telegram.svg'
import vk from '../assets/vk.svg'
import email from '../assets/email.svg'

import feature_editor from '../assets/screenshots/feature_editor.jpg'

import game_searcher_image_1 from '../assets/screenshots/game_searcher_home.jpg'
import game_searcher_image_2 from '../assets/screenshots/game_searcher_search.jpg'
import game_searcher_image_3 from '../assets/screenshots/game_searcher_game.jpg'
import game_searcher_image_4 from '../assets/screenshots/game_searcher_profile.jpg'
import game_searcher_image_5 from '../assets/screenshots/game_searcher_login.jpg'

import kinomania_image_1 from '../assets/screenshots/kinomania_home.jpg'
import kinomania_image_2 from '../assets/screenshots/kinomania_search.jpg'
import kinomania_image_3 from '../assets/screenshots/kinomania_movie.jpg'
import kinomania_image_4 from '../assets/screenshots/kinomania_actors.jpg'

import easy_calories_image_1 from '../assets/screenshots/easy_calories_search.jpg'

export const MAX_CONTAINER_WIDTH = 990

export const links = [
	{
		iconUrl: linkedin,
		alt: 'LinkedIn',
		href: 'https://www.linkedin.com/in/aleksandr-zelenin-1084822a5/',
	},
	{
		iconUrl: github,
		alt: 'Github',
		href: 'https://github.com/LeMane1',
	},
	{
		iconUrl: instagram,
		alt: 'Instagram',
		href: 'ttps://www.instagram.com/zelenin.al/',
	},
	{
		iconUrl: telegram,
		alt: 'Telegram',
		href: 'https://t.me/suntihoke',
	},
	{
		iconUrl: vk,
		alt: 'VK',
		href: 'https://vk.com/aleksstandup',
	},
	{
		iconUrl: email,
		alt: 'Email',
		href: 'mailto:alexandrzelenin2013@yandex.ru',
	},
]

export const devSkills = [
	{ skillBlockTitle: 'Верстка', skills: ['HTML', 'CSS', 'JS'] },
	{
		skillBlockTitle: 'Типизация',
		skills: ['Typescript'],
	},
	{
		skillBlockTitle: 'CSS фреймворки',
		skills: ['React Bootstrap', 'Ant Design', 'Emotion'],
	},
	{
		skillBlockTitle: 'JS фреймворки',
		skills: ['React', 'React Router', 'Redux Toolkit'],
	},
	{
		skillBlockTitle: 'Алгоритмы',
		skills: ['Бинарный поиск', 'Сортировки'],
	},
	{
		skillBlockTitle: 'Браузер',
		skills: ['Web Sockets', 'Event Loop', 'Workers'],
	},
	{
		skillBlockTitle: 'Особенности JS',
		skills: ['Промисы и асинхронныe функции', 'Области видимости', 'Замыкания'],
	},
	{
		skillBlockTitle: 'Системы управления проектами и задачами',
		skills: ['Jira', 'Confluence', 'TeamCity', 'Jenkins'],
	},
	{ skillBlockTitle: 'Системы контроля версий', skills: ['GIT', 'SVN'] },
	{
		skillBlockTitle: 'Архитектурные решения',
		skills: ['Модули', 'Atomic Design', 'FSD'],
	},
	{
		skillBlockTitle: 'Unit тесты',
		skills: ['Vitest', 'Jest'],
	},
	{
		skillBlockTitle: 'SSR',
		skills: ['Next'],
	},
]

export const designSkills = [
	{ skillBlockTitle: 'Макеты', skills: ['Figma', 'Adobe XD'] },
	{
		skillBlockTitle: 'Структура',
		skills: ['Компоненты', 'Состояния элементов', 'Внутреннее и внешнее', 'Адаптивный дизайн'],
	},
]

export const experienceCompanies = [
	{
		company: 'Wargaming',
		period: '2022 – 2024',
		project: 'World of Warships: Legends',
		location: 'Белград',
		occupation: [
			{
				name: 'Фронтенд разработчик',
				tasks: [
					'Написание фронтенд приложений (React, Redux, Typescript) для внутренних сервисов компании',
					'Поддержка игрового проекта на внутреннем фреймворке (Unbound)',
					'Поддержка онбоардинга младших коллег',
				],
			},
		],
	},
	{
		company: 'Lesta Games',
		period: '2021 – 2022',
		project: 'World of Warships: Legends',
		location: 'Санкт-Петербург',
		occupation: [
			{
				name: 'Джуниор фронтенд разработчик',
				tasks: [
					'Написание кода на внутреннем фреймворке (Unbound)',
					'Оптимизация и создание UI компонентов',
					'Исправление багов, внедрение новых фич в проект'
				],
			},
		],
	},
]

export const commonTasks = [
	'Обсуждение фичей на митингах',
	'Ресерч и устранение различных багов',
	'Код ревью в Fisheye',
	'Демо фичей',
	'Документирование кода в Confluence',
]

export const softSkills = [
	{
		iconUrl: icon_communication,
		alt: 'Коммуникация',
		title: 'Умение договариваться при обсуждении фичей',
	},
	{
		iconUrl: icon_idea,
		alt: 'Новые методы разработки',
		title: 'Желание изучения новых подходов и методов разработки',
	},
	{
		iconUrl: icon_team,
		alt: 'Работа в команде',
		title: 'Умение координировать действия в команде',
	},
	{
		iconUrl: icon_task,
		alt: 'Завершение задач',
		title: 'Желание доделывать начатые задачи до конца',
	},
	{
		iconUrl: icon_reward,
		alt: 'Достижение целей',
		title: 'Стремление к достижению поставленных целей',
	},
	{
		iconUrl: icon_code,
		alt: 'Усидчивость',
		title: 'Усидчивость',
	},
]

export const educationItems = [
	{
		university: 'СПБПУ Петра Великого',
		period: '2016 – 2020',
		speciality: 'Бакалавриат по специальности «Приборостроение»',
	},
	{
		university: 'СПБПУ Петра Великого',
		period: '2020–2022',
		speciality: 'Магистратура по специальности «Медицинское приборостроение»',
	},
]

export const portfolioItems = [
	{
		name: 'Game Searcher',
		id: 1,
		images: [
			{
				id: 1,
				image: game_searcher_image_1,
				alt: 'Game Searcher Home Page'
			},
			{
				id: 2,
				image: game_searcher_image_2,
				alt: 'Game Searcher Search Page'
			},
			{
				id: 3,
				image: game_searcher_image_3,
				alt: 'Game Searcher Game Page'
			},
			{
				id: 4,
				image: game_searcher_image_4,
				alt: 'Game Searcher Profile Page'
			},
			{
				id: 5,
				image: game_searcher_image_5,
				alt: 'Game Searcher Login Page'
			},
		],
		description:
			'Fullstack приложение для поиска и просмотра информации о видеоиграх. Есть возможность создания аккаунта, добавление игр в список купленных. Используются Next (Server/Client components, Server Actions), Redux Toolkit, Typescript, Material UI. Для базы данных пользователей используется Supabase, для получения данных RAWG Api.',
		links: [
			{
				name: 'Посмотреть',
				linkSource: 'https://games-search-s237.vercel.app/'
			},
			{
				name: 'Github',
				linkSource: 'https://github.com/LeMane1/games-search'
			}
		]
	},
	{
		name: 'Киномания',
		id: 2,
		images: [
			{
				id: 1,
				image: kinomania_image_1,
				alt: 'Kinomania Home Page'
			},
			{
				id: 2,
				image: kinomania_image_2,
				alt: 'Kinomania Search Page'
			},
			{
				id: 3,
				image: kinomania_image_3,
				alt: 'Kinomania Movie Page'
			},
			{
				id: 4,
				image: kinomania_image_4,
				alt: 'Kinomania Actors'
			},
		],
		description:
			'Поиск и просмотр информации о любимых фильмах и сериалах. Используются React, Redux Toolkit, Typescript, Ant Design, API от Кинопоиска.',
		links: [
			{
				name: 'Посмотреть',
				linkSource: 'https://lemane1.github.io/movies-search/'
			},
			{
				name: 'Github',
				linkSource: 'https://github.com/LeMane1/movies-search'
			}
		]
	},
	{
		name: 'Easy Calories',
		id: 3,
		images: [
			{
				id: 1,
				image: easy_calories_image_1,
				alt: 'Easy Calories Search Page'
			},
		],
		description:
			'Поиск и рассчет калорий в продуктах. React, Redux Toolkit, Typescript, Ant Design. Для получения данных используется Ninja Api.',
		links: [
			{
				name: 'Посмотреть',
				linkSource: 'https://lemane1.github.io/easy-calories/'
			},
			{
				name: 'Github',
				linkSource: 'https://github.com/LeMane1/easy-calories'
			}
		]
	},
	{
		name: 'Codex XML Editor',
		id: 4,
		images: [
			{
				id: 1,
				image: feature_editor,
				alt: 'Feature Editor Placeholder'
			},
		],
		description:
			'Сервис для редактирования и создания XML конфигов для Wargaming. Позволяет загружать XML конфиги, изменять их содержимое и выгружать пользователю обратно. React, React Bootstrap, Typescript, Redux Toolkit.',
		extraInfo: 'Поскольку проект находится под NDA, по договоренности с работодателем есть возможность показа кода только на собеседовании.'
	},
]
