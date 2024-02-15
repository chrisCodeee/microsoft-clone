import { CardContainer, Header, NavBar, SeriesContainer, ShopContainer } from "../../containers";
import useHomeParams from "./useHomeParams";

const HomePage = () => {
	const { cardDetails } = useHomeParams();
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
				<CardContainer cardDetails={cardDetails} />
				<SeriesContainer />
				<div className="mt-big">
					<CardContainer cardDetails={cardDetails} />
				</div>
			</div>
		</>
	);
};

export default HomePage;
