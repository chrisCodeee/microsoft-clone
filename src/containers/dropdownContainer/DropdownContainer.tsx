import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { NavSpan } from "../navBar/NavBarStyle";
import useHomeParams from "../../pages/homePage/useHomeParams";
import { Dropdown } from "../../components";

const DropdownContainer = () => {
	const { accordionLinks } = useHomeParams();
	return (
		<div
			className="pt-4 ms-auto"
			style={{
				width: "79vw",
				backgroundColor: "rgb(242, 242, 242)",
				borderBottom: "2px solid #000",
				position: "absolute",
				top: "50px",
				right: "3%",
				zIndex: "10000",
			}}>
			<div className="d-flex flex-wrap px-5 pb-3 justify-content-between">
				{accordionLinks.map(({ heading, links }) => (
					<Dropdown accordionLink={links} accordHeading={heading} />
				))}
			</div>
			<div className="py-3" style={{ backgroundColor: "rgb(230, 230, 230)" }}>
				<Link to="" className="d-flex justify-content-center">
					<NavSpan className="justify-content-center" style={{ textTransform: "uppercase" }}>
						View Sitemap
					</NavSpan>
					<RiArrowRightSLine size={20} />
				</Link>
			</div>
		</div>
	);
};

export default DropdownContainer;
