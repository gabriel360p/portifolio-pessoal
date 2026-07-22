import { ArrowUpIcon, EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import logo from '../assets/logo/logo-cut-removebg.png'
import { sendMessage } from '../utils/MandarMensagem'
import { messageBase } from '../utils/Messages'

export function Footer() {
    return (
        <footer className='
        flex flex-row flex-wrap 
        px-5 gap-4 w-full
        items-center justify-center 
        md:justify-between md:px-6
        lg:px-12
		backdrop-blur-xl
        xl:px-18
        h-fit
        py-3
        '>
            <div className=''>
                <a href="#inicio">
                    <img src={logo} alt="logo" className='
                    object-cover 
                    h-10
                    hover:scale-105
                    active:scale-105
                    w-auto
                    ' />
                </a>
            </div>
            <div className=''>
                <p>
                    © Gabriel Costa 2026
                </p>
            </div>
            <div className="flex flex-row gap-6">
                <a
                    href="https://github.com/gabriel360p"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GithubLogoIcon size={28} className="hero-icons-contact" />
                </a>
                <a
                    href="https://www.linkedin.com/in/gabriel-costa27/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedinLogoIcon size={28} className="hero-icons-contact" />
                </a>
                <button
                    type='button'
                    onClick={() => { sendMessage(messageBase) }}
                >
                    <WhatsappLogoIcon size={28} className="hero-icons-contact" />
                </button>
                <a
                    href="https://www.instagram.com/dev.gabriel.costa?igsh=cTN0dzcyY2JraWU1"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <InstagramLogoIcon size={28} className="hero-icons-contact" />
                </a>
                <a
                    href="mailto:seuemail@gmail.com?subject=Solicitação%20de%20Projeto%20Web&body=Olá%20Gabriel,%0D%0A%0D%0AConheci%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.%0D%0A%0D%0ADescrição%20do%20projeto:%20%0D%0A%0D%0APrazo:%20%0D%0AOrçamento%20estimado:%20"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <EnvelopeSimpleIcon size={28} className="hero-icons-contact" />
                </a>
                <a
                    className='hover:-translate-y-2 active:-translate-y-1'
                    href="#inicio"
                >
                    <ArrowUpIcon size={28} className="desktop-menu-items" />
                </a>
            </div>
        </footer>
    )
}