import styled from "styled-components";

const HeaderContainer = styled.header`
	position: relative;
`;

const TextContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 0%;
	transform: translate(20%, -50%);
	width: 40%;
	padding: 40px;

	@media screen and (max-width: 1024px) {
		& {
			position: relative;
			transform: translate(0%, 0%);
			width: 90%;
			margin: 2rem auto;
			padding: 0;
		}
	}
`;

const ImageLarge = styled.img`
	display: block;

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

const ImageSmall = styled.img`
	display: none;

	@media screen and (max-width: 1024px) {
		display: block;
	}
`;

export { ImageLarge, ImageSmall, HeaderContainer, TextContainer };
