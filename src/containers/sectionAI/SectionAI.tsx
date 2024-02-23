import AccessoriesCarousel from "../../components/carousel/AccessoriesCarousel";
import highlightMultiLarge from "../../assets/Highlight-Multi-BHM24_VP5-1596x600.avif";
import highlightMultiSmall from "../../assets/Highlight-Multi-BHM24_VP3-small.avif";
import highlightMicrosoftLarge from "../../assets/Highlight-MIcrosoft-AI-Purple-Inventive-Uses_VP5-1596x600.avif";
import highlightMicrosoftSmall from "../../assets/Highlight-MIcrosoft-AI-Purple-Inventive-small.avif";

const SectionAI = () => (
	<>
		<AccessoriesCarousel
			image_1_Large={highlightMultiLarge}
			image_1_Small={highlightMultiSmall}
			image_2_Small={highlightMicrosoftSmall}
			image_2_Large={highlightMicrosoftLarge}
			heading_1="Celebrating the Black and African American community"
			text_1="Explore powerful stories of innovation and inspiration from employees, this month and year-round"
			btnText_1="Check out their stories"
			heading_2="Creative ways AI can work for you"
			text_2="From baking to business marketing, here are nine projects people are tackling using AI tools like Microsoft Copilot to make their lives easier and improve productive"
			btnText_2="Explore how others are using AI"
			color="#fff"
			bgColor="#fff"
		/>
	</>
);

export default SectionAI;
