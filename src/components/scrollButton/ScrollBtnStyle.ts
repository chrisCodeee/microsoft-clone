import styled from "styled-components";

const BtnScroll = styled.div`
	padding: 6px 20px 6px 10px;
	border: none;
	outline: none;
	background-color: rgba(0, 0, 0, 0.15);
	border-radius: 2px;
	display: inline-block;
	margin-top: 15px;
	// margin-right: auto;

	@media screen and (min-width: 1024px) {
		position: fixed;
		bottom: 1%;
		right: 1%;
	}
	&:hover {
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	}
`;
export { BtnScroll };
