import type { Project } from "../../types/ProjectsType";

interface ModalCeProjectProps {
    projeto: Project;
}
export function ModalProject({ projeto }: ModalCeProjectProps) {
    console.log(projeto)
    return (
        <div> 
            <h2 className="font-bold">Teste Projeto:{projeto.title}</h2>
        </div>
    )
}