import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

export function Tecnologies() {
    const controls = useAnimationControls();
    const techs = [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind",
        "Git",
        "Github",
    ];
    useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                duration: 15,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, []);

    return (
        <div className="overflow-hidden py-4">
            <motion.div
                className="flex w-max gap-4"
                animate={controls}
                onHoverStart={() => controls.stop()}
                onHoverEnd={() =>
                    controls.start({
                        x: ["0%", "-50%"],
                        transition: {
                            duration: 15,
                            ease: "linear",
                            repeat: Infinity,
                        },
                    })
                }
            >
                {[...techs, ...techs].map((tech, index) => (
                    <div
                        key={index}
                        className="rounded-xl border px-6 py-3 whitespace-nowrap"
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}