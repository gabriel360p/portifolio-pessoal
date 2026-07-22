
import { CodeIcon, DownloadIcon, FileIcon, MedalIcon } from "@phosphor-icons/react";
import type { Certificate } from "../../types/CertificateType"

interface ModalCertificateProps {
    certificate: Certificate;
}
export function ModalCertificate({ certificate }: ModalCertificateProps) {
    return (
        <div className="flex flex-col gap-8">

            {/* Header do Modal */}
            <div className="flex gap-3 flex-row w-full items-center justify-start">
                <div>
                    {<MedalIcon size={38} className="active:scale-110 hover:scale-110 text-text-primary"/>}
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold">{certificate.title}</h2> 
                    <p className="text-text-primary">{certificate.school}</p>
                </div>
            </div>

            {/* Body do Modal */}
            <div className="flex flex-col">
                <div>
                    {/* carrousel */}
                </div>
                    
                <div className="flex gap-2 mt-4 text-text-primary justify-start items-center">
                    <FileIcon/>
                    <p>Sobre o certificado</p>
                </div>

                <p className="text-white mt-1">{certificate.description}</p> 

                <div className="flex gap-2 mt-4 text-text-primary justify-start items-center">
                    <CodeIcon/>
                    <p>Competências desenvolvidas</p>
                </div>

            </div>

            <div className="flex w-full justify-center items-center">
                {/* footer do carrousel */}
                {/** biome-ignore lint/a11y/useAnchorContent: <explanation> */}
                <a className="flex flex-row gap-3 justify-center items-center button-outline w-full md:max-w-[80%]" href="/" aria-disabled>
                    <DownloadIcon className="text-text-primary" size={20}/>
                    Baixar Certificado
                </a>
            </div>

        </div>
    )
}