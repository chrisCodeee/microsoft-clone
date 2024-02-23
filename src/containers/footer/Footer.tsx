import { business, company, developer, education, newItems, store } from "./useFooter";
import { FooterContent } from "../../components";

const Footer = () => {
	return (
		<div className="d-flex flex-wrap justify-content-between">
			<FooterContent items={newItems} text="What's new" />
			<FooterContent items={store} text="Microsoft Store" />
			<FooterContent items={education} text="Education" />
			<FooterContent items={business} text="Business" />
			<FooterContent items={developer} text="Developer & IT" />
			<FooterContent items={company} text="Company" />
		</div>
	);
};

export default Footer;
