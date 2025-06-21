import React from 'react'
import ListOfCategory from './ListOfCategory';
import { reliabilityLists } from '@/utils/Data';
import Image from 'next/image';

const ReliabilitySection = () => {
    return (
        <section className="w-full h-full padding flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between xl:gap-6 bg-[#EDEDED]">
            <div className="w-full md:w-3/5">
                <ListOfCategory
                    title={"Reliability"}
                    desc={
                        "98 on-time delivery with 100 customer retention and partnerships spanning over three decades built on predictable excellence."
                    }
                    data={reliabilityLists}
                    href={""}
                />
            </div>
            <div className="w-full md:w-2/5 md:pt-20">
                <div className="w-full h-80 md:h-96 xl:size-[450px] 2xl:size-[530px] relative clip-pathImg overflow-hidden group">
                    <Image
                        fill
                        src={"/reliability.png"}
                        alt={"Reliability"}
                        title={"Reliability"}
                        className="object-cover object-center group-hover:scale-110 transition-all duration-500"
                        loading='lazy'
                        sizes="(min-width: 1540px) 530px, (min-width: 1280px) 450px, (min-width: 1040px) calc(40vw - 32px), (min-width: 780px) calc(9.58vw + 278px), (min-width: 420px) calc(100vw - 24px), calc(82vw + 48px)"
                    />
                </div>
            </div>
        </section>
    );
}

export default ReliabilitySection