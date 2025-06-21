import Image from "next/image";
import React from "react";
import { SectionPara1 } from "./SectionComponents";
import Link from "next/link";
import { categories } from "@/utils/Data";

const CategoryCard = () => {
    return (
        <section className="w-full h-full padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#EDEDED]">
            {categories.map((list, idx) => (
                <div key={idx} className="sm:last:col-span-2 last:lg:col-auto">
                    <Link href={list.href} className="space-y-2 md:space-y-4 group shadow">
                        <div className="w-full h-96 md:h-[450px] 2xl:h-[530px] relative clip-pathImg overflow-hidden">
                            <Image
                                fill
                                src={list.img}
                                alt={list.categoryName}
                                title={list.categoryName}
                                className="object-cover object-center group-hover:scale-110 transition-all duration-500"
                                loading="lazy"
                                sizes="(min-width: 1860px) calc(33.33vw - 37px), (min-width: 1540px) calc(15.33vw + 294px), (min-width: 780px) 430px, (min-width: 640px) 384px, (min-width: 440px) calc(100vw - 24px), calc(10vw + 354px)"
                            />
                            <span
                                className={`capitalize absolute bottom-2 left-3 text-2xl md:text-[40px] ${list.categoryName === "Products" ? "text-white" : ""} `}
                            >
                                {list.categoryName}
                            </span>
                        </div>
                        <SectionPara1 text={list.desc} />
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default CategoryCard;
