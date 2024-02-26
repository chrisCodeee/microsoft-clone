import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavList, NavListItems, Span, Icon, Nav } from "./NavBarStyle";
import Logo from "../../components/Logo/Logo";
import { LiaSearchSolid } from "react-icons/lia";
import { PiShoppingCartLight, PiUserCirclePlusLight } from "react-icons/pi";
import useNavState from "../../stateMangement/useNavState";
import useHomeParams from "../../pages/homePage/useHomeParams";

const NavBarLargerMedia = () => {
	const { searchOn, dropdownON } = useNavState();
	const { mainLinks } = useHomeParams();

	return (
		<Nav className="d-none d-lg-flex">
			<div className="d-flex">
				<Logo />
				<NavList>
					{mainLinks.map((elements) => (
						<>
							<NavListItems>
								<Link to={elements.link}>
									<Span>{elements.name}</Span>
								</Link>
							</NavListItems>
						</>
					))}
				</NavList>
			</div>
			<NavList>
				<NavListItems onClick={dropdownON}>
					<Link to="">
						<Span>All Microsft</Span>
						<Icon>
							<MdKeyboardArrowDown size={20} />
						</Icon>
					</Link>
				</NavListItems>

				<NavListItems onClick={searchOn}>
					<Link to="">
						<Span className="d-none d-xxl-inline-block">Search</Span>
						<Icon>
							<LiaSearchSolid size={20} />
						</Icon>
					</Link>
				</NavListItems>
				<NavListItems>
					<Link to="/cart">
						<Span className="d-none d-xxl-inline-block">Cart</Span>
						<Icon>
							<PiShoppingCartLight size={20} />
						</Icon>
					</Link>
				</NavListItems>
				<NavListItems>
					<Link to="/login">
						<Span className="d-none d-xxl-inline-block">Search</Span>
						<Icon>
							<PiUserCirclePlusLight size={30} />
						</Icon>
					</Link>
				</NavListItems>
			</NavList>
		</Nav>
	);
};

export default NavBarLargerMedia;
