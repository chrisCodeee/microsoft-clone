import { PiArrowLeftThin } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
import Logo from "../Logo/Logo";
import { Nav } from "../../containers/navBar/NavBarStyle";
import { BtnCancel } from "..";
import { IconContainer, Input, InputContainer, SearchContainer } from "./SearchStyle";
import useNavState from "../../stateMangement/useNavState";

const Search = () => {
	const { searchOff } = useNavState();

	return (
		<Nav>
			<div className="d-none d-lg-flex">
				<Logo />
			</div>

			<div className="d-flex d-lg-none">
				<PiArrowLeftThin size={28} onClick={searchOff} />
			</div>

			<SearchContainer>
				<InputContainer>
					<Input type="text" placeholder="Search Microsoft.com" autoFocus />
					<IconContainer>
						<VscSearch size={17} />
					</IconContainer>
				</InputContainer>

				<div className="d-none d-lg-flex" onClick={searchOff}>
					<BtnCancel name="Cancel" />
				</div>
			</SearchContainer>
		</Nav>
	);
};

export default Search;
