import { create } from "zustand";

interface NavStateProps {
	state: boolean;
	searchOn: () => void;
	searchOff: () => void;
}

const useNavState = create<NavStateProps>((set) => ({
	state: true,
	searchOff: () => set(() => ({ state: true })),
	searchOn: () => set(() => ({ state: false })),
}));

export default useNavState;
