import React from "react";
import ListOfCategory from "./ListOfCategory";
import { qualityLists } from "@/utils/Data";

const QualitySection = () => {
    return (
        <section className="w-full h-full padding flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between xl:gap-6 bg-[#EDEDED]">
            <div className="w-full md:w-3/5">
                <ListOfCategory
                    title={"Quality"}
                    desc={
                        "Near-zero defects across millions of components with Green Channel Vendor status that proves the trust placed by global OEMs on Fluorokraft"
                    }
                    data={qualityLists}
                    href={""}
                />
            </div>
            <div className="w-full md:w-2/5 pt-20 text-center md:text-start">
                <ul className="space-y-14 mx-auto max-w-96">
                    {data.map((list, idx) => (
                        <li className="space-y-1" key={idx}>
                            <h4 className="text-4xl md:text-6xl font-bold tracking-wider">
                                {list.count}
                            </h4>
                            <p className="text-base font-normal tracking-wide">{list.para}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default QualitySection;

const data = [
    {
        count: "0",
        para: "Near Zero Defects Across Millions of Components Supplied",
    },
    { count: "98%", para: "On-time Delivery" },
    { count: "100%", para: "Customer Retention" },
];
