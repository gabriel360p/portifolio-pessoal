import { ListIcon, XIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import logo from '../assets/logo/logo-cut-removebg.png';

export function NavBar() {
	const [navMenu, setNavMenu] = useState<boolean>(false);
	const [navMenuFirst, setNavMenuFirst] = useState<boolean>(false);
	
	const [sectionMenu, setSectionMenu] = useState<string>('inicio');

	function handleMenuState(): void {
		/*
            Um pouco chato, mas legal de se fazer ksksksks
        */

		setNavMenuFirst(true);
		setNavMenu(!navMenu);
	}

	useEffect(()=>{
		const sections = document.querySelectorAll('section')
		const observer = new IntersectionObserver(entries=>{
			entries.forEach(entry=>{
				if(entry.isIntersecting){
					setSectionMenu(entry.target.id)
				}
			})
		},
		{
			threshold:0.5			
		}
	)

	sections.forEach(section=>{
		observer.observe(section)
	});

    return () => observer.disconnect();

	},[])

	return (
		<>
			<header
				className={`
        fixed
        z-100
        w-screen
		backdrop-blur-xl
        min-h-15
        py-2
        px-5
        lg:px-15
        `}
			>
				<nav className="flex items-center justify-between w-full h-full">
					<a href='#inicio'>
						<img
							alt="logo"
							src={logo}
							className="
							object-cover 
							h-10
							w-auto
							hover:scale-105
							active:scale-105
							"
						/>
					</a>

					<div
						className="hidden 
                md:flex
                "
					>
						<div
							className="
                    flex 
					gap-4
					lg:gap-8
					xl:gap-12
                    text-md
                    font-semibold
                    text-white"
						>
							<a
								href="#inicio"
								className={`desktop-menu-items ${sectionMenu==='inicio'?'text-text-primary':'text-white'}`}
								>
								Inicio
							</a>

							<a
								href="#sobre"
								className={`desktop-menu-items ${sectionMenu==='sobre'?'text-text-primary':'text-white'}`}
								>
								Sobre
							</a>

							<a
								href="#servicos"
								className={`desktop-menu-items ${sectionMenu==='servicos'?'text-text-primary':'text-white'}`}
								>
								Serviços
							</a>

							<a
								href="#tecnologias"
								className={`desktop-menu-items ${sectionMenu==='tecnologias'?'text-text-primary':'text-white'}`}

								>
								Tecnologias
							</a>

							<a
								href="#formacoes"
								className={`desktop-menu-items ${sectionMenu==='formacoes'?'text-text-primary':'text-white'}`}

							>
								Formações
							</a>

							<a
								href="#projetos"
								className={`desktop-menu-items ${sectionMenu==='projetos'?'text-text-primary':'text-white'}`}
								
								>
								Projetos
							</a>

							<a
								href="#contato"
								className={`desktop-menu-items ${sectionMenu==='contato'?'text-text-primary':'text-white'}`}

								>
								Contato
							</a>
						</div>
					</div>
					<div
						className="
                md:hidden
                "
					>
						{navMenu ? (
							<XIcon
								className="
                        text-white
                        active:text-text-primary
                        hover:text-text-primary
                        cursor-pointer"
								size={30}
								onClick={() => {
									handleMenuState();
								}}
							/>
						) : (
							<ListIcon
								className="
                        text-white
                        active:text-text-primary
                        hover:text-text-primary
                        cursor-pointer"
								size={30}
								onClick={() => {
									handleMenuState();
								}}
							/>
						)}
					</div>
				</nav>
			</header>
			
			{navMenuFirst && (
				<div
					className={`
                ${
									navMenu
										? 'flex animate-surge'
										: 'animate-disappear pointer-events-none'
								}
                z-90 backdrop-blur-xl h-fit fixed inset-0 top-15 md:hidden
                 `}
				>
					<div
						className="
                    flex gap-5 flex-col
                    w-screen 
                    p-5
                    text-white"
					>
						<a 
						className={`mobile-menu-items ${sectionMenu==='inicio'?'text-text-primary':'text-white'}`}
						href="#inicio">
							Inicio
						</a>
						<a 
						className={`mobile-menu-items ${sectionMenu==='sobre'?'text-text-primary':'text-white'}`}
						href="#sobre">
							Sobre
						</a>
						<a 
						className={`mobile-menu-items ${sectionMenu==='servicos'?'text-text-primary':'text-white'}`}
						href="#servicos">
							Serviços
						</a>
						<a 
						className={`mobile-menu-items ${sectionMenu==='tecnologias'?'text-text-primary':'text-white'}`}
						href="#tecnologias">
							Tecnologias
						</a>
						<a 
						className={`mobile-menu-items ${sectionMenu==='formacoes'?'text-text-primary':'text-white'}`}
						href="#formacoes">
							Formações
						</a>
						<a 
						className={`mobile-menu-items ${sectionMenu==='projetos'?'text-text-primary':'text-white'}`}
						href="#projetos">
							Projetos
						</a>
						<a 
						className={`mobile-menu-items ${sectionMenu==='contato'?'text-text-primary':'text-white'}`}
						href="#contato">
							Contato
						</a>
					</div>
				</div>
			)}
		</>
	);
}
