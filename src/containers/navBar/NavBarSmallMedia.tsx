import { HiBars3 } from "react-icons/hi2";
import { LiaSearchSolid } from "react-icons/lia";
import { PiShoppingCartLight, PiUserCirclePlusLight } from "react-icons/pi";
import Logo from "../../components/Logo/Logo";
import { Nav } from "./NavBarStyle";
import useNavState from "../../stateMangement/useNavState";

const NavBarSmallMedia = () => {
	const { searchOn } = useNavState();
	return (
		<Nav className="d-flex d-lg-none px-3">
			<div>
				<HiBars3 size={30} />
				<LiaSearchSolid size={20} className="ms-4" onClick={searchOn} />
			</div>
			<Logo />
			<div className="">
				<PiShoppingCartLight size={20} className="me-4" />
				<PiUserCirclePlusLight size={30} />
			</div>
		</Nav>
	);
};

export default NavBarSmallMedia;
