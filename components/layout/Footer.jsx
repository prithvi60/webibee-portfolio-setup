import Link from "next/link";
import {
    footerLinks,
    footerLinks1,
    footerLinks2,
    socialLinks,
} from "@/utils/Data";
import Image from "next/image";
import ScrollToTopButton from "../features/ScrollToTopButton";

const Footer = () => {
    return (
        <footer
            className={`padding relative space-y-6 md:space-y-10 w-full bg-primary text-white`}
        >
            <div className="flex flex-col justify-center md:items-start md:flex-row md:justify-between gap-6 md:gap-8 w-full px-6 md:px-0">
                <div className="block space-y-5 md:space-y-6 xl:w-2/5">
                    <Link title="logo" href={"/"} className="flex items-center gap-2">
                        <Image
                            title={"logo"}
                            src={"/fluorokraft-min-logo.svg"}
                            alt="webibee logo"
                            width={100}
                            height={100}
                            className="object-contain object-center size-28"
                        />
                    </Link>
                    <p className="font-medium capitalize tracking-wide leading-6 text-[14px] w-full md:w-3/5">
                        Engineering Precision Polymer Components for Demanding Applications
                    </p>
                    <ul className="flex items-center gap-2.5">
                        {socialLinks.map((list, idx) => (
                            <li key={idx} className="flex-shrink-0">
                                <Link title="footer social icons" href={list.href}>
                                    {list.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:flex md:items-start md:justify-between md:flex-row gap-x-0 gap-y-10 md:gap-12 xl:w-3/5">
                    <div className="block space-y-3">
                        <h4 className="font-medium capitalize tracking-wider text-[20px]">
                            Contact
                        </h4>
                        <div className="space-y-1">
                            <h4 className="font-medium capitalize tracking-wider text-[20px]">
                                Email
                            </h4>
                            <h5 className="font-medium capitalize tracking-wider text-[14px]">
                                info@fluorokraft.com
                            </h5>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-medium capitalize tracking-wider text-[20px]">
                                Phone
                            </h4>
                            <h5 className="font-medium capitalize tracking-wider text-[14px]">
                                +91 44 2454 1067
                            </h5>
                        </div>
                    </div>
                    <div className="block space-y-3">
                        <h4 className="font-medium capitalize tracking-wider text-[20px]">
                            Quick Links
                        </h4>
                        <ul className="block space-y-2.5 md:space-y-4">
                            {footerLinks.slice(0, 6).map((list, idx) => (
                                <li
                                    key={idx}
                                    className={`text-sm underline underline-offset-4 capitalize md:text-base tracking-wide font-medium`}
                                >
                                    <Link title={list.menu} href={list.href}>
                                        {list.menu}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="block space-y-3">
                        <h4 className="font-medium capitalize tracking-wider text-[20px]">
                            Legal
                        </h4>
                        <ul className="block space-y-2.5 md:space-y-4">
                            {footerLinks.slice(7, footerLinks.length).map((list, idx) => (
                                <li
                                    key={idx}
                                    className={`text-sm underline underline-offset-4 capitalize md:text-base tracking-wide font-medium`}
                                >
                                    <Link title={list.menu} href={list.href}>
                                        {list.menu}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={`flex flex-col-reverse justify-center md:items-center lg:flex-row lg:justify-between gap-4 md:gap-8 font-medium px-6 md:px-0 pt-10 md:pt-2`}
            >
                <h4 className="uppercase font-roboto font-bold tracking-wide text-xl md:text-4xl">
                    FLUOROKRAFT
                </h4>
                <p className="capitalize underline underline-offset-4 font-medium lg:text-start text-base md:text-[20px]">
                    ©Copyright {new Date().getFullYear()}{" "}
                    {/* <span className="text-text font-semibold">business portfolio</span> . */}
                    Fluorokraft
                </p>
                <ScrollToTopButton />
                {/* <p className="font-medium underline underline-offset-4 tracking-wide text-base md:text-[20px]">
                    Back to top
                </p> */}
            </div>
        </footer>
    );
};

export default Footer;
