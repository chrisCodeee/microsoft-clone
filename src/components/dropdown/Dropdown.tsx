import { Link } from "react-router-dom";
import { NavSpan } from "../../containers/navBar/NavBarStyle";
import { MainLinks } from "../../pages/homePage/useHomeParams";

interface Props {
	accordionLink?: MainLinks[];
	accordHeading: string;
}
const Dropdown = ({ accordionLink, accordHeading }: Props) => {
	return (
		<div className="mb-5 mb-xxl-0">
			<p style={{ fontWeight: "600", fontSize: "1.3rem" }} className="mb-4">
				{accordHeading}
			</p>

			{accordionLink?.map(({ name, link }) => (
				<Link to={link} key={name} className="d-flex py-3">
					<NavSpan className="mb-0">{name}</NavSpan>
				</Link>
			))}
		</div>
	);
};

export default Dropdown;
