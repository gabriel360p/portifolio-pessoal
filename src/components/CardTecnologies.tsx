interface CardTecnolgiesProps {
    title: string;
    figure_path: string;
    link?: string;
    custom?: string;
}

export function CardTecnolgies({ title,link, figure_path, custom }: CardTecnolgiesProps) {
    return (
        <div className="
        hover:-translate-y-2

        flex flex-col items-center 
        min-w-[111px]
        bg-white
        gap-2 p-4 
        shadow rounded-xl text-center 
        ">
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={figure_path}
                    alt={`${title} + - icon`} className="
                    object-cover
                    w-12
                    "/>
                </a>
            </div>
            <h2 className="font-bold">{title}</h2>
        </div>
    )
}