import { NavBar } from "../components/Navbar"
import profile from '../assets/foto-profissional.png'

import { Button } from "../components/Button"
import { BriefcaseIcon, ClockIcon, EnvelopeSimpleIcon, GithubLogoIcon, GpsIcon, InstagramLogoIcon, LinkedinLogoIcon, StudentIcon } from "@phosphor-icons/react"
import { Tecnologies } from "../components/Tecnologies"
import { CardAbout } from "../components/CardAbout"
function App() {

  return (
    <>
      <NavBar />

      {/* HERO */}
      <div className="bg-bg-hero w-screen h-auto relative top-21">
        <div className="w-full h-full flex
          items-center
          justify-center
          gap-3
          flex-col-reverse
          md:flex-row
          md:justify-around
          pt-5
          lg:pb-10
        ">

          <div className="flex flex-col text-white gap-4 pb-4">
            <div className="
              text-center
              leading-7
              
              lg:text-start
            ">
              <p className="text-bg-indigo lg:text-3xl">Olá, eu sou</p>
              <p className="text-4xl lg:text-7xl font-bold">Gabriel <span className="text-bg-indigo">Costa</span></p>
              <p className="font-bold lg:text-2xl">Desenvolvedor Front-end</p>
              <p className="text-[15px] lg:text-xl">Desenvolvo interfaces modernas, responsivas e <br /> experiências digitais que fazem a diferença</p>
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
              <a href="https://github.com/gabriel360p" target="_blank">
                <GithubLogoIcon size={32} className="hero-icons-contact" />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-costa27/" target="_blank">
                <LinkedinLogoIcon size={32} className="hero-icons-contact" />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-costa27/" target="_blank">
                <InstagramLogoIcon size={32} className="hero-icons-contact" />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-costa27/" target="_blank">
                <EnvelopeSimpleIcon size={32} className="hero-icons-contact" />
              </a>
            </div>
          </div>

          <div>
            <img src={profile} alt="" className=" w-auto h-55 rounded-2xl object-cover object-center
            lg:h-80
            xl:h-100
            " />
          </div>


        </div>
      </div>
      {/* FIM DO HERO */}

      {/* SOBRE MIM */}
      <section className="grid relative mt-28 px-7
      grid-cols-1
      md:grid-cols-2
      ">

        <div className="flex 
        leading-7 flex-col items-start justify-center
        lg:gap-3
        ">
          <p className="
          text-bg-indigo font-bold
          lg:text-xl
          ">SOBRE MIM</p>
          <p className="font-extrabold
          lg:text-2xl
          ">Quem sou eu?</p>
          <p className=" text-justify
          text-gray-700
          lg:text-lg
          lg:leading-8
          ">
            Sou formado em TI pelo IFRN campus Caicó, tenho experiência no
            desenvolvimento web e sou apaixonado por transformar ideias em
            soluções digitais funcionais e bonitas. Busco sempre aprender,
            evoluir e criar projetos que impactam positivamente as pessoas.
          </p>
          <Button title="Mais sobre mim" variant="outline" personalize=" font-bold text-bg-indigo hover:text-white mt-3 lg:mt-0" />
        </div>

        <div className="mt-8 grid grid-cols-1 
          gap-2
          md:grid-flow-col md:auto-cols-max md:justify-center items-center 

          bg-red-400
        ">
          <div className="flex flex-col gap-2">
            <CardAbout title="Formação" description="Tec. em Informática p/ Web - IFRN" icon={<StudentIcon size={28} className="text-bg-indigo" />} />
            <CardAbout title="Experiência" description="Projetos acadêmicos e pessoais" icon={<BriefcaseIcon size={28} className="text-bg-indigo" />} />
          </div>
          <div className="flex flex-col gap-2">
            <CardAbout title="Localização" description="Caicó, RN - Brasil" icon={<GpsIcon size={28} className="text-bg-indigo" />} />
            <CardAbout title="Disponibilidade" description="Para novas oportunidades" icon={<ClockIcon size={28} className="text-bg-indigo" />} />
          </div>
        </div>

      </section>

    </ >
  )
}

export default App
