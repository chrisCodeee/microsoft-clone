import { Link } from "react-router-dom";

type Items = {
	name: string;
	link: string;
};
interface Props {
	items: Items[];
	text: string;
}
const FooterContent = ({ items, text }: Props) => {
	return (
		<div className="py-3 pe-5">
			<p className="mb-4" style={{ fontWeight: "600" }}>
				{text}
			</p>
			<div style={{ listStyle: "none" }}>
				{items.map(({ name, link }) => (
					<li className="mb-4 fs-5" key={name}>
						<Link to={link} className="card-link">
							{name}
						</Link>
					</li>
				))}
			</div>
		</div>
	);
};

export default FooterContent;
