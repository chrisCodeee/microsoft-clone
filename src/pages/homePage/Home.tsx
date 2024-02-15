import { Header, NavBar, ShopContainer } from "../../containers";
import CardContainer from "../../containers/cardContainer/CardContainer";

const HomePage = () => {
	return (
		<>
			<div className="container-fluid container-xl">
				<NavBar />
			</div>
			<div className="container-fluid">
				<Header />
			</div>
			<div className="mainContainer mx-auto mt-big">
				<ShopContainer />
				<CardContainer />
			</div>
		</>
	);
};

export default HomePage;
