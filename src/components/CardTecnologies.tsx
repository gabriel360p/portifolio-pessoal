interface CardTecnolgiesProps {
	title: string;
	figure_path: string;
	link?: string;
	custom?: string;
}

export function CardTecnolgies({
	title,
	link,
	figure_path,
	custom,
}: CardTecnolgiesProps) {
	return (
		<div
			className="
        hover:-translate-y-2
        active:-translate-y-2
 		hover:shadow-text-primary/20 hover:shadow-sm 
 		active:shadow-text-primary/20 active:shadow-sm 
        flex flex-col items-center 
        min-w-[111px]
        bg-bg-card
        border border-text-secundary
        gap-2 p-4 
        shadow rounded-xl text-center 
        "
		>
			<div>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img
						src={figure_path}
						alt={`${title} + - icon`}
						className="
                    object-cover
                    w-12
                    "
					/>
				</a>
			</div>
			<h2 className="font-bold text-white">{title}</h2>
		</div>
	);
}
