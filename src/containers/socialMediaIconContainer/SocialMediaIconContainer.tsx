import { SocialMediaIcons } from "../../components";
import facebookIcon from "../../assets/Facebook 2x.avif";
import twitterIcon from "../../assets/icon-MSCOM-X-64x64.webp";
import linkedinIcon from "../../assets/Linkedin 2x.avif";

const SocialMediaIconContainer = () => {
	return (
		<div className="d-flex align-items-center">
			<p className="me-4 mt-3">Follow Microsoft</p>
			<SocialMediaIcons icon={facebookIcon} iconName="Facebook" socialMediaLink="https://www.facebook.com/Microsoft" />
			<SocialMediaIcons icon={twitterIcon} iconName="Twitter" socialMediaLink="https://twitter.com/microsoft" />
			<SocialMediaIcons icon={linkedinIcon} iconName="Linkedln" socialMediaLink="https://www.linkedin.com/company/microsoft" />
		</div>
	);
};

export default SocialMediaIconContainer;
