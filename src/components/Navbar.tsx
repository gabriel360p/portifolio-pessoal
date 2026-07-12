
import logo from '../assets/dev-frontend-logo1.png'
import { useState } from 'react'
import { ListIcon } from '@phosphor-icons/react'
export function NavBar() {
    const [navMenu, setNavMenu] = useState<boolean>(false)

    function handleMenuState(): void {
        setNavMenu(!navMenu)
        console.log(navMenu)
    }

    return (
        <header className={`
        fixed
        z-100
        w-screen bg-bg-hero 
        min-h-20
        py-3
        px-5
        lg:px-15
        `}>
            <nav className="flex items-center justify-between w-full h-full">
                <img src={logo} className='object-cover 
                h-15
                
                w-auto' />

                <div className='hidden 
                md:flex
                '>
                    <div className='
                    flex gap-9
                    text-xl
                    font-semibold
                    text-white'>
                        <a href='#inicio' className="desktop-menu-items">Inicio</a>
                        <a href='#sobre' className="desktop-menu-items">Sobre</a>
                        <a href='#projetos' className="desktop-menu-items">Projetos</a>
                        <a href='#tecnologias' className="desktop-menu-items">Tecnologias</a>
                        <a href='#contato' className="desktop-menu-items">Contato</a>
                    </div>
                </div>
                <div className='
                md:hidden
                '>
                    <ListIcon className='text-white cursor-pointer' size={30} onClick={() => { handleMenuState() }} />
                </div>
            </nav>
            {navMenu && (
                <div className='w-full md:hidden '>
                    <div className='
                    py-4
                    flex gap-5
                    flex-col
                    text-white'>
                        <a className='mobile-menu-items' href="">Inicio</a>
                        <a className='mobile-menu-items' href="">Sobre</a>
                        <a className='mobile-menu-items' href="">Projeto</a>
                        <a className='mobile-menu-items' href="">Tecnologias</a>
                        <a className='mobile-menu-items' href="">Contato</a>
                    </div>
                </div>
            )}

        </header>
    )
}