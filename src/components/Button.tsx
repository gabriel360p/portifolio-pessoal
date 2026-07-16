import type { ReactNode } from "react";

interface ButtonProps {
    title: string;
    variant?: string;
    fullWidth?: boolean;
    personalize?: string
    icon?: ReactNode;
    onclick:React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ title, onclick, variant, fullWidth, personalize, icon }: ButtonProps) {
    return (
        <button 
            onClick={onclick}
            className={`
            button-${variant}
            ${fullWidth ? 'w-full' : 'size-fit'}
            ${personalize}
            `}
            >
                {title}
            </button>
    )
}