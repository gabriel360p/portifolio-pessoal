interface CardCertificadosProps {
	title: string;
	duration: string;
	photo: string;
	school: string;
	link?: string;
	custom?: string;
}

export function CardCertificado({
	title,
	school,
	link,
	photo,
	duration,
	custom,
}: CardCertificadosProps) {
	return (
		<div
			className="
        hover:-translate-y-2
        active:-translate-y-2
 		hover:shadow-text-primary/20 hover:shadow-sm 
 		active:shadow-text-primary/20 active:shadow-sm 
        flex flex-col items-center 
        w-65
        sm:w-49
        md:w-50
        bg-bg-card
        border border-text-secundary
        gap-1 
        rounded-xl p-0 
        "
		>
			<div>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img
						src={photo}
						alt={`${title}-icon`}
						className="
                    w-fit
                    "
					/>
				</a>
			</div>
			<div className="flex text-white flex-col justify-center items-center p-2 text-center w-full h-full ">
				<h2 className="font-bold">{title}</h2>
				<p>{school}</p>
				<p>{duration}</p>
			</div>
		</div>
	);
}
