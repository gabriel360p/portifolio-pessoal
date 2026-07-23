
export interface Project {
    id: string;
    title: string;
    photo: string;
    photoCollection?: string[];
    description: string;
    demo?: string;
    github?: string;
    badge?: string;
    duration?: string;
    functions?: string[];
    desafios?: string;
    status: boolean;
    discriminator: string;
}