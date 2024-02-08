import { Link } from "react-router-dom";
import logo from "../../assets/microsoft.svg";
import { Logo, LogoContainer, NavList, NavListItems, Nav } from "./NavBarStyle";

type MainLinks = {
	link: string;
	name: string;
};
type SideLinks = {
	link: string;
	name: string;
	icon: string;
};

interface Links {
	mainLinks: MainLinks[];
	sideLinks: SideLinks[];
}

const NavBar = ({ mainLinks, sideLinks }: Links) => {
	return (
		<Nav>
			<div className="d-flex">
				<LogoContainer>
					<Link to="/" className="logo-link">
						<Logo src={logo} alt="microsoft logo" />
					</Link>
				</LogoContainer>
				<NavList>
					{mainLinks.map((elements) => (
						<>
							<NavListItems>
								<Link to={elements.link}>{elements.name}</Link>
							</NavListItems>
						</>
					))}
				</NavList>
			</div>
			<NavList>
				{sideLinks.map((elements) => (
					<>
						<NavListItems>
							<Link to={elements.link}>{elements.name}</Link>
							<span>{elements.icon}</span>
						</NavListItems>
					</>
				))}
			</NavList>
		</Nav>
	);
};

export default NavBar;
