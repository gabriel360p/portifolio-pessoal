import type { Project } from "../types/ProjectsType";
import { clima, topdog } from "../utils/ProjetosExport";
import { gerador } from "../utils/ProjetosExport";

export const projects: Project[] =
    [
        {
            id: "0",
            title: "TopDog",
            photo: topdog,
            description: "Sistema de gerenciamento de pedidos da HotDogueria TopDog ",
            demo: "",
            github: "https://github.com/gabriel360p/topdog-frontend",
            badge: "Javascript,TypeScript,Tailwind",
            duration: "2 meses",
            status: false,
            discriminator: 'project',
        },
        {
            id: "1",
            title: "Gerador de Senhas",
            photo: gerador,
            description: "Gerador de senhas seguras e aleatórias",
            demo: "https://gerador-de-senhas-seguras-react.vercel.app/",
            github: "https://github.com/gabriel360p/gerador-de-senhas.git",
            badge: "Javascript,Styled-Components",
            duration: "1 dia",
            status: true,
            discriminator: 'project',
        },
        {
            id: "2",
            title: "Clima Agora",
            photo: clima,
            description: "Veja as informações do clima agora mesmo",
            demo: "https://clima-agora-react.vercel.app/",
            github: "https://github.com/gabriel360p/clima-app-react.git",
            badge: "Javascript,Styled-Components",
            duration: "1 dia",
            status: true,
            discriminator: 'project',
        },

    ]