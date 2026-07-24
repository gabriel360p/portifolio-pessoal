export { default as topdog } from '../assets/projetos/topdog/topdog.png'
export { default as gerador } from '../assets/projetos/gerador-senhas.png'
export { default as clima } from '../assets/projetos/clima.png'
export { default as cep } from '../assets/projetos/busca-cep.png'
export { default as pesquisarPerfilGithub } from '../assets/projetos/perfil-github.png'


export const photosTopDog: string[] = Object.values(import.meta.glob(
    '../assets/projetos/topdog/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosPesquisarPerfilGithub: string[] = Object.values(import.meta.glob(
    '../assets/projetos/perfil-github.png',
    {
        eager: true,
        import: 'default',
    }
))

export const photosCep: string[] = Object.values(import.meta.glob(
    '../assets/projetos/busca-cep.png',
    {
        eager: true,
        import: 'default',
    }
))

export const photosClima: string[] = Object.values(import.meta.glob(
    '../assets/projetos/clima.png',
    {
        eager: true,
        import: 'default',
    }
))

export const photosGerador: string[] = Object.values(import.meta.glob(
    '../assets/projetos/gerador-senhas.png',
    {
        eager: true,
        import: 'default',
    }
))

export const photosConsultorioOdonto: string[] = Object.values(import.meta.glob(
    '../assets/projetos/odonto-sorriso/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosBelezza: string[] = Object.values(import.meta.glob(
    '../assets/projetos/clinica-belezza/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosAutocenter: string[] = Object.values(import.meta.glob(
    '../assets/projetos/autocenter/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosClinicaNutricao: string[] = Object.values(import.meta.glob(
    '../assets/projetos/clinica-nutricao/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosEliteFitness: string[] = Object.values(import.meta.glob(
    '../assets/projetos/elite-fitness/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosAdvogado: string[] = Object.values(import.meta.glob(
    '../assets/projetos/escritorio-advocacia/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosPatinhas: string[] = Object.values(import.meta.glob(
    '../assets/projetos/patinhas/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

export const photosHair: string[] = Object.values(import.meta.glob(
    '../assets/projetos/sutdio-hair/*.{png,jpg,jpeg,webp}',
    {
        eager: true,
        import: 'default',
    }
))

