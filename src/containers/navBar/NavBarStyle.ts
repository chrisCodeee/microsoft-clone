import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 5.5rem;
`;
const NavList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
`;

const Span = styled.span`
	font-size: 1.3rem;
	padding-bottom: 0.2rem;
	border-bottom: 2px solid transparent;
	transition: all 0.2s;

	&:hover,
	&:focus {
		border-bottom: 2px solid #000;
	}
`;
const NavListItems = styled.li`
	cursor: pointer;
	margin-right: 1.5rem;

	&:active {
		border: 1px dotted #000;
		padding: 0.5rem;
	}

	@media (min-width: 1200px) {
		margin-right: 2rem;
	}
`;

const Icon = styled.span`
	margin-left: 0.5rem;
`;

export { NavList, NavListItems, Nav, Span, Icon };
