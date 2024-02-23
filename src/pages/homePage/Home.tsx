import ScrollBtn from "../../components/scrollButton/ScrollBtn";
import { CardContainer, Header, NavBar, SeriesContainer, ShopContainer, SocialMediaIconContainer } from "../../containers";
import SectionAI from "../../containers/sectionAI/SectionAI";
import useHomeParams from "./useHomeParams";

const HomePage = () => {
	const { cardDetails, cardDetails_2 } = useHomeParams();
	return (
		<>
			<div className="container-fluid container-xl" id="top">
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
					<CardContainer cardDetails={cardDetails_2} heading="For business" />
				</div>
				<SectionAI />
				<div className="mt-big">
					<SocialMediaIconContainer />
					<ScrollBtn />
				</div>
			</div>
		</>
	);
};

export default HomePage;
