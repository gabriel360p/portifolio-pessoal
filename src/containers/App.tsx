import {
	BriefcaseIcon,
	ClockIcon,
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	GlobeIcon,
	GpsIcon,
	InstagramLogoIcon,
	LinkedinLogoIcon,
	MonitorIcon,
	RocketLaunchIcon,
	ShoppingCartIcon,
	StudentIcon,
} from '@phosphor-icons/react';
import { div } from 'motion/react-client';
import { useState } from 'react';
import profile from '../assets/foto-profissional.png';
import { Button } from '../components/Button';
import { CardAbout } from '../components/CardAbout';
import { CardCertificado } from '../components/CardCertificado';
import { CardTecnolgies } from '../components/CardTecnologies';
import { HelpCard } from '../components/HelpCard';
import { NavBar } from '../components/Navbar';
import { SizeHook } from '../hooks/SizeHook';
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

function App() {
	const size = SizeHook();
	const [showCertifcates, setShowCertifcates] = useState<boolean>(false);

	function handleShowCertifcates() {
		setShowCertifcates(!showCertifcates);
	}

	return (
		<div className="flex flex-col items-center">
			<NavBar />

			{/* HERO */}
			<div id="inicio" className="relative top-19 h-auto w-screen bg-bg-hero">
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
					<div className="flex flex-col gap-4 pb-4 text-white">
						<div className="leading-7 text-center lg:text-start">
							<p className="text-text-primary lg:text-3xl">Olá, eu sou</p>
							<p className="font-bold text-4xl lg:text-7xl">
								Gabriel <span className="text-text-primary">Costa</span>
							</p>
							<p className="font-bold lg:text-2xl">Desenvolvedor Front-end</p>
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
							<a href="#projetos">
								<Button title="</> Ver Projetos" variant="normal" />
							</a>
							<a href="#contatos">
								<Button title="Solicitar orçamento" variant="outline" />
							</a>
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
							className="object-center object-cover h-55 w-auto lg:h-80 rounded-2xl xl:h-100"
						/>
					</div>
				</div>
			</div>
			{/* FIM DO HERO */}

			{/* SOBRE MIM */}
			<section
				id="sobre"
				className="
				    grid
				    grid-cols-1
				    mt-28
				    px-7
				    py-8
				    w-[90%]
				    bg-bg-panel
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
					<Button
						title="Mais sobre mim"
						variant="outline"
						personalize=" font-bold text-bg-indigo hover:text-white mt-3 lg:mt-0"
					/>
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

			{/* SERVIÇOS */}
			<section
				id="servicos"
				className="
				    flex
				    flex-col
				    gap-4
				    mt-9
				    px-7
				    py-7
				    w-[90%]
				    bg-bg-panel
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

			{/* TECNOLIGIAS QUE UTILIZO */}
			<section
				id="tecnologias"
				className="
				    flex
				    flex-col
				    gap-5
				    mt-9
				    p-5
				    w-[90%]
				    bg-bg-panel
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

			{/* MINHAS CERTIFICAÇÕES */}
			<section
				id="formacoes"
				className="
				    flex
				    flex-col
				    gap-4
				    items-center
				    justify-center
				    mt-9
				    p-5
				    w-[90%]
				    bg-bg-panel
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

			{/* MEUS PROJETOS */}
			<section
				className="
				    flex
				    flex-col
				    gap-4
				    items-center
				    justify-center
				    mt-9
				    p-5
				    w-[90%]

				    bg-bg-panel
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
				<div className='flex flex-wrap gap-x-4 gap-y-4 items-center justify-center'>
					{projects
						? projects.map((project) => (
							<CardProject key={project.id} project={project} />
						))
						: ''}
				</div>
			</section>
			{/* FIM DE MEUS PROJETOS */}

			{/* MINHA FORMA DE TRABALHAR */}
			<section></section>
			{/* FIM DE FORMA DE TRABALHAR */}

			{/* VAMOS TRABALHAR JUNTOS */}
			<section></section>
			{/* FIM VAMOS TRABALHAR JUNTOS */}
		</div>
	);
}

export default App;
