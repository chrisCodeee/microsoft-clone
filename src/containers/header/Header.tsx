import AccessoriesCarousel from "../../components/carousel/AccessoriesCarousel";
import LaptopImage from "../../assets/Highlight-Surface-Laptop-5-Refresh-Test_VP5-1920x600.avif";
import CopilotImage from "../../assets/copilot-image-large.jfif";
import CopilotImageSmallMedia from "../../assets/copilot-image-small.avif";
import LaptopImageSmallMedia from "../../assets/Highlight-Surface-Laptop-5-Refresh-Test_VP2-859x540-small-media.avif";
const Header = () => {
	return (
		<>
			<AccessoriesCarousel
				image_1_Large={LaptopImage}
				image_1_Small={LaptopImageSmallMedia}
				image_2_Small={CopilotImageSmallMedia}
				image_2_Large={CopilotImage}
				heading_1="Save up to $430 on Surface Laptop 5"
				text_1="Sophisticated style and multitasking speed powered by 12th Gen Intel® Core. Offer ends 2/18."
				btnText_1="Shop Surface Laptop 5"
				heading_2="AI for everything you do"
				text_2="Explore what’s possible with Microsoft Copilot—available to anyone, anywhere, on any device."
				btnText_2="Try Copilot now"
			/>
		</>
	);
};

export default Header;
