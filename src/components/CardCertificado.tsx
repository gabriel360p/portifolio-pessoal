interface CardCertificadosProps {
    title: string;
    duration: string;
    photo: string;
    school:string
    link?: string;
    custom?: string;
}

export function CardCertificado({ title,school,link, photo,duration, custom }: CardCertificadosProps) {

    return (
        <div className="
        hover:-translate-y-2

        flex flex-col items-center 
        w-75
        sm:w-49
        md:w-50
        bg-white
        gap-1 
        shadow rounded-xl p-0 
        ">
            <div>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={photo}
                    alt={`${title}-icon`} className="
                    w-fit
                    "/>
                </a>
            </div>
            <div className="flex flex-col justify-center items-center p-2 text-center w-full h-full ">

                <h2 className="font-bold">{title}</h2>
                <p>{school}</p>
                <p>{duration}</p>
            </div>
        </div>
    )
}
