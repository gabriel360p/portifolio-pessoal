import { ArrowRightIcon, GithubLogoIcon, SpinnerIcon } from "@phosphor-icons/react";
import type { Project } from "../types/ProjectsType";
import { Badge } from "./Badge";
import { redirectHREF } from "../utils/RedirectHREF";
import { useState } from "react";

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
	const [loading, setLoading] = useState<boolean>(true);

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
			<div
				onClick={onClick}
				className={`
					${(loading) || (project.photo === undefined) ? `
						h-35
					`: ``}
				`}
			>
				{/** biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<img onLoad={() => setLoading(false)} src={project.photo} className="object-cover w-auto rounded-xl" />

				{(loading) || (project.photo === undefined) ? (
					<div className="flex w-full h-full items-center justify-center">
						<SpinnerIcon size={30} className="text-text-primary animate-spin" />
					</div>
				) : ""}
			</div>
			<div className="flex flex-col gap-4 p-2 mt-2">
				<h2 className="font-bold">{project.title}</h2>
				<p className="text-wrap">{project.description}</p>
				<div className="flex flex-row flex-wrap gap-y-2">
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
				<div className="
                    flex items-center gap-2  
                    justify-center button-normal
					w-fit
					cursor-pointer
					h-fit
                "
					onClick={() => { redirectHREF(project.github, true) }}
				>
					<GithubLogoIcon size={25} />
					<span>GitHub</span>
				</div>

				<div className="
                    flex items-center gap-2  
                    justify-center button-outline
					w-fit
					h-fit
					cursor-pointer
                "
					onClick={() => { redirectHREF(project.demo, true) }}
				>
					<span>Demo</span>
					<ArrowRightIcon size={25} />
				</div>



			</div>
		</div>
	);
}
