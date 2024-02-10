import NavBarSmallMedia from "./NavBarSmallMedia";
import NavBarLargerMedia from "./NavBarLargerMedia";
import { Search } from "../../components";
import useNavState from "../../stateMangement/useNavState";

const NavBar = () => {
	const { state } = useNavState();
	return (
		<>
			<div>{!state && <Search />}</div>

			{/* Small Media Nzvigation */}
			{state && <NavBarSmallMedia />}

			{/* Larger Media Navigation */}
			{state && <NavBarLargerMedia />}
		</>
	);
};

export default NavBar;
