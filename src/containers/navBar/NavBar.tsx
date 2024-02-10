import NavBarSmallMedia from "./NavBarSmallMedia";
import NavBarLargerMedia from "./NavBarLargerMedia";
import { Search } from "../../components";
import useNavState from "../../stateMangement/useNavState";

type MainLinks = {
	link: string;
	name: string;
};

export interface Links {
	mainLinks: MainLinks[];
}

const NavBar = ({ mainLinks }: Links) => {
	const { state } = useNavState();
	return (
		<>
			<div>{!state && <Search />}</div>

			{/* Small Media Nzvigation */}
			{state && <NavBarSmallMedia />}

			{/* Larger Media Navigation */}
			{state && <NavBarLargerMedia mainLinks={mainLinks} />}
		</>
	);
};

export default NavBar;
