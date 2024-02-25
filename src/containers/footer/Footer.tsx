import { business, company, developer, education, newItems, store } from "./useFooter";
import { FooterContent } from "../../components";
import { Link } from "react-router-dom";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { MdSecurity } from "react-icons/md";

const Footer = () => {
	const footerLinks = [
		{ name: "Sitemap", link: "" },
		{ name: "Contact Microsoft", link: "" },
		{ name: "Privacy", link: "" },
		{ name: "Terms of use", link: "" },
		{ name: "Trademarks", link: "" },
		{ name: "Safety & eco", link: "" },
		{ name: "Recycling", link: "" },
		{ name: "About our ads", link: "" },
		{ name: `Microsoft 2024`, link: "", copy: <span> &copy; </span> },
	];
	return (
		<>
			<div className="d-flex flex-wrap justify-content-between pe-xxl-5">
				<FooterContent items={newItems} text="What's new" />
				<FooterContent items={store} text="Microsoft Store" />
				<FooterContent items={education} text="Education" />
				<FooterContent items={business} text="Business" />
				<FooterContent items={developer} text="Developer & IT" />
				<FooterContent items={company} text="Company" />
			</div>

			<div className="mt-3 d-flex flex-column flex-xxl-row justify-content-between">
				<div className="d-flex flex-wrap">
					<div className="me-5 mb-2 mb-xxl-0">
						<Link to="" className="card- d-flex align-items-center">
							<LiaGlobeAmericasSolid size={22} className="me-3" /> English (United States)
						</Link>
					</div>
					<div>
						<Link to="" className="card-link d-flex align-items-center">
							<MdSecurity size={22} className="me-3" /> Your Privacy Choices
						</Link>
					</div>
				</div>

				<div className="d-flex flex-wrap justify-content-start justify-content-lg-end mt-3 mt-xxl-0">
					{footerLinks.map(({ name, link, copy }) => (
						<li key={name} className="me-3 me-xxl-5 pt-2 py-xxl-0">
							<Link to={link} className="card-link">
								{copy}
								{name}
							</Link>
						</li>
					))}
				</div>
			</div>
		</>
	);
};

export default Footer;
