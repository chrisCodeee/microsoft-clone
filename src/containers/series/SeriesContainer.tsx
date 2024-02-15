import { Accessories } from "../../components";
import xboxImageLarge from "../../assets/Highlight-Xbox-Series-S-Light-Background_VP5-1596x600.avif";
import xboxImageSmall from "../../assets/Content-Card-Xbox-Series-S-1TB-Black-Merch-01.avif";
const SeriesContainer = () => {
	return (
		<div>
			<Accessories
				imageLarge={xboxImageLarge}
				imageSmall={xboxImageSmall}
				heading="Xbox Series X"
				text="The fastest, most powerful Xbox ever"
				btnText="Shop Xbox Series X"
				position="50%"
			/>
		</div>
	);
};

export default SeriesContainer;
