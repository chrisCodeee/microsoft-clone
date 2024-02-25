import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Span } from "../../containers/navBar/NavBarStyle";

const Accordian = () => {
	return (
		<Accordion flush className="py-2 ps-1">
			<Accordion.Item eventKey="0">
				<Accordion.Header className="pb-2" style={{ borderBottom: "1px solid rgba(204, 204, 204, 0.4)" }}>
					<span style={{ fontSize: "1.3rem" }}>Accordion</span>
				</Accordion.Header>
				<Accordion.Body className="ps-5">
					<div className="pb-4" style={{ borderBottom: "1px solid rgba(204, 204, 204, 0.4)" }}>
						<Link to="">
							<Span>Link</Span>
						</Link>
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Accordian;
