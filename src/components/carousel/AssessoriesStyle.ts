import styled from "styled-components";

const TextContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 0%;
	transform: translate(20%, -50%);
	width: 40%;
	padding: 4rem;

	@media screen and (max-width: 1024px) {
		& {
			position: relative;
			transform: translate(0%, 0%);
			width: 100%;
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

const Text = styled.p`
	padding-right: 40px;
	margin: 1.2rem 0 2.4rem 0;

	@media screen and (max-width: 992px) {
		padding: 0;
	}
`;
const AccessoriesConatiner = styled.div`
	padding: 0 1rem 4rem 1.5rem;

	@media screen and (max-width: 1024px) {
		box-shadow: 0 5px 3px #eee;
	}
`;
const ControlBtn = styled.button`
	border: none;
	background-color: transparent;
	outline: 0;
	position: absolute;
	left: 42%;
	transform: translateY(15px);

	@media screen and (max-width: 992px) {
		left: 33%;
	}

	@media screen and (max-width: 650px) {
		left: 30%;
	}

	@media screen and (max-width: 490px) {
		left: 25%;
	}

	@media screen and (max-width: 360px) {
		left: 18%;
	}

	@media screen and (max-width: 290px) {
		left: 10%;
	}
`;
export { Text, ControlBtn, AccessoriesConatiner, ImageLarge, ImageSmall, TextContainer };
