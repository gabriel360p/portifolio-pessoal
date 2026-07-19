import { ListIcon, XIcon } from '@phosphor-icons/react';
import { useState } from 'react';
import logo from '../assets/logo/logo-cut-removebg.png';
import { ScrollHook } from '../hooks/ScrollHook';
export function NavBar() {
	const [navMenu, setNavMenu] = useState<boolean>(false);
	const [navMenuFirst, setNavMenuFirst] = useState<boolean>(false);
	const scrollPosition = ScrollHook();

	function handleMenuState(): void {
		/*
            Um pouco chato, mas legal de se fazer ksksksks
        */

		setNavMenuFirst(true);
		setNavMenu(!navMenu);
	}

	return (
		<>
			<header
				className={`
        fixed
        z-100
        w-screen bg-bg-default
        min-h-15
        py-2
        px-5
        lg:px-15
        `}
			>
				<nav className="flex items-center justify-between w-full h-full">
					<img
						alt="logo"
						src={logo}
						className="
                        object-cover 
                        h-10
                        w-auto"
					/>

					<div
						className="hidden 
                md:flex
                "
					>
						<div
							className="
                    flex gap-7
                    text-md
                    font-semibold
                    text-white"
						>
							<a
								href="#inicio"
								className={`
                        desktop-menu-items ${scrollPosition <= 400 ? 'text-text-primary' : ''}`}
							>
								Inicio
							</a>

							<a
								href="#sobre"
								className={`
                        desktop-menu-items ${scrollPosition >= 400 && scrollPosition <= 800 ? 'text-text-primary' : ''}`}
							>
								Sobre
							</a>

							<a
								href="#tecnologias"
								className={`
                        desktop-menu-items ${scrollPosition >= 800 && scrollPosition <= 1055 ? 'text-text-primary' : ''}`}
							>
								Tecnologias
							</a>

							<a
								href="#formacoes"
								className={`
                        desktop-menu-items ${scrollPosition >= 1056 && scrollPosition <= 1200 ? 'text-text-primary' : ''}`}
							>
								Formações
							</a>

							<a
								href="#projetos"
								className={`
                        desktop-menu-items ${scrollPosition >= 1056 && scrollPosition <= 1200 ? 'text-text-primary' : ''}`}
							>
								Projetos
							</a>

							<a
								href="#contato"
								className={`
                        desktop-menu-items ${scrollPosition >= 1056 && scrollPosition <= 1200 ? 'text-text-primary' : ''}`}
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
			$
			{navMenuFirst && (
				<div
					className={`
                ${
									navMenu
										? 'flex animate-surge'
										: 'animate-disappear pointer-events-none'
								}
                z-90 bg-bg-default h-fit fixed inset-0 top-16 md:hidden
                border-b-text-primary border
                 `}
				>
					<div
						className="
                    flex gap-5 flex-col
                    w-screen 
                    p-5
                    text-white"
					>
						<a className="mobile-menu-items" href="#inicio">
							Inicio
						</a>
						<a className="mobile-menu-items" href="#sobre">
							Sobre
						</a>
						<a className="mobile-menu-items" href="#serviços">
							Serviços
						</a>
						<a className="mobile-menu-items" href="#tecnologias">
							Tecnologias
						</a>
						<a className="mobile-menu-items" href="#formacoes">
							Formações
						</a>
						<a className="mobile-menu-items" href="#projetos">
							Projetos
						</a>
						<a className="mobile-menu-items" href="#contato">
							Contato
						</a>
					</div>
				</div>
			)}
		</>
	);
}
