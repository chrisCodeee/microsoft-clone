import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Span } from "../../containers/navBar/NavBarStyle";
import { MainLinks } from "../../pages/homePage/useHomeParams";

interface Props {
	accordionLink?: MainLinks[];
	accordHeading: string;
}

const Accordian = ({ accordionLink, accordHeading }: Props) => {
	return (
		<Accordion flush className="py-2 ps-1">
			<Accordion.Item eventKey="0">
				<Accordion.Header className="pb-2" style={{ borderBottom: "1px solid rgba(204, 204, 204, 0.4)" }}>
					<span style={{ fontSize: "1.3rem" }}>{accordHeading}</span>
				</Accordion.Header>
				<Accordion.Body className="ps-5">
					{accordionLink?.map(({ name, link }) => (
						<div className="py-3" style={{ borderBottom: "1px solid rgba(204, 204, 204, 0.4)" }}>
							<Link to={link} key={name}>
								<Span className="ps-4">{name}</Span>
							</Link>
						</div>
					))}
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Accordian;
