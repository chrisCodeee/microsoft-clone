import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ReactNode } from "react";

interface Props {
	cardImage: string;
	cardTitle: string;
	cardText: string;
	cardLinkText1: string;
	cardLinkText2?: string;
	cardBadge?: ReactNode;
	icon?: ReactNode;
}

const Card = ({ cardImage, cardTitle, cardText, cardLinkText1, cardLinkText2, cardBadge, icon }: Props) => {
	return (
		<div className="card" style={{ border: "0" }}>
			<Link to="">
				<img src={cardImage} className="card-img-top" alt="..." />
				<div className="card-body px-0">
					{cardBadge}
					<h2 className="card-title mb-4">{cardTitle}</h2>
					<p className="card-text">{cardText}</p>
					<div className="d-flex justify-content-between my-5">
						<p className="link card-link d-flex align-items-center">
							<span>{cardLinkText1}</span>
							<MdKeyboardArrowRight size={25} className="icon" />
						</p>
						<p className="link card-link d-flex align-items-center">
							<span>{cardLinkText2}</span>
							{icon}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
