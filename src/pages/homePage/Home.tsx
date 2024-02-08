import { NavBar } from "../../containers";
import useHomeParams from "./useHomeParams";

const HomePage = () => {
	const { mainLinks, sideLinks } = useHomeParams();
	return (
		<>
			<NavBar mainLinks={mainLinks} sideLinks={sideLinks} />
		</>
	);
};

export default HomePage;
