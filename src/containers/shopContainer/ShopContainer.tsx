import { ShopItems } from "../../components";
import iconImage from "../../assets/Link-List-Icons-Surface-Devices.svg";
import xboxIcon from "../../assets/Link-List-Icons-Xbox-Games-Consoles.svg";
import accessoriesIcon from "../../assets/Link-List-Icons-Accessories.svg";
import businessIcon from "../../assets/Link-List-Icons-Business.svg";
import microsoftIcon from "../../assets/Link-List-Icons-Microsoft-365.svg";

const ShopContainer = () => {
	return (
		<div className="d-flex flex-wrap justify-content-center">
			<ShopItems text="Shop Surface devices" iconImage={iconImage} />
			<ShopItems text="Shop Xbox games and consoles" iconImage={xboxIcon} />
			<ShopItems text="Shop for accessories" iconImage={accessoriesIcon} />
			<ShopItems text="Shop for your business" iconImage={businessIcon} />
			<ShopItems text="Choose your Microsoft 365" iconImage={microsoftIcon} />
		</div>
	);
};

export default ShopContainer;
