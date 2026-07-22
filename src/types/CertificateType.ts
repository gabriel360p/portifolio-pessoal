
export interface Certificate {
    id: string;
    title: string;
    school?: string;
    photo: string;
    photoCollection?: string[];
    skills?: string;
    description: string;
    duration?: string;
    status: boolean;
    discriminator: string;
}