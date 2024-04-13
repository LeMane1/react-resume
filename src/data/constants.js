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
		skillBlockTitle: 'CSS фреймворки',
		skills: ['Bootstrap'],
	},
	{
		skillBlockTitle: 'Типизация',
		skills: ['Typescript'],
	},
	{
		skillBlockTitle: 'JS фреймворки',
		skills: ['React', 'React Router', 'Redux Toolkit'],
	},
	{ skillBlockTitle: 'Алгоритмы', skills: ['Бинарный поиск', 'Сортировки'] },
	{
		skillBlockTitle: 'Браузер',
		skills: ['Web Sockets', 'Event Loop', 'Workers'],
	},
	{
		skillBlockTitle: 'Системы управления проектами и задачами',
		skills: ['Jira', 'Confluence', 'MS Teams', 'TeamCity', 'Jenkins'],
	},
	{
		skillBlockTitle: 'Особенности JS',
		skills: ['Промисы и асинхронныe функции', 'Области видимости', 'Замыкания'],
	},
	{ skillBlockTitle: 'Системы контроля версий', skills: ['Git', 'SVN'] },
]

export const designSkills = [
	{ skillBlockTitle: 'Макеты', skills: ['Figma', 'Adobe XD'] },
	{
		skillBlockTitle: 'Кроссплатформенность',
		skills: ['Адаптивный дизайн'],
	},
	{
		skillBlockTitle: 'Структура',
		skills: ['Компоненты', 'Состояния элементов', 'Внутреннее и внешнее'],
	},
]

export const experienceCompanies = [
	{
		company: 'Wargaming',
		period: '2022 — н.в.',
		occupation: 'Разработчик пользовательских интерфейсов в консольном проекте',
	},
	{
		company: 'Lesta Games',
		period: '2021 – 2022',
		occupation: 'Разработчик пользовательских интерфейсов в консольном проекте',
	},
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
		status: 'В разработке',
		type: 'Pet project',
		name: 'Finance Control',
		description:
			'Сервис для контроля за расходами и доходами. Поддерживает авторизацию пользователей, добавление учета расходов / доходов, создания отчета за выбранный период.',
	},
	{
		status: 'В разработке',
		type: 'Проект для Wargaming',
		name: 'Feature XML Editor',
		description:
			'Сервис для редактирования и создания XML конфигов. Позволяет загружать XML конфиги, изменять их содержимое и выгружать пользователю обратно.',
	},
]
