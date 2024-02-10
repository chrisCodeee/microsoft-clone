import { Header, NavBar } from "../../containers";
import { mainLinks } from "./useHomeParams";

const HomePage = () => {
	return (
		<>
			<div className="container-fluid container-xl">
				<NavBar mainLinks={mainLinks} />
			</div>
			<div className="container-fluid">
				<Header />
			</div>
			<div className="container"></div>
		</>
	);
};

export default HomePage;
