import React from "react";
import { SectionHeading2, SectionPara1 } from "./SectionComponents";
import { GetStartButton } from "../UI/Button";

const GetQuote = () => {
    return (
        <section className="w-full h-full padding flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="w-full md:w-2/5">
                <SectionHeading2
                    text={"Get Quote For Your Custom Requirement"}
                    color={"text-foreground"}
                />
            </div>
            <div className="w-full md:w-2/5">
                <SectionPara1
                    text={
                        "Reach out to explore pricing, timelines, and solutions built for your needs."
                    }
                    color={"text-foreground"}
                />
            </div>
            <GetStartButton href={"/contact"} text={"Contact us"} />
        </section>
    );
};

export default GetQuote;
