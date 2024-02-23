import { Card } from "../../components";
import { CardDetails } from "../../pages/homePage/useHomeParams";

interface Props {
	cardDetails: CardDetails[];
	heading?: string;
}

const CardContainer = ({ cardDetails, heading }: Props) => {
	return (
		<div className="row g-5">
			<h1>{heading}</h1>
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
