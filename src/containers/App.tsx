import {
	ArrowRightIcon,
	BriefcaseIcon,
	CheckCircleIcon,
	ClockIcon,
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	GlobeIcon,
	GpsIcon,
	GreaterThanIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	MonitorIcon,
	RocketLaunchIcon,
	ShoppingCartIcon,
	StudentIcon,
	WhatsappLogoIcon,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import profile from '../assets/foto-profissional-removebg-preview.png';
import { Button } from '../components/Button';
import { CardAbout } from '../components/CardAbout';
import { CardCertificado } from '../components/CardCertificado';
import { CardTecnolgies } from '../components/CardTecnologies';
import { HelpCard } from '../components/HelpCard';
import { NavBar } from '../components/Navbar';
import {
	bills,
	certHt,
	cssInter,
	dgrid,
	fullStack,
	ifrn,
	jsNode,
	jsV,
	jsVI,
	pEngi,
	reactBonus,
	zero,
} from '../utils/CertificadosExport';
import {
	csslogo,
	githubLogo,
	gitLogo,
	htmlLogo,
	jsLogo,
	ReactLogo,
	tailwindLogo,
	tsLogo,
} from '../utils/FerramentasIconsExport';
import { CardProject } from '../components/CardProject';
import { projects } from '../services/ProjectsServices';
import { CardWork } from '../components/CardWork';
import { Footer } from '../components/Footer';
import type { Project } from '../types/ProjectsType';
import { FadeInSection } from '../components/FadeInSection';
import { sendMessage } from '../utils/sendMessage';
import { easterEggMessage, messageBase, solicitarOrcamento, verProjetos } from '../utils/Messages';
import { randomMessage } from '../utils/easterEgg';

function App() {
	const [showCertifcates, setShowCertifcates] = useState<boolean>(false);
	const [easterEgg, setEasterEgg] = useState<boolean>(false);
	const [showProjects, setShowProjects] = useState<boolean>(false);
	const [firstProject, setFirstProject] = useState<Project[]>();
	const [restProject, setRestProject] = useState<Project[]>();
	
	function handleEasterEgg() {
		setEasterEgg(!easterEgg)
		setTimeout(()=>{
			if(!easterEgg){
				alert(randomMessage())
			}
		},2000)

		setTimeout(()=>{
			if(window.confirm('Pode por favor me ajudar? 😵‍💫')){
				setEasterEgg(false)
				sendMessage(easterEggMessage)
			}else{
				alert("Oh mundo cruel 😞...")
			}
		},10000)

		setTimeout(()=>{
			if(!easterEgg) alert("Não se preocupe, uma hora eu paro de girar, eu acho...😞")
		},16000)

		setTimeout(()=>{
			setEasterEgg(false)
		},20000)
	}
	function handleShowProjects() {
		setShowProjects(!showProjects);
	}
	function handleShowCertifcates() {
		setShowCertifcates(!showCertifcates);
	}
	useEffect(()=>{
		setFirstProject(projects.slice(0,3))
		setRestProject(projects.slice(4))
	},[])

	return (
	<div className="background-grid">
		<div className="background-grid-overlay" />
			<main className=" flex flex-col items-center relative z-10">
				<NavBar/>

				<FadeInSection>
					{/* HERO */}
					<section id="inicio"
					className="relative section-anchor top-19 h-auto w-screen bg-bg-hero">
						<div
							className="
								flex
								flex-col-reverse
								gap-3
								items-center
								justify-center
								pt-5
								h-full
								w-full
								lg:pb-10
								md:flex-row
								md:justify-around
							"
						>
							<div className="flex flex-col gap-6 pb-4 text-white">
								<div className=" flex flex-col gap-4 leading-7 text-center lg:text-start">
									<p className="text-text-primary lg:text-3xl">Olá, eu sou</p>
									<p className="font-bold text-4xl lg:text-7xl">
										Gabriel <span className="text-text-primary">Costa</span><span className='animate-ping text-7xl text-text-primary'>_</span>
									</p>
									<div className='flex gap-2 justify-start items-center'>
										<GreaterThanIcon size={20}/>
										<p className="font-bold lg:text-2xl"> 
											Desenvolvedor Front-end
										</p>
									</div>
									<p className="text-[15px] lg:text-xl">
										Desenvolvo{' '}
										<span className="text-text-primary">
											{' '}
											interfaces modernas, responsivas e <br /> experiências
											digitais
										</span>{' '}
										que fazem a diferença
									</p>
								</div>

								<div className="flex gap-3 justify-center lg:justify-start">
									<a href="#projetos" className='button-normal'>
										Ver Projetos
									</a>
									<button type='button' className='button-outline' onClick={()=>{sendMessage(solicitarOrcamento)}}>Solicitar orçamento</button>
								</div>

								<div className="flex flex-row gap-6 justify-center mt-4 lg:justify-start">
									<a
										href="https://github.com/gabriel360p"
										rel="noopener noreferrer"
										target="_blank"
									>
										<GithubLogoIcon size={32} className="hero-icons-contact" />
									</a>
									<a
										href="https://www.linkedin.com/in/gabriel-costa27/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<LinkedinLogoIcon size={32} className="hero-icons-contact" />
									</a>
									<button
										type="button"
										onClick={()=>{sendMessage(messageBase)}}
									>
										<WhatsappLogoIcon size={32} className="hero-icons-contact" />
									</button>
									<a
										href="https://www.instagram.com/dev.gabriel.costa?igsh=cTN0dzcyY2JraWU1"
										rel="noopener noreferrer"
										target="_blank"
									>
										<InstagramLogoIcon size={32} className="hero-icons-contact" />
									</a>
									<a
										href="mailto:seuemail@gmail.com?subject=Contato%20via%20Portfólio"
										rel="noopener noreferrer"
										target="_blank"
									>
										<EnvelopeSimpleIcon size={32} className="hero-icons-contact" />
									</a>
								</div>
							</div>

							<div>
								<img
									onDoubleClick={()=>{handleEasterEgg()}}
									src={profile}
									alt="foto-pessoal"
									className={`object-center 
									drop-shadow-sm drop-shadow-text-primary/40
									hover:drop-shadow-md hover:drop-shadow-text-primary hover:scale-105
									${easterEgg? 'animate-spin':''}
									object-cover 
									h-70 w-auto lg:h-90 rounded-4xl xl:h-110`}

								/>
							</div>
						</div>
					</section>
					{/* FIM DO HERO */}
				</FadeInSection>

				<FadeInSection>
					{/* SOBRE MIM */}
					<section id="sobre"
						className="
							backdrop-blur-md
							bg-bg-panel/10
							section-anchor
							grid
							grid-cols-1
							mt-28
							px-7
							py-8
							w-[90%]
							border
							border-text-secundary
							md:gap-8
							md:grid-cols-2
							md:items-center
							md:justify-center
							rounded-md
						"
					>
						<div className="flex flex-col items-start justify-center leading-7 lg:gap-3">
							<p className="font-bold text-text-primary lg:text-xl">SOBRE MIM</p>
							<p className="font-extrabold text-white lg:text-2xl">Quem sou eu?</p>
							<p className="text-justify text-white lg:leading-8 lg:text-lg">
								Sou formado em TI pelo IFRN campus Caicó, tenho experiência no
								desenvolvimento web e sou apaixonado por transformar ideias em
								soluções digitais funcionais e bonitas. Busco sempre aprender,
								evoluir e criar projetos que impactam positivamente as pessoas.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:items-center md:justify-center">
							<div className="flex flex-col gap-4 md:items-end">
								<CardAbout
									title="Formação"
									description="Tec. em Informática p/ Web - IFRN"
									icon={<StudentIcon size={28} className="text-text-primary" />}
								/>
								<CardAbout
									title="Experiência"
									custom="w-full"
									description="Projetos acadêmicos"
									icon={<BriefcaseIcon size={28} className="text-text-primary" />}
								/>
							</div>
							<div className="flex flex-col gap-4">
								<CardAbout
									title="Localização"
									description="Caicó, RN - Brasil"
									icon={<GpsIcon size={28} className="text-text-primary" />}
								/>
								<CardAbout
									title="Disponibilidade"
									description="Para novas oportunidades"
									icon={<ClockIcon size={28} className="text-text-primary" />}
								/>
							</div>
						</div>
					</section>
					{/* FIM DO SOBRE MIM */}
				</FadeInSection>


				<FadeInSection>
					{/* SERVIÇOS */}
					<section id="servicos"
						className="
							backdrop-blur-md
							bg-bg-panel/10
							flex
							section-anchor
							flex-col
							gap-4
							mt-9
							px-2
							py-7
							w-[90%]
							border
							border-text-secundary
							rounded-md
						"
					>
						<div className="text-center">
							<p className="font-extrabold text-text-primary">COMO POSSO AJUDAR</p>
							<h1 className="font-extrabold text-white">
								Soluções para impulsionar{' '}
								<span className="text-text-primary">seu negócio</span> online
							</h1>
						</div>

						<div className="flex flex-row flex-wrap gap-x-6 gap-y-4 items-center justify-center">
							<HelpCard
								title="Landing Pages"
								description="
							Páginas de alta conversão para divulgar produtos e serviços."
								icon={<MonitorIcon size={35} className="text-text-primary" />}
							/>
							<HelpCard
								title="Sites Institucionais"
								description="
							Sites profissionais que transmitem credibilidade e fortalecem sua marca."
								icon={<GlobeIcon size={35} className="text-text-primary" />}
							/>
							<HelpCard
								title="Lojas e Catálogos"
								description=" 
							Apresente seus produtos de forma organizada e aumente suas vendas."
								icon={<ShoppingCartIcon size={35} className="text-text-primary" />}
							/>
							<HelpCard
								title="Manutenção"
								description="
							Atualizações, melhorias e suporte para manter tudo funcionando."
								icon={<RocketLaunchIcon size={35} className="text-text-primary" />}
							/>
						</div>
					</section>
					{/* FIM SERVIÇOS */}
				</FadeInSection>


				<FadeInSection>
					{/* TECNOLIGIAS QUE UTILIZO */}
					<section id="tecnologias"
						className="
							flex
							flex-col
							gap-5
							mt-9
							p-5
							w-[90%]
							backdrop-blur-md
							bg-bg-panel/10
							border
							border-text-secundary
							rounded-md
						"
					>
						<div className="text-center">
							<p className="font-extrabold text-text-primary">TECNOLOGIAS</p>
							<h1 className="font-extrabold text-white">
								Minhas principais ferramentas
							</h1>
						</div>

						<div className="flex flex-wrap gap-x-5 gap-y-3 items-center justify-center">
							<CardTecnolgies
								title="HTML"
								figure_path={htmlLogo}
								link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
							/>
							<CardTecnolgies
								title="CSS"
								figure_path={csslogo}
								link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
							/>
							<CardTecnolgies
								title="JavaScript"
								figure_path={jsLogo}
								link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
							/>
							<CardTecnolgies
								title="TypeScript"
								figure_path={tsLogo}
								link="https://www.typescriptlang.org/"
							/>
							<CardTecnolgies
								title="React"
								figure_path={ReactLogo}
								link="https://react.dev/"
							/>
							<CardTecnolgies
								title="Git"
								figure_path={gitLogo}
								link="https://git-scm.com/"
							/>
							<CardTecnolgies
								title="GitHub"
								figure_path={githubLogo}
								link="https://github.com/gabriel360p"
							/>
							<CardTecnolgies
								title="Tailwind"
								figure_path={tailwindLogo}
								link="https://tailwindcss.com/"
							/>
						</div>
					</section>
					{/* FIM TECNOLIGIAS QUE UTILIZO */}
					</FadeInSection>


				<FadeInSection>
					{/* MINHAS CERTIFICAÇÕES */}
					<section id="formacoes"
						className="
							flex
							flex-col
							backdrop-blur-md
							bg-bg-panel/10
							gap-4
							items-center
							justify-center
							mt-9
							p-5
							w-[90%]
							border
							border-text-secundary
							rounded-md
						"
					>
						<div className="text-center">
							<p className="font-extrabold text-text-primary">FORMAÇÕES</p>
							<h1 className="font-extrabold text-white">Certificados</h1>
						</div>

						<div className="flex flex-wrap gap-x-4 gap-y-4 items-center justify-center lg:gap-x-6 xl:gap-x-8">
							<CardCertificado
								title="Téc. Informática"
								school={'IFRN - Caicó'}
								duration="2020 - 2024"
								photo={ifrn}
							/>
							<CardCertificado
								title="Prog. com I.A"
								school={'DevClub'}
								duration="2026"
								photo={zero}
							/>
							<CardCertificado
								title="Prog. FullStack"
								school={'DevClub'}
								duration="2026"
								photo={fullStack}
							/>
							<CardCertificado
								title="Formação em Engenharia de Prompt"
								school={'DevClub'}
								duration="2026"
								photo={pEngi}
							/>
							<CardCertificado
								title="TypeScript"
								school={'DevClub'}
								duration="2026"
								photo={bills}
							/>

							{showCertifcates ? (
								<>
									<CardCertificado
										title="HTML - Front End Club"
										school={'DevClub'}
										duration="2026"
										photo={certHt}
									/>
									<CardCertificado
										title="CSS Intermediário"
										school={'DevClub'}
										duration="2026"
										photo={cssInter}
									/>
									<CardCertificado
										title="CSS - Display GRID"
										school={'DevClub'}
										duration="2026"
										photo={dgrid}
									/>
									<CardCertificado
										title="JavaScript pt. V - A Nova Ordem de Dados"
										school={'DevClub'}
										duration="2026"
										photo={jsV}
									/>
									<CardCertificado
										title="JavaScript pt. VI - A Ascensão do Async_Await"
										school={'DevClub'}
										duration="2026"
										photo={jsVI}
									/>
									<CardCertificado
										title="Node"
										school={'DevClub'}
										duration="2026"
										photo={jsNode}
									/>
									<CardCertificado
										title="React pt.3- Bônus - DevClub Full Stack"
										school={'DevClub'}
										duration="2026"
										photo={reactBonus}
									/>
								</>
							) : (
								''
							)}
						</div>
						<div>
							<Button
								personalize="
										text-bg-indigo-variant			
									"
								variant="outline"
								title={`${showCertifcates ? 'Ver menos' : 'Ver mais'}`}
								onclick={() => {
									handleShowCertifcates();
								}}
							/>
						</div>
					</section>
					{/* FIM DE MINHAS CERTIFICAÇÕES */}
				</FadeInSection>


				<FadeInSection>
					{/* MEUS PROJETOS */}
					<section id='projetos'
						className="
							flex
							flex-col
							section-anchor
							gap-4
							items-center
							justify-center
							mt-9
							p-5
							w-[90%]
							bg-bg-panel/10
							backdrop-blur-md
							border
							border-text-secundary
							rounded
						"
					>
						<div className="text-center">
							<p className="font-extrabold text-text-primary">PROJETOS</p>
							<h1 className="font-extrabold text-white">
								Meus últimos projetos
							</h1>
						</div>

						<div className='flex flex-col justify-center items-center'>
							<div className='flex flex-wrap gap-x-10 gap-y-4 items-center justify-center mb-6'>
								{firstProject?.map((project) => (
										<CardProject key={project.id} project={project} />
									))
								}
								
								{ showProjects &&
									restProject?.map((project) => (
										<CardProject key={project.id} project={project} />
									))
								}
							</div>
							<Button
								personalize="
									text-bg-indigo-variant			
									"
								variant="outline"
								title={`${showProjects ? 'Ver menos' : 'Ver mais'}`}
								onclick={() => {
									handleShowProjects();
								}}/>

						</div>
					</section>
					{/* FIM DE MEUS PROJETOS */}
				</FadeInSection>

				<FadeInSection>
					{/* MINHA FORMA DE TRABALHAR */}
					<section id='trabalhar'
						className="
							flex
							flex-col
							section-anchor
							gap-5
							items-center
							justify-center
							mt-9
							py-5
							w-[90%]
							backdrop-blur-md
							bg-bg-panel/10
							border
							border-text-secundary
							rounded
						"
					>
						<div className="text-center">
							<p className="font-extrabold text-text-primary">MEU PROCESSO DE TRABALHO</p>
							<h1 className="font-extrabold text-white">
								Simples, transparente e eficiente
							</h1>
						</div>

						<div className='flex flex-row flex-wrap gap-x-4 gap-y-5 xl:gap-x-10 items-center justify-center'>
							<CardWork description='Conversamos sobre sua necessidade e objetivos.' title='Entendimento' number={1}/>
							<CardWork description='Estrutura, layout e tecnologias definidas.' title='Planejamento' number={2}/>
							<CardWork description='Código limpo, testes e foco em perfomance.' title='Desenvolvimento' number={3}/>
							<CardWork description='Entrega, ajustes e suporte vitalício.' title='Entrega e suporte' number={4}/>
						</div>


						{/* <a className='button-outline' href='/'>Quero começar um novo projeto <ArrowRightIcon/></a> */}
					</section>
					{/* FIM DE FORMA DE TRABALHAR */}
				</FadeInSection>

				<FadeInSection>
					{/* VAMOS TRABALHAR JUNTOS */}
					<section id='contato'
					className="
							gap-5
							section-anchor
							mt-9
							mb-9	
							animate-glow
							w-[90%]
							rounded border bg-bg-panel/10 backdrop-blur-md border-text-primary/50
						"
					>
						<div className='flex flex-row flex-wrap justify-center w-full gap-5 lg:gap-15 py-5 items-center'>

							<div className='flex flex-col gap-2 justify-center items-center px-3 lg:px-5'>
								<p className='text-text-primary text-center'>VAMOS TRABALHAR JUNTOS?</p>
								<h2 className='text-2xl font-bold text-center'>Tem um <span className='text-text-primary'>projeto</span> em mente?</h2>
								<p className='text-center'>Vamos tirar do papel e vamos transformar em realidade!</p>
							</div>

							<div className='flex flex-col justify-center items-start gap-2'>
								<div className='flex flex-row gap-2 justify-center items-center'>
									<CheckCircleIcon className='text-text-primary flex flex-row gap-2' size={25}/>
									<p> Resposta rápida</p>
								</div>
								<div className='flex flex-row gap-2 justify-center items-center'>
									<CheckCircleIcon className='text-text-primary flex flex-row gap-2' size={25}/>
									<p> Orçamento sem compromisso</p>
								</div>
								<div className='flex flex-row gap-2 justify-center items-center'>
									<CheckCircleIcon className='text-text-primary flex flex-row gap-2' size={25}/>
									<p> Soluções personalizadas</p>
								</div>
							</div>

							<div className='flex flex-col justify-center items-center gap-2'>
								<button onClick={()=>{sendMessage(verProjetos)}} type="button" className='button-normal'>Falar no Whatsapp</button>
								<button onClick={()=>{sendMessage(solicitarOrcamento)}} type="button"className='button-outline'>Solicitar orçamento</button>
							</div>

						</div>
					</section>
					{/* FIM VAMOS TRABALHAR JUNTOS */}
				</FadeInSection>

				<Footer/>
		</main>
	</div>
	);
}

export default App;
