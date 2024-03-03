import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Experience from './components/Experience'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'
import { useWindowWidth } from './hooks/useWindowWidth'
import { MAX_CONTAINER_WIDTH } from './data/constants'
import Education from './components/Education'

function App() {
	const windowWidth = useWindowWidth()

	return (
		<div>
			<div
				className={`App container p-0 ${
					windowWidth > MAX_CONTAINER_WIDTH ? 'rounded-4' : ''
				}
				`}
				style={{
					marginTop: windowWidth > MAX_CONTAINER_WIDTH ? 32 : 0,
					marginBottom: windowWidth > MAX_CONTAINER_WIDTH ? 32 : 0,
				}}
			>
				<Header />
				<div
					className={`${windowWidth < 450 ? 'ps-3 pe-3' : 'ps-5 pe-5'}`}
					style={{
						paddingTop: 20,
					}}
				>
					<Intro className={'mb-5'} />
					<Skills className={'mb-5'} />
					<Experience className={'mb-5'} />
					<SoftSkills className={'mb-5'} />
					<Education className={'mb-5'} />
				</div>
				<Footer
					className={windowWidth > MAX_CONTAINER_WIDTH ? 'rounded-4' : ''}
				/>
			</div>
		</div>
	)
}

export default App
