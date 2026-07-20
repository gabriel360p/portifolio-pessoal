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
                    href="mailto:seuemail@gmail.com?subject=Contato%20via%20Portfólio"
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