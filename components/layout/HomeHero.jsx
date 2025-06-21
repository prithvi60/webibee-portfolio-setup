import React from "react";
import { SectionHeading1, SectionPara1 } from "./SectionComponents";
import Image from "next/image";
import { GetStartButton, UnderlineAnimation } from "../UI/Button";

const HomeHero = () => {
    return (
        <section className="w-full h-full bg-[#2C3E50]">
            <div className="w-full h-full padding space-y-4 md:space-y-8 pb-5 border-b-2 border-zinc-600">
                <div className="w-full md:w-3/5">
                    <SectionHeading1
                        text={"Engineering Precision Polymer Components"}
                        color={"text-background"}
                    />
                </div>
                <SectionPara1
                    text={
                        "Fluorokraft engineers mission-critical polymer components with zero-defect precision for the worlds most demanding applications, delivering measurable results that extend equipment lifecycles by 40% and reduce operational costs by 70% . Trusted by global OEMs for over  solutions that keep critical systems running from aerospace to deep-sea operations."
                    }
                    color={"text-background "}
                    hero
                />
            </div>
            <div className="w-full h-full p-5">
                <div className="relative w-full h-[80dvh] overflow-hidden clip-pathHero">
                    <Image src={"/hero-bg.jpg"} alt="fluorokraft product" title="fluorokraft product" fill className="object-cover object-center" priority loading="eager" sizes="calc(100vw - 40px)" />
                </div>
            </div>

        </section>
    );
};

export default HomeHero;
