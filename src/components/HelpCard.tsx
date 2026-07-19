import type { ReactNode } from 'react';

interface HelpCardProps {
	title: string;
	description: string;
	icon: ReactNode;
	custom?: string;
}

export function HelpCard({ custom, title, icon, description }: HelpCardProps) {
	return (
		<div
			className={`
                ${custom}
               	hover:-translate-y-1
				hover:shadow-text-primary/20 hover:shadow-sm 
 				active:shadow-text-primary/20 active:shadow-sm 
                border-[0.5px] 
                bg-bg-card
                w-full
                md:max-w-[280px]
                flex h-35 justify-center items-center
                gap-3 rounded-2xl border-[#0e1c16]
                px-4`}
		>
			<div className="flex justify-center items-center h-full w-15">
				<div>{icon}</div>
			</div>
			<div className="flex flex-col gap-2">
				<p className="font-extrabold text-white">{title}</p>
				<p className="font-md text-white">{description}</p>
			</div>
		</div>
	);
}
