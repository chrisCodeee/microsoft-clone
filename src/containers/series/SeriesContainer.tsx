import { Accessories } from "../../components";
import xboxImageLarge from "../../assets/Xbox_Large.webp";
import xboxImageSmall from "../../assets/Xbox_Small.webp";
const SeriesContainer = () => {
	return (
		<div>
			<Accessories
				imageLarge={xboxImageLarge}
				imageSmall={xboxImageSmall}
				heading="Save up to $44 on Xbox Wireless Controllers"
				text="Save on select controllers designed for comfort, precision, and seamless sharing. Offer ends 3/3."
				btnText="Shop Xbox controllers"
				position="0"
			/>
		</div>
	);
};

export default SeriesContainer;
