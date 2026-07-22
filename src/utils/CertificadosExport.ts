export { default as dgrid } from '../assets/certificados/Certificado - CSS - Display GRID.png';
export { default as cssInter } from '../assets/certificados/Certificado - CSS Intermediário.png';
export { default as pEngi } from '../assets/certificados/Certificado - Formação em Engenharia de Prompt.png';
export { default as certGit } from '../assets/certificados/Certificado - Git & GitHub.png';
export { default as certHt } from '../assets/certificados/Certificado - HTML - Front End Club.png';
export { default as jsV } from '../assets/certificados/Certificado - JavaScript pt. V - A Nova Ordem de Dados.png';
export { default as jsVI } from '../assets/certificados/Certificado - JavaScript pt. VI - A Ascensão do Async_Await.png';
export { default as jsNode } from '../assets/certificados/Certificado - Node.png';
export { default as reactBonus } from '../assets/certificados/Certificado - React pt.3- Bônus - DevClub Full Stack.png';
export { default as bills } from '../assets/certificados/Certificado - TypeScript - Backend - Devbills.png';
export { default as fullStack } from '../assets/certificados/devclub/fullstack-frente.png';
export { default as ifrn } from '../assets/certificados/ifrn/ifrn-frente.png'
export { default as zero } from '../assets/certificados/certificado-inicial.png';


export const photosFullStack: string[] = Object.values(import.meta.glob(
    '../assets/certificados/devclub/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosIFRN: string[] = Object.values(import.meta.glob(
    '../assets/certificados/ifrn/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))