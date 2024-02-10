import { Header, NavBar } from "../../containers";

const HomePage = () => {
	return (
		<>
			<div className="container-fluid container-xl">
				<NavBar />
			</div>
			<div className="container-fluid">
				<Header />
			</div>
			<div className="container"></div>
		</>
	);
};

export default HomePage;
