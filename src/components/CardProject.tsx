import type { Project } from "../types/ProjectsType";
import { Badge } from "./Badge";

interface CardProjectsProps {
	project: Project
	custom?: string;
	onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export function CardProject({
	project,
	custom,
	onClick,
}: CardProjectsProps) {
	return (
		<div className={`
			${custom}
			hover:-translate-y-2
			active:-translate-y-2
			hover:shadow-text-primary/20 hover:shadow-sm 
			active:shadow-text-primary/20 active:shadow-sm 
			flex flex-col w-70 h-fit
			backdrop-blur-md
			bg-bg-card/10 border border-text-secundary rounded-xl
		`}
		>
			<div>
				{/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img onClick={onClick} src={project.photo} className="object-cover w-auto rounded-xl" alt={`foto do projeto ${project.title}`} />
			</div>
			<div className="flex flex-col gap-4 p-2 mt-2">
				<h2 className="font-bold">{project.title}</h2>
				<p className="text-wrap">{project.description}</p>
				<div className="flex flex-row flex-wrap">
					{
						//separando na própria array, usando o ',' como medidor
						project.badge?.split(',').map(badge => (
							<Badge key={badge} title={badge} />
						))
					}
				</div>
			</div>
			<div className="p-2">
				{project.status ? (
					<span className="mx-1 rounded px-1 py-0.5 text-black bg-green-600">Projeto finalizado</span>
				) : (
					<span className="mx-1 rounded px-1 py-0.5 text-black bg-amber-300">Projeto em andamento</span>
				)}
			</div>
			<div className="flex gap-4 p-2">
				<a className="button-normal" href={project.demo} target="_blank" rel="noopener">Demo</a>
				<a className="button-outline" href={project.github} target="_blank" rel="noopener">Github</a>
			</div>
		</div>
	);
}
