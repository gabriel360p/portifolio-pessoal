
import { CodeIcon, FileIcon, MedalIcon } from "@phosphor-icons/react";
import type { Certificate } from "../../types/CertificateType"
import { Carrousel } from "../Carrousel";
import { Badge } from "../Badge";

interface ModalCertificateProps {
    certificate: Certificate;
}
export function ModalCertificate({ certificate }: ModalCertificateProps) {
    return (
        <div className="flex flex-col gap-8 pb-4">

            {/* Header do Modal */}
            <div className="flex gap-3 flex-row w-full items-center justify-start">
                <div>
                    {<MedalIcon size={38} className="active:scale-110 hover:scale-110 text-text-primary" />}
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
                    <Carrousel photosCollection={certificate.photoCollection} />
                </div>

                <div className="flex gap-2 mt-4 text-text-primary justify-start items-center">
                    <FileIcon className="active:scale-110 hover:scale-110 text-text-primary" size={20} />
                    <p>Sobre o certificado</p>
                </div>

                <h3 className="text-white mt-1">{certificate.description}</h3>

                <div className="flex flex-col gap-2 mt-4 text-text-primary justify-center items-start">

                    <div className="flex items-center gap-2">
                        <CodeIcon className="active:scale-110 hover:scale-110 text-text-primary" size={20} />
                        <h3>Competências desenvolvidas</h3>
                    </div>

                    <div className="flex flex-row flex-wrap gap-y-2">
                        {
                            //separando na própria array, usando o ',' como medidor
                            certificate.skills?.split(',').map(skil => (
                                <Badge key={skil} title={skil} />
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}