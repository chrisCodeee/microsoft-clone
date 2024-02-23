import { Link } from "react-router-dom";
import { ImageLarge, ImageSmall, TextContainer, AccessoriesConatiner, Text } from "../carousel/AssessoriesStyle";

interface Props {
	imageLarge: string;
	imageSmall: string;
	heading: string;
	text: string;
	btnText: string;
	position?: string;
	color?: string;
	bgColor?: string;
}

const Accessories = ({ imageLarge, imageSmall, heading, text, btnText, position, color, bgColor }: Props) => {
	return (
		<div style={{ position: "relative" }}>
			<Link to="">
				<ImageLarge src={imageLarge} alt="Laptop 5 Image" />
				<ImageSmall src={imageSmall} alt="Laptop 5 Image" />
				<TextContainer style={{ left: position, backgroundColor: bgColor }}>
					<AccessoriesConatiner style={{ color: color }}>
						<h1 style={{ color: "inherit" }}>{heading}</h1>
						<Text>{text}</Text>
						<button className="btn btn-primary">{btnText}</button>
					</AccessoriesConatiner>
				</TextContainer>
			</Link>
		</div>
	);
};

export default Accessories;
