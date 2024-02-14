import { Header, NavBar, ShopContainer } from "../../containers";

const HomePage = () => {
	return (
		<>
			<div className="container-fluid container-xl">
				<NavBar />
			</div>
			<div className="container-fluid">
				<Header />
			</div>
			<div className="container mt-big">
				<ShopContainer />
			</div>
		</>
	);
};

export default HomePage;
