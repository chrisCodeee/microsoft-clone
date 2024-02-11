import { Assessories } from "..";
import { ControlBtn } from "../assessories/AssessoriesStyle";
import { ImageLarge, ImageSmall, TextContainer } from "../../containers/header/HeaderStyle";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import LaptopImage from "../../assets/Highlight-Surface-Laptop-5-Refresh-Test_VP5-1920x600.avif";
import CopilotImage from "../../assets/copilot-image-large.jfif";
import CopilotImageSmallMedia from "../../assets/copilot-image-small.avif";
import LaptopImageSmallMedia from "../../assets/Highlight-Surface-Laptop-5-Refresh-Test_VP2-859x540-small-media.avif";
import useCarousel from "../../stateMangement/useCarousel";

const AccessoriesCarousel = () => {
	const { state, play, pause } = useCarousel();
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<Link to="">
						<ImageLarge src={LaptopImage} alt="Laptop 5 Image" />
						<ImageSmall src={LaptopImageSmallMedia} alt="Laptop 5 Image" />
						<TextContainer>
							<Assessories />
						</TextContainer>
					</Link>
				</Carousel.Item>
				<Carousel.Item>
					<Link to="">
						<ImageLarge src={CopilotImage} alt="Laptop 5 Image" />
						<ImageSmall src={CopilotImageSmallMedia} alt="Laptop 5 Image" />
						<TextContainer>
							<Assessories />
						</TextContainer>
					</Link>
				</Carousel.Item>
			</Carousel>
			<ControlBtn>
				{state && <IoPauseCircleOutline onClick={pause} size={25.2} />}
				{!state && <IoIosPlayCircle size={25} onClick={play} />}
			</ControlBtn>
		</div>
	);
};

export default AccessoriesCarousel;
