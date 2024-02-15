import { create } from "zustand";

import surfacePro from "../../assets/Content-Card-Test-Surface-Pro-9-Contextual-Lifestyle-01.webp";
import surfaceLaptop from "../../assets/Content-Card-Surface-Laptop-Studio-2-CONS-M001.webp";
import microsoftIcon from "../../assets/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss.avif";
import xboxImage from "../../assets/Content-Card-Xbox-Series-S-1TB-Black-Merch-01.avif";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ReactNode } from "react";

type MainLinks = {
	link: string;
	name: string;
};

export type CardDetails = {
	cardImage: string;
	cardTitle: string;
	cardText: string;
	cardLinkText1: string;
	cardBadge?: ReactNode;
	cardLinkText2?: string;
	icon?: ReactNode;
};

interface Links {
	mainLinks: MainLinks[];
	cardDetails: CardDetails[];
}
const useHomeParams = create<Links>(() => ({
	mainLinks: [
		{ name: "Microsoft 365", link: "/microsoft-365" },
		{ name: "Teams", link: "/teams" },
		{ name: "Copilot", link: "/copilot" },
		{ name: "Windows", link: "/windows" },
		{ name: "Surface", link: "/surface" },
		{ name: "Xbox", link: "/xbox" },
		{ name: "Deals", link: "/deals" },
		{ name: "Small Business", link: "/business" },
		{ name: "Support", link: "/support" },
	],
	cardDetails: [
		{
			cardImage: surfacePro,
			cardTitle: "Surface Pro 9",
			cardText: "Tablet versatility and laptop power — all in one ultra-portable device.",
			cardLinkText1: "Shop Surface Pro 9",
		},
		{
			cardImage: surfaceLaptop,
			cardTitle: "Save up to $500 on Surface Laptop Studio 2",
			cardText:
				"Cutting-edge design meets incredible performance in this versatile laptop perfect for everything from creativity to entertainment. Select devices on sale now. Offer ends 2/11.",
			cardLinkText1: "Shop Surface Laptop Studio 2",
			cardBadge: <p className="card-badge">New</p>,
		},
		{
			cardImage: microsoftIcon,
			cardTitle: "Maximize the everyday with Microsoft 365",
			cardText: "Get online protection, secure cloud storage, and innovative apps designed to fit your needs—all in one plan.",
			cardLinkText1: "For 1 person",
			cardLinkText2: "For up to 6 people",
			icon: <MdKeyboardArrowRight size={25} className="icon" />,
		},
		{
			cardImage: xboxImage,
			cardTitle: "Power your dreams",
			cardText: "Introducing Xbox Series S in Carbon Black, now with a 1 TB SSD. Experience next-gen speed and performance.",
			cardLinkText1: "Shop now",
		},
	],
}));

export default useHomeParams;
