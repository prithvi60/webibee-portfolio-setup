import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";

export const navLinks = [
    { menu: "about", link: "/about" },
    { menu: "why fluoroKraft", link: "/why-fluoroKraft" },
    { menu: "products", link: "/products" },
    { menu: "materials", link: "/materials" },
    { menu: "contact us", link: "/contact" },
];

export const footerLinks = [
    { menu: "Home", href: "/" },
    { menu: "About", href: "/about" },
    { menu: "Why Fluorokraft", href: "/why-fluoroKraft" },
    { menu: "Products", href: "/products" },
    { menu: "Materials", href: "/materials" },
    { menu: "Contact Us", href: "/contact" },
    { menu: "Terms of use", href: "/terms" },
    { menu: "Privacy Policy", href: "/privacy-policy" },
    { menu: "Cookie Policy", href: "/cookie-policy" },
];

export const socialLinks = [
    {
        icon: (
            <FaFacebook className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaTwitter className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaInstagram className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaYoutube className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
];

export const categories = [
    {
        categoryName: "Products",
        img: "/product-card.png",
        href: "/products",
        desc: "Near-zero defects across millions of components with Green Channel Vendor status that that proves the trust placed by global OEMs on Fluorokraft",
    },
    {
        categoryName: "Materials",
        img: "/materials-card.jpg",
        href: "/materials",
        desc: "98% on-time delivery performance with 100% customer retention and partnerships spanning over three decades.",
    },
    {
        categoryName: "Process and Quality",
        img: "/PQ-card.jpg",
        href: "#innovation",
        desc: "Co-engineering solutions that extend equipment lifecycles by 40% and reduce downtime costs by 70% through custom polymer formulations.",
    },
];

export const qualityLists = [
    {
        title: "Proven Excellence",
        desc: "Advanced quality systems delivering ±0.05 mm precision with systematic in-process monitoring and laser-based verification across every component.",
    },
    {
        title: "Trusted Partnership",
        desc: "Green Channel Vendor authorization empowers us with full quality responsibility, enabling OEMs to eliminate incoming inspections and streamline operations.",
    },
    {
        title: "Mission-Critical Standards",
        desc: "Components engineered for chemical resistance, thermal stability up to 260°C, and ultra-low friction performance in aerospace, oil and gas, and valve, pump and cylinder applications.",
    },
];

export const reliabilityLists = [
    {
        title: "Predictable Performance",
        desc: "98% on-time delivery with standard 4-5 week schedules and emergency response capability for rush orders within 1-2 weeks.",
    },
    {
        title: "Enduring Relationships",
        desc: "100% customer retention with 90% of clients maintaining partnerships exceeding five years and many relationships spanning over three decades.",
    },
    {
        title: "Supply Chain Excellence",
        desc: "Stock-and-serve strategy with intelligent demand forecasting ensures uninterrupted production capabilities and rapid emergency response.",
    },
];

export const innovationLists = [
    {
        title: "Co-Engineering Results",
        desc: "Collaborative partnerships that extend conveyor system uptime by 40% and reduce downtime costs by 70% through custom material solutions.",
    },
    {
        title: "Technical Leadership",
        desc: "Three decades of polymer engineering expertise specializing in complex part development, reverse-engineering, and exotic material integration.",
    },
    {
        title: "Custom Solutions",
        desc: "Breakthrough formulations like custom Teflon blends that extend high-wear component lifecycles from weeks to months while reducing costs.",
    },
];
