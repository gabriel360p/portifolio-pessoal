import { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
    children: React.ReactNode;
    className?: string;
}

export function FadeInSection({ children, className }: FadeInSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    })
    return (
        <div
            ref={ref}
            className={`
    flex items-center justify-center flex-col
    w-full
    overflow-x-hidden
    transition-all
    duration-700
    ease-out
    ${visible
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-25 pointer-events-none'
                }
    ${className ?? ''}
  `}>
            {children}
        </div>
    );
}