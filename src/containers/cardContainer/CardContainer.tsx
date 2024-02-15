import { Card } from "../../components";
import useHomeParams from "../../pages/homePage/useHomeParams";

const CardContainer = () => {
	const { cardDetails } = useHomeParams();
	return (
		<div className="row mt-4 g-4">
			{cardDetails.map(({ cardImage, cardTitle, cardText, cardLinkText1, cardBadge, cardLinkText2, icon }) => (
				<div key={cardText} className="col-12 col-lg-6 col-xl-3">
					<Card
						cardImage={cardImage}
						cardTitle={cardTitle}
						cardText={cardText}
						cardLinkText1={cardLinkText1}
						cardBadge={cardBadge}
						cardLinkText2={cardLinkText2}
						icon={icon}
					/>
				</div>
			))}
		</div>
	);
};

export default CardContainer;
