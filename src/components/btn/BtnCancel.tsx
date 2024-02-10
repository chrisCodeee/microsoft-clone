import { ButtonCancel } from "./BtnStyles";

interface Props {
	name: string;
}

const BtnCancel = ({ name }: Props) => {
	return (
		<>
			<ButtonCancel className="cancel">
				<span>{name}</span>
			</ButtonCancel>
		</>
	);
};

export default BtnCancel;
