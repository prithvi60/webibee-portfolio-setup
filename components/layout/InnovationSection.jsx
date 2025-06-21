import React from "react";
import ListOfCategory from "./ListOfCategory";
import { innovationLists } from "@/utils/Data";
import Image from "next/image";

const InnovationSection = () => {
    return (
        <section className="w-full h-full padding flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between xl:gap-6 bg-secondary">
            <div className="w-full md:w-3/5">
                <ListOfCategory
                    title={"Innovation"}
                    desc={
                        "Co-engineering solutions that extend equipment lifecycles by 40% and reduce downtime costs by 70% through breakthrough polymer formulations."
                    }
                    data={innovationLists}
                    href={""}
                />
            </div>
            <div className="w-full md:w-2/5 md:pt-20">
                <div className="w-full h-80 md:h-96 xl:size-[450px] 2xl:size-[530px] relative clip-pathImg overflow-hidden group">
                    <Image
                        fill
                        src={"/innovation.jpg"}
                        alt={"innovation"}
                        title={"innovation"}
                        className="object-cover object-center group-hover:scale-110 transition-all duration-500"
                        sizes="(min-width: 1540px) 530px, (min-width: 1280px) 450px, (min-width: 1040px) calc(40vw - 32px), (min-width: 780px) calc(9.58vw + 278px), (min-width: 420px) calc(100vw - 24px), calc(82vw + 48px)"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default InnovationSection;
