const useHomeParams = () => {
	const mainLinks = [
		{ name: "Microsoft 365", link: "/microsoft-365" },
		{ name: "Teams", link: "/teams" },
		{ name: "Copilot", link: "/copilot" },
		{ name: "Windows", link: "/windows" },
		{ name: "Surface", link: "/surface" },
		{ name: "Xbox", link: "/xbox" },
		{ name: "Deals", link: "/deals" },
		{ name: "Small Business", link: "/business" },
		{ name: "Support", link: "/support" },
	];
	const sideLinks = [
		{ name: "All Microsoft", link: "", icon: "" },
		{ name: "Search", icon: "..", link: "" },
		{ name: "Cart", icon: "..", link: "/cart" },
		{ name: "Sign in", icon: "..", link: "/login" },
	];

	return { mainLinks, sideLinks };
};

export default useHomeParams;
