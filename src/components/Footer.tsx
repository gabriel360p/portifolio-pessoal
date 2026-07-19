import { EnvelopeSimpleIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import logo from '../assets/logo/logo-cut-removebg.png'

export function Footer(){
    return(
        <footer className='
        flex flex-row flex-wrap 
        py-2 px-5 gap-4 w-screen
        items-start justify-center 
        md:justify-between md:px-6
        lg:px-12
        xl:px-18
        mb-4
        '>
            <div className=''>
                <img src={logo} alt="logo" className='
                object-cover 
                h-10
                w-auto
                ' />
            </div>
            <div className="flex flex-row gap-6 mt-4 ">
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
            <div>
                <p>
                    © 2026 Gabriel Costa. 
                </p>
                <p>
                    Todos os direitos reservados. 
                </p>
            </div>
        </footer>
    )
}