import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { PiShoppingCartLight, PiUserCirclePlusLight } from "react-icons/pi";
import Logo from "../../components/Logo/Logo";
import { Nav } from "./NavBarStyle";
import useNavState from "../../stateMangement/useNavState";
import useHomeParams from "../../pages/homePage/useHomeParams";

const NavBarSmallMedia = () => {
	const { searchOn } = useNavState();
	const { state, mobileON } = useHomeParams();
	return (
		<Nav className="d-flex d-lg-none px-3">
			<div>
				{!state && <HiBars3 size={30} onClick={mobileON} />}
				{state && <IoCloseOutline size={30} onClick={mobileON} />}
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
