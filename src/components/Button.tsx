import type { ReactNode } from "react";

interface ButtonProps {
    title: string;
    variant?: string;
    fullWidth?: boolean;
    personalize?: string
    icon?: ReactNode;
}

export function Button({ title, variant, fullWidth, personalize, icon }: ButtonProps) {
    return (
        <>
            <button className={`
            button-${variant}
            ${fullWidth ? 'w-full' : 'size-fit'}
            ${personalize}
            `}
            >
                {title}
            </button>
        </>
    )
}