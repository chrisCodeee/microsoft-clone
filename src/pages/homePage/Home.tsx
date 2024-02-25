import ScrollBtn from "../../components/scrollButton/ScrollBtn";
import { CardContainer, Footer, Header, NavBar, NavBarMobileView, SeriesContainer, ShopContainer, SocialMediaIconContainer } from "../../containers";
import SectionAI from "../../containers/sectionAI/SectionAI";
import useHomeParams from "./useHomeParams";

const HomePage = () => {
	const { cardDetails, cardDetails_2, state } = useHomeParams();
	return (
		<>
			<div className="container-fluid container-xl" id="top">
				<NavBar />
			</div>

			{state && <NavBarMobileView />}
			{!state && (
				<div className="container-fluid">
					<Header />
				</div>
			)}
			<div className={`mainContainer mx-auto ${state ? "mt-0" : "mt-big"}`}>
				<ShopContainer />
				<CardContainer cardDetails={cardDetails} />
				<SeriesContainer />
				<div className="mt-big">
					<CardContainer cardDetails={cardDetails_2} heading="For business" />
				</div>
				<SectionAI />
				<div className="mt-big">
					<SocialMediaIconContainer />
					<ScrollBtn />
				</div>
			</div>
			<footer className="mt-big py-5" style={{ backgroundColor: "rgb(242, 242, 242)" }}>
				<div className="mainContainer mx-auto">
					<Footer />
				</div>
			</footer>
		</>
	);
};

export default HomePage;
