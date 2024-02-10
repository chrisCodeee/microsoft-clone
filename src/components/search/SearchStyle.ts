import styled from "styled-components";

const SearchContainer = styled.div`
	flex-grow: 1;
	margin-left: 6rem;
	display: flex;

	@media screen and (max-width: 992px) {
		margin-left: 1rem;
	}
`;
const InputContainer = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	position: relative;
	margin-right: 0.5rem;

	@media screen and (max-width: 992px) {
		margin-right: 0;
	}
`;

const Input = styled.input`
	width: 100%;
	padding: 0.7rem 1rem;
	font-size: 1.2rem;

	&:focus,
	&:active {
		outline-color: rgb(11, 96, 160);
	}

	@media screen and (max-width: 992px) {
		padding-left: 4rem;
		font-size: 1.6rem;
	}
`;

const IconContainer = styled.span`
	position: absolute;
	right: 1rem;
	cursor: pointer;
	display: flex;

	@media screen and (max-width: 992px) {
		left: 1rem;
	}
`;

export { SearchContainer, InputContainer, Input, IconContainer };
