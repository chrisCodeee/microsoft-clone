import { AccessoriesConatiner, ControlBtn, ImageLarge, ImageSmall, Text, TextContainer } from "./AssessoriesStyle";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircleOutline } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";
import useCarousel from "../../stateMangement/useCarousel";
import { Link } from "react-router-dom";

interface Props {
	image_1_Large: string;
	image_1_Small: string;
	image_2_Small: string;
	image_2_Large: string;
	heading_1: string;
	text_1: string;
	btnText_1: string;
	heading_2: string;
	text_2: string;
	btnText_2: string;
}

const AccessoriesCarousel = ({
	image_1_Large,
	image_1_Small,
	image_2_Large,
	image_2_Small,
	heading_1,
	text_1,
	btnText_1,
	heading_2,
	text_2,
	btnText_2,
}: Props) => {
	const { state, play, pause } = useCarousel();

	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<Link to="">
						<ImageLarge src={image_1_Large} alt="Laptop 5 Image" />
						<ImageSmall src={image_1_Small} alt="Laptop 5 Image" />
						<TextContainer>
							<AccessoriesConatiner>
								<h1>{heading_1}</h1>
								<Text>{text_1}</Text>
								<button className="btn btn-primary">{btnText_1}</button>
							</AccessoriesConatiner>
						</TextContainer>
					</Link>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="">
						<ImageLarge src={image_2_Large} alt="Laptop 5 Image" />
						<ImageSmall src={image_2_Small} alt="Laptop 5 Image" />
						<TextContainer>
							<AccessoriesConatiner>
								<h1>{heading_2}</h1>
								<Text>{text_2}</Text>
								<button className="btn btn-primary">{btnText_2}</button>
							</AccessoriesConatiner>
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
