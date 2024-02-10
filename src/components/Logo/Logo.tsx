import { Link } from "react-router-dom";
import { LogoContainer, LogoImage } from "./LogoStyles";
import microsoftLogo from "../../assets/microsoft.svg";

const Logo = () => {
	return (
		<>
			<LogoContainer>
				<Link to="/" className="logo-link">
					<LogoImage src={microsoftLogo} alt="microsoft logo" />
				</Link>
			</LogoContainer>
		</>
	);
};

export default Logo;
