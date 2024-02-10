import styled from "styled-components";

const LogoContainer = styled.div`
	width: 108px;
	cursor: pointer;
	transform: translateY(-4px);

	& a,
	& a:hover,
	& a:focus {
		padding-bottom: 0;
		border-bottom: 0;
		border-bottom-color: transparent;
	}

	@media screen and (max-width: 992px) {
		width: 120px;
	}
`;
const LogoImage = styled.img``;
export { LogoContainer, LogoImage };
