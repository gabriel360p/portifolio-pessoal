interface BadgeProps {
    title:string;
}

export function Badge({
    title
}: BadgeProps) {
    return (
        <span className="mx-1 rounded px-1 py-0.5 text-black bg-text-primary">
           {title}
        </span>
    );
}
