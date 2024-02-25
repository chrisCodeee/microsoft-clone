import { create } from "zustand";

import surfacePro from "../../assets/Content-Card-Test-Surface-Pro-9-Contextual-Lifestyle-01.webp";
import surfaceLaptop from "../../assets/Content-Card-Surface-Laptop-Studio-2-CONS-M001.webp";
import surfaceLaptop_2 from "../../assets/Content-Card-Surface-Laptop-5-LIfestyle-M2.webp";
import copilotImage from "../../assets/Content-Card-Copilot-Commercial.avif";
import microsoftTeamImage from "../../assets/gldn-CP-Microsoft-Teams-Commercial.webp";
import azureImage from "../../assets/Content-Card-Azure-AI-Bloom.avif";
import microsoftIcon from "../../assets/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss.avif";
import xboxImage from "../../assets/Content-Card-Xbox-Series-S-1TB-Black-Merch-01.avif";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ReactNode } from "react";

export type MainLinks = {
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
export type AccordionLink = {
	heading: string;
	links?: MainLinks[];
};

interface Links {
	mainLinks: MainLinks[];
	cardDetails: CardDetails[];
	cardDetails_2: CardDetails[];
	state: boolean;
	mobileON: () => void;
	accordionLinks: AccordionLink[];
}
const useHomeParams = create<Links>((set) => ({
	state: false,
	mobileON: () => set((store) => ({ state: !store.state })),
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
	accordionLinks: [
		{
			heading: "Software",
			links: [
				{ name: "Windows Apps", link: "" },
				{ name: "AI", link: "" },
				{ name: "Outlook", link: "" },
				{ name: "OneDrive", link: "" },
				{ name: "Microsoft Teams", link: "" },
				{ name: "OneNote", link: "" },
				{ name: "Microsoft Edge", link: "" },
				{ name: "Skype", link: "" },
			],
		},
		{
			heading: "PCs & Devices",
			links: [
				{ name: "Computers", link: "" },
				{ name: "Shop Xbox", link: "" },
				{ name: "Accessories", link: "" },
				{ name: "VR & mixed reality", link: "" },
				{ name: "Certified Refurbished", link: "" },
				{ name: "Trade-in for cash", link: "" },
			],
		},
		{
			heading: "Entertainment",
			links: [
				{ name: "Xbox Game Pass Ultimate", link: "" },
				{ name: "PC Game Pass", link: "" },
				{ name: "Xbox games", link: "" },
				{ name: "PC and Windows games", link: "" },
				{ name: "Movies & TV", link: "" },
			],
		},
		{
			heading: "Business",
			links: [
				{ name: "Microsoft Cloud", link: "" },
				{ name: "Microsoft Security", link: "" },
				{ name: "Dynamics 365", link: "" },
				{ name: "Microsoft Power Platform", link: "" },
				{ name: "Windows 365", link: "" },
				{ name: "Microsoft Industry", link: "" },
				{ name: "Small Business", link: "" },
			],
		},
		{
			heading: "Developer & IT",
			links: [
				{ name: "Azure", link: "" },
				{ name: "Developer Center", link: "" },
				{ name: "Documentation", link: "" },
				{ name: "Microsoft Tech Community", link: "" },
				{ name: "Azure Marketplace", link: "" },
				{ name: "AppSource", link: "" },
				{ name: "Visual Studio", link: "" },
			],
		},
		{
			heading: "Other",
			links: [
				{ name: "Microsoft Rewards", link: "" },
				{ name: "Free downloads & security", link: "" },
				{ name: "Education", link: "" },
				{ name: "Gift cards", link: "" },
				{ name: "Licensing", link: "" },
				{ name: "Unlocked stories", link: "" },
			],
		},
		{
			heading: "View Sitemap",
		},
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

	cardDetails_2: [
		{
			cardImage: surfaceLaptop_2,
			cardTitle: "Save up to $250 on Surface Laptop 5 for Business",
			cardText: "Lightning-fast performance, built-in security and sleek portability designed for your small business. Offer ends 2/23.",
			cardLinkText1: "Shop now",
		},
		{
			cardImage: copilotImage,
			cardTitle: "Copilot for Microsoft 365",
			cardText: "Save time and focus on the things that matter most with AI in Microsoft 365 for business",
			cardLinkText1: "Learn more",
			cardBadge: <p className="card-badge">New</p>,
		},
		{
			cardImage: microsoftTeamImage,
			cardTitle: "Get Microsoft Teams for free",
			cardText: "Online meetings, chat, and shared cloud storage—all in one place.",
			cardLinkText1: "Sign up for free",
		},
		{
			cardImage: azureImage,
			cardTitle: "Join the era of AI",
			cardText: "Create, communicate, and code with the latest Microsoft AI solutions.",
			cardLinkText1: "Explore AI solutions",
		},
	],
}));

export default useHomeParams;
