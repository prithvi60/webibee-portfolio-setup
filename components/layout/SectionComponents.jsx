import React from "react";

export const SectionHeading1 = ({ text, color }) => {
    return (
        <h1
            className={`text-[clamp(1.8rem,5vw,4.25rem)] leading-10 sm:leading-12 xl:leading-20 ${color}`}
        >
            {text}
        </h1>
    );
};
export const SectionHeading2 = ({ text, color }) => {
    return (
        <h1
            className={`text-[clamp(1.5rem,5vw,2.25rem)] leading-10 sm:leading-12 xl:leading-14 ${color}`}
        >
            {text}
        </h1>
    );
};

export const SectionPara1 = ({ text, color, hero }) => {
    return (
        <p
            className={`${hero ? "text-sm md:text-base font-medium" : "text-base md:text-lg"} ${color ? color : "text-foreground"}`}
        >
            {text}
        </p>
    );
};
