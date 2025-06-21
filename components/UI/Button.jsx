"use client";
import Link from "next/link";

export const GetStartButton = ({ text, href }) => {
    return (
        <button
            role="button"
            type="button"
            title={text}
            className="before:absolute z-10 before:content-[''] w-max before:-z-10 relative before:top-0 before:left-1/2 before:-translate-x-1/2 before:bg-success clip-pathHero2 before:w-full before:h-12 before:py-3 hover:before:w-[125%] cursor-pointer before:transition-[width] before:duration-300 h-12 px-6"
        >
            <Link
                aria-label={`${text} page`}
                title={`${text} page`}
                href={href}
                className="font-semibold capitalize text-white text-sm md:text-base"
            >
                {text}
            </Link>
        </button>
    );
};

export const UnderlineAnimation = ({ text, href }) => {
    return (
        <Link
            href={href}
            className="relative w-fit inline-block pb-0.5 overflow-hidden group capitalize text-base md:text-lg font-medium"
        >
            {text}
            <div
                className="absolute bottom-0 left-0 w-[250%] h-0.5 bg-foreground transition-transform duration-400 ease-in -translate-x-[60%] group-hover:translate-x-0 clip-path-cut"
            ></div>
        </Link>
    );
};
