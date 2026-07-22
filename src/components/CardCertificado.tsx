import type { MouseEventHandler } from "react";
import type { Certificate } from "../types/CertificateType";

interface CardCertificadosProps {
	certificado: Certificate
	custom?: string;
	onClick?: MouseEventHandler<HTMLImageElement>;
}

export function CardCertificado({
	certificado,
	custom,
	onClick,
}: CardCertificadosProps) {
	return (
		<div
			className=
			{`
		${custom}
		hover:-translate-y-2
        active:-translate-y-2
 		hover:shadow-text-primary/20 hover:shadow-sm 
 		active:shadow-text-primary/20 active:shadow-sm 
        flex flex-col items-center 
        w-65
        sm:w-49
        md:w-50
        bg-bg-card/10
		backdrop-blur-md
        border border-text-secundary
        gap-1 
        rounded-xl p-0 
        `}
		>
			<div>
				<img
					onClick={onClick}
					src={certificado.photo}
					alt={`${certificado.title}-icon`}
					className="
                   		 w-fit rounded-xl
                    "
				/>
			</div>
			<div className="flex text-white flex-col justify-center items-center p-2 text-center w-full h-full ">
				<h2 className="font-bold">{certificado.title}</h2>
				<p>{certificado.school}</p>
				<p>{certificado.duration}</p>
			</div>
		</div>
	);
}
