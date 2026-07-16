import {
	BriefcaseIcon,
	ClockIcon,
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	GpsIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	StudentIcon,
} from '@phosphor-icons/react';
import profile from '../assets/foto-profissional.png';
import { Button } from '../components/Button';
import { CardAbout } from '../components/CardAbout';
import { NavBar } from '../components/Navbar';
import { CardTecnolgies } from '../components/CardTecnologies';
import { csslogo, githubLogo, gitLogo, htmlLogo, jsLogo, ReactLogo, tailwindLogo, tsLogo } from '../utils/FerramentasIconsExport';
import { CardCertificado } from '../components/CardCertificado';
import { bills, certHt, cssInter, dgrid, fullStack, ifrn, jsNode, jsV, jsVI, pEngi, reactBonus, zero } from '../utils/CertificadosExport';
import { SizeHook } from '../hooks/SizeHook';
import { div } from 'motion/react-client';
import { useState } from 'react';

function App() {
	const size = SizeHook();
	const [showCertifcates, setShowCertifcates]=useState<boolean>(false)

	function handleShowCertifcates(){
		setShowCertifcates(!showCertifcates)
	}

	return (
		<>
			<NavBar />

			{/* HERO */}
			<div className="bg-bg-hero w-screen h-auto relative top-21">
				<div
					className="w-full h-full flex
          items-center
          justify-center
          gap-3
          flex-col-reverse
          md:flex-row
          md:justify-around
          pt-5
          lg:pb-10
        "
				>
					<div className="flex flex-col text-white gap-4 pb-4">
						<div
							className="
              text-center
              leading-7
              
              lg:text-start
            "
						>
							<p className="text-bg-indigo lg:text-3xl">Olá, eu sou</p>
							<p className="text-4xl lg:text-7xl font-bold">
								Gabriel <span className="text-bg-indigo">Costa</span>
							</p>
							<p className="font-bold lg:text-2xl">Desenvolvedor Front-end</p>
							<p className="text-[15px] lg:text-xl">
								Desenvolvo interfaces modernas, responsivas e <br />{' '}
								experiências digitais que fazem a diferença
							</p>
						</div>

						<div className="flex gap-3 justify-center lg:justify-start">
							<a href="#projetos">
								<Button title="Ver Projetos" variant="normal" />
							</a>
							<a href="#contatos">
								<Button title="Entrar em contato" variant="outline" />
							</a>
						</div>

						<div className="flex flex-row justify-center lg:justify-start gap-6 mt-4">
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
							<a
								href="https://www.linkedin.com/in/gabriel-costa27/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<InstagramLogoIcon size={32} className="hero-icons-contact" />
							</a>
							<a
								href="https://www.linkedin.com/in/gabriel-costa27/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<EnvelopeSimpleIcon size={32} className="hero-icons-contact" />
							</a>
						</div>
					</div>

					<div>
						<img
							src={profile}
							alt=""
							className=" w-auto h-55 rounded-2xl object-cover object-center
            lg:h-80
            xl:h-100
            "
						/>
					</div>
				</div>
			</div>
			{/* FIM DO HERO */}

			{/* SOBRE MIM */}
			<section
				className="
        min-w-full
        grid mt-28 px-7
        grid-cols-1
        md:grid-cols-2
        md:justify-center md:items-center
        md:gap-8
          
      "
			>
				<div
					className="flex 
          leading-7 flex-col items-start justify-center
          lg:gap-3
          
        "
				>
					<p
						className="
          text-bg-indigo font-bold
          lg:text-xl
          "
					>
						SOBRE MIM
					</p>
					<p
						className="font-extrabold
          lg:text-2xl
          "
					>
						Quem sou eu?
					</p>
					<p
						className=" text-justify
          text-gray-700
          lg:text-lg
          lg:leading-8
          "
					>
						Sou formado em TI pelo IFRN campus Caicó, tenho experiência no
						desenvolvimento web e sou apaixonado por transformar ideias em
						soluções digitais funcionais e bonitas. Busco sempre aprender,
						evoluir e criar projetos que impactam positivamente as pessoas.
					</p>
					<Button
						title="Mais sobre mim"
						variant="outline"
						personalize=" font-bold text-bg-indigo hover:text-white mt-3 lg:mt-0"
					/>
				</div>

				<div
					className="mt-8
          grid grid-cols-1 
          gap-2
          md:grid-cols-2 md:justify-center md:items-center 
          
          
        "
				>
					<div className="flex flex-col gap-2
          
          md:items-end
          ">
						<CardAbout
							title="Formação"
							description="Tec. em Informática p/ Web - IFRN"
							icon={<StudentIcon size={28} className="text-bg-indigo" />}
						/>
						<CardAbout
							title="Experiência"
							custom='w-full'
							description="Projetos acadêmicos"
							icon={<BriefcaseIcon size={28} className="text-bg-indigo" />}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<CardAbout
							title="Localização"
							description="Caicó, RN - Brasil"
							icon={<GpsIcon size={28} className="text-bg-indigo" />}
						/>
						<CardAbout
							title="Disponibilidade"
							description="Para novas oportunidades"
							icon={<ClockIcon size={28} className="text-bg-indigo" />}
						/>
					</div>
				</div>
			</section>
			{/* FIM DO SOBRE MIM */}

			{/* TECNOLIGIAS QUE UTILIZO */}
			<section
				className='
				bg-bg-tecnologies-section
				w-full
				p-5
				mt-9
				flex flex-col
				gap-5
				'
			>
				<div className='text-center'>
					<p className='font-extrabold text-bg-indigo'>TECNOLOGIAS</p>
					<h1 className='font-extrabold'>Minhas principais ferramentas</h1>
				</div>

				<div className='
				flex flex-wrap gap-x-5 gap-y-3
				justify-center items-center
				'>
					<CardTecnolgies title='HTML'figure_path={htmlLogo} link='https://developer.mozilla.org/pt-BR/docs/Web/HTML'/>
					<CardTecnolgies title='CSS' figure_path={csslogo} link='https://developer.mozilla.org/pt-BR/docs/Web/CSS'/>
					<CardTecnolgies title='JavaScript' figure_path={jsLogo} link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'/>
					<CardTecnolgies title='TypeScript' figure_path={tsLogo} link='https://www.typescriptlang.org/'/>
					<CardTecnolgies title='React' figure_path={ReactLogo} link='https://react.dev/'/>
					<CardTecnolgies title='Git' figure_path={gitLogo} link='https://git-scm.com/'/>
					<CardTecnolgies title='GitHub' figure_path={githubLogo} link='https://github.com/gabriel360p'/>
					<CardTecnolgies title='Tailwind' figure_path={tailwindLogo} link='https://tailwindcss.com/'/>

				</div>

			</section>
			{/* FIM TECNOLIGIAS QUE UTILIZO */}

			{/* MINHAS CERTIFICAÇÕES */}
			<section
				className='
				flex flex-col w-full
				p-5 gap-4
				justify-center
				items-center
				'
			>
				<div className='text-center'>
					<p className='font-extrabold text-bg-indigo'>FORMAÇÕES</p>
					<h1 className='font-extrabold'>Certificados</h1>
				</div>

				<div className='
					flex flex-wrap gap-y-5
					gap-x-4
					lg:gap-x-6
					xl:gap-x-8
					justify-center items-center
					'>
					<CardCertificado title='Téc. Informática' school={'IFRN - Caicó'} duration='2020 - 2024' photo={ifrn}/>	
					<CardCertificado title='Prog. com I.A' school={'DevClub'} duration='2026' photo={zero}/>	
					<CardCertificado title='Prog. FullStack' school={'DevClub'} duration='2026' photo={fullStack}/>	
					<CardCertificado title='Formação em Engenharia de Prompt' school={'DevClub'} duration='2026' photo={pEngi}/>	

					{(size.widthSize>=659||showCertifcates)?(
						<>
							<CardCertificado title='HTML - Front End Club' school={'DevClub'} duration='2026' photo={certHt}/>	
							<CardCertificado title='CSS Intermediário' school={'DevClub'} duration='2026' photo={cssInter}/>	
							<CardCertificado title='CSS - Display GRID' school={'DevClub'} duration='2026' photo={dgrid}/>	
							<CardCertificado title='JavaScript pt. V - A Nova Ordem de Dados' school={'DevClub'} duration='2026' photo={jsV}/>	
							<CardCertificado title='JavaScript pt. VI - A Ascensão do Async_Await' school={'DevClub'} duration='2026' photo={jsVI}/>	
							<CardCertificado title='Node' school={'DevClub'} duration='2026' photo={jsNode}/>	
							<CardCertificado title='React pt.3- Bônus - DevClub Full Stack' school={'DevClub'} duration='2026' photo={reactBonus}/>	
							<CardCertificado title='TypeScript' school={'DevClub'} duration='2026' photo={bills}/>	
						</>
					):""}

				</div>
					{(size.widthSize<=659)?(
						<div>
							<Button personalize='
								text-bg-indigo-variant			
							' variant='outline' title={`${showCertifcates? 'Ver menos':'Ver mais'}`}
							onclick={()=>{handleShowCertifcates()}}
							/>
						</div>	
					):""}
			</section>


		</>
	);
}

export default App;
