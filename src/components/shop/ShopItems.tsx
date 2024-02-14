import { Link } from "react-router-dom";

interface Props {
	text: string;
	iconImage: string;
}

const ShopItems = ({ text, iconImage }: Props) => {
	return (
		<div className="px-5 pb-5">
			<div className="mx-auto mb-3" style={{ width: "40px" }}>
				<img src={iconImage} alt="image" />
			</div>
			<Link to="" className="link">
				{text}
			</Link>
		</div>
	);
};

export default ShopItems;
