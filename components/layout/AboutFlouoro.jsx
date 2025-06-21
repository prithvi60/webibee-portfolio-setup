"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutFlouoro = () => {
    const text =
        "Fluorokraft engineers zero-defect polymer components for mission-critical applications, delivering 30 years of proven reliability and breakthrough innovations that extend equipment lifecycles while eliminating operational risks for global OEMs.";
    const words = text.split(" ");
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [isInView, controls]);

    return (
        <section className="w-full h-full padding bg-primary">
            <motion.div
                ref={ref}
                initial="initial"
                animate={controls}
                className="mx-auto max-w-7xl text-center"
            >
                <h1
                    className={`text-[clamp(1.8rem,5vw,4.25rem)] leading-10 sm:leading-12 xl:leading-20 text-background`}
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "6px" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
            </motion.div>
        </section>
    );
};

export default AboutFlouoro;

const wordVariants = {
    initial: (i) => ({
        opacity: 0,
        y: 20,
        transition: {
            delay: i * 0.03, // Staggered fade-out (reverse order)
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }),
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08, // Staggered fade-in
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }),
};
