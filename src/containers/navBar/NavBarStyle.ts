import styled from "styled-components";

const LogoContainer = styled.div`
	width: 108px;
	cursor: pointer;
	transform: translateY(-4px);
`;
const Logo = styled.img`
	width: 100%;
	object-fit: cover;
`;
const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NavList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NavListItems = styled.li`
	cursor: pointer;
	margin-right: 2rem;
`;

export { LogoContainer, Logo, NavList, NavListItems, Nav };
