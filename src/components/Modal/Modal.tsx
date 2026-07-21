import type { Certificate } from "../../types/CertificateType"
import type { Project } from "../../types/ProjectsType"
import { ModalCertificate } from "./ModalCertificate"
import { ModalProject } from "./ModalProject"

interface ModalProps {
    data: Project | Certificate
}
export function Modal({ data }: ModalProps) {

    switch (data.discriminator) {

        case "certificate":
            return (
                <ModalCertificate certificate={data} />
            )

        case "project":
            return (
                <ModalProject projeto={data} />
            )
    
        default:
            console.error("Falha na renderização do modal, tipo de modal não reconhecido")
            break;
    }
}