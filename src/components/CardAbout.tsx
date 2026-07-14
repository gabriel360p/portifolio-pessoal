import type { ReactNode } from "react";

interface CardAboutProps {
    title: string;
    icon: ReactNode;
    description: string;
    custom?: string;
}

export function CardAbout({custom, title, icon, description }: CardAboutProps) {
    return (
       
            <div className={`
                ${custom}
                border-[0.5px] 
                md:max-w-[280px]
                flex flex-col h-35 justify-center items-start 
                gap-3 rounded-2xl border-gray-400
                px-4`
            }>
                <div className="relative w-fit h-fit">..
                    <div className="absolute inset-0 bottom-4">{icon}</div>
                </div>
                <p className="font-extrabold">{title}</p>
                <p className="font-md text-gray-700">{description}</p>
            </div>
  
    )
}