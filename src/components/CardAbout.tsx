import type { ReactNode } from 'react';

interface CardAboutProps {
	title: string;
	icon: ReactNode;
	description: string;
	custom?: string;
}

export function CardAbout({
	custom,
	title,
	icon,
	description,
}: CardAboutProps) {
	return (
		<div
			className={`
                ${custom}
				backdrop-blur-md
				bg-bg-card/30
				hover:shadow-text-primary/20 hover:shadow-sm 
 				active:shadow-text-primary/20 active:shadow-sm 
				hover:-translate-y-1
                border-[0.5px] 
                md:max-w-[280px]
                flex flex-col h-35 justify-center items-start 
                gap-3 rounded-2xl border-[#0e1c16]
                px-4`}
		>
			<div className="relative w-fit h-fit">
				<span className='opacity-0'>.</span>
				<div className="absolute inset-0 bottom-4">{icon}</div>
			</div>
			<p className="font-extrabold text-white">{title}</p>
			<p className="font-md text-white">{description}</p>
		</div>
	);
}
