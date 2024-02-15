import { ControlBtn } from "./AssessoriesStyle";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircleOutline } from "react-icons/io5";
import Carousel from "react-bootstrap/Carousel";
import useCarousel from "../../stateMangement/useCarousel";
import { Accessories } from "..";

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
					<Accessories imageLarge={image_1_Large} imageSmall={image_1_Small} heading={heading_1} text={text_1} btnText={btnText_1} />
				</Carousel.Item>

				<Carousel.Item>
					<Accessories imageLarge={image_2_Large} imageSmall={image_2_Small} heading={heading_2} text={text_2} btnText={btnText_2} />
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
