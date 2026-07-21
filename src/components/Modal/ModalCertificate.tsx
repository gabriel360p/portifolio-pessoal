import type { Certificate } from "../../types/CertificateType"

interface ModalCertificateProps {
    certificate: Certificate;
}
export function ModalCertificate({ certificate }: ModalCertificateProps) {
    return (
        <div>
            <h2 className="font-bold">Teste Certificado:{certificate.title}</h2> 
        </div>
    )
}