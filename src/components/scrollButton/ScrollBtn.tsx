import { BtnScroll } from "./ScrollBtnStyle";
import { HiArrowSmallUp } from "react-icons/hi2";

const ScrollBtn = () => {
	return (
		<div className="d-flex justify-content-end">
			<BtnScroll>
				<a href="#top" className="d-flex">
					<HiArrowSmallUp className="me-3" size={20} />
					<span style={{ fontWeight: "600" }}>Back to top</span>
				</a>
			</BtnScroll>
		</div>
	);
};

export default ScrollBtn;
