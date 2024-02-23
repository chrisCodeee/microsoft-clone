import { Link } from "react-router-dom";
import { SocialIconContainer } from "./SocialMediaIconStyle";

interface Props {
	icon: string;
	iconName: string;
	socialMediaLink: string;
}
const SocialMediaIcons = ({ icon, iconName, socialMediaLink }: Props) => {
	return (
		<Link to={socialMediaLink} target="_blank">
			<SocialIconContainer className="me-4">
				<img src={icon} alt={iconName} />
			</SocialIconContainer>
		</Link>
	);
};

export default SocialMediaIcons;
