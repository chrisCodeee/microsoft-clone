import { create } from "zustand";

type MainLinks = {
	link: string;
	name: string;
};

interface Links {
	mainLinks: MainLinks[];
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
}));

export default useHomeParams;
