import { Assessories } from "../../components";
import LaptopImage from "../../assets/Highlight-Surface-Laptop-5-Refresh-Test_VP5-1920x600.avif";
import LaptopImageSmallMedia from "../../assets/Highlight-Surface-Laptop-5-Refresh-Test_VP2-859x540-small-media.avif";
import { ImageLarge, ImageSmall, HeaderContainer, TextContainer } from "./HeaderStyle";

const Header = () => {
	return (
		<HeaderContainer>
			<ImageLarge src={LaptopImage} alt="Laptop 5 Image" />
			<ImageSmall src={LaptopImageSmallMedia} alt="Laptop 5 Image" />

			<TextContainer>
				<Assessories />
			</TextContainer>
		</HeaderContainer>
	);
};

export default Header;
