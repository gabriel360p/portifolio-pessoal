import { ArrowRightIcon, ArticleIcon, CheckCircleIcon, CodeIcon, GearSixIcon, GithubLogoIcon, StackIcon, StarIcon } from "@phosphor-icons/react";
import type { Project } from "../../types/ProjectsType";
import { Badge } from "../Badge";
import { Carrousel } from "../Carrousel";
import { LightningIcon } from "@phosphor-icons/react/dist/ssr";

interface ModalCeProjectProps {
    projeto: Project;
}
export function ModalProject({ projeto }: ModalCeProjectProps) {
    console.log(projeto)
    return (
        <div className="flex flex-col gap-8 pb-4">

            {/* Header do Modal */}
            <div className="flex gap-3 flex-row w-full items-center justify-start">
                <div>
                    {<CodeIcon size={30} className="active:scale-110 hover:scale-110 text-text-primary" />}
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold md:text-xl">{projeto.title}</h2>
                </div>
            </div>

            {/* Body do Modal */}
            <div className="
                flex flex-col
                gap-3
                ">
                <div>
                    <Carrousel photosCollection={projeto.photoCollection} />
                </div>
                <div className="
                    flex flex-col
                    gap-y-4 
                    md:gap-x-15 md:flex-row md:justify-center
                ">

                    <div className="flex flex-col gap-4 md:w-fit ">

                        <div className="flex flex-col gap-1">
                            {/* Sobre o projeto */}
                            <div className="flex text-text-primary gap-2 items-center justify-start ">
                                <ArticleIcon className="hover:scale-105 active:scale-105" size={20} />
                                <h2>Sobre o projeto</h2>
                            </div>
                            <p>{projeto.description}</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {/* Status do projeto */}
                            <div className="flex text-text-primary gap-2 items-center justify-start ">
                                <GearSixIcon className="hover:scale-105 active:scale-105" size={20} />
                                <h2>Status do projeto</h2>
                            </div>

                            <div>
                                {projeto.status ? (
                                    <span className="mx-1 rounded px-1 py-0.5 text-black bg-green-600">Projeto finalizado</span>
                                ) : (
                                    <span className="mx-1 rounded px-1 py-0.5 text-black bg-amber-300">Projeto em andamento</span>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            {/* Tecnologias */}
                            <div className="flex text-text-primary gap-2 items-center justify-start ">
                                <StackIcon size={20} className="hover:scale-105 active:scale-105" />
                                <h2>Tecnologias Utilizadas</h2>
                            </div>
                            <div className="flex flex-row flex-wrap">
                                {
                                    //separando na própria array, usando o ',' como medidor
                                    projeto.badge?.split(',').map(badge => (
                                        <Badge key={badge} title={badge} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 max-w-[35ch] ">
                        {/* Principais funcionalidades */}
                        <div className="flex flex-col gap-1">
                            <div className="text-text-primary flex gap-2 items-center justify-start">
                                <StarIcon size={20} className="hover:scale-105 active:scale-105" />
                                <h2 >Principais funcionalidades</h2>
                            </div>

                            <div className="flex flex-col items-start justify-center pl-1.5">
                                {
                                    projeto.functions?.map(func => (
                                        <div className="flex items-center gap-2 justify-start">
                                            <CheckCircleIcon size={18} className="text-text-primary" />
                                            <p className="wrap-break-word">{func}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col">
                            {/* Desafios */}
                            <div className="flex items-center gap-2 justify-start text-text-primary">
                                <LightningIcon size={20} className="hover:scale-105 active:scale-105" />
                                <h2>Desafios enfrentados</h2>
                            </div>
                            <p>{projeto.desafios}</p>
                        </div>
                    </div>

                </div>




            </div>

            <div className="flex gap-4 flex-col justify-center items-center
            md:flex-row 
            ">

                <div className="
                    flex items-center gap-2  
                    justify-center button-normal
                    w-full
                    md:w-fit
                ">
                    <GithubLogoIcon size={25} />
                    <a href={`${projeto.github}`} className="">Repositório GitHub</a>
                </div>

                <div className="
                    flex items-center gap-2  
                    justify-center button-outline
                    w-full
                    md:w-fit
                ">
                    <a href={`${projeto.demo}`} className="">Demonstração</a>
                    <ArrowRightIcon size={25} />
                </div>

            </div>

        </div>
    )
}