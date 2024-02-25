import { Link } from "react-router-dom";
import useHomeParams from "../../pages/homePage/useHomeParams";
import { Span } from "./NavBarStyle";
import { Accordian } from "../../components";

const NavBarMobileView = () => {
	const { mainLinks } = useHomeParams();
	return (
		<>
			<div style={{ width: "100vw", backgroundColor: "rgb(242, 242, 242)" }}>
				<ul style={{ listStyle: "none", padding: "0" }}>
					{mainLinks.map(({ name, link }) => (
						<li key={name} className="py-3 ps-4" style={{ borderBottom: "1px solid rgba(204, 204, 204, 0.4)" }}>
							<Link to={link}>
								<Span>{name}</Span>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div style={{ width: "100vw", backgroundColor: "rgb(242, 242, 242)", marginTop: "-10px" }}>
				<Accordian />
				<Accordian />
				<Accordian />
				<Accordian />
				<Accordian />
				<Accordian />
			</div>
		</>
	);
};

export default NavBarMobileView;
