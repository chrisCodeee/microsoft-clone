import { create } from "zustand";

interface NavStateProps {
	state: boolean;
	dropdownState: boolean;
	searchOn: () => void;
	searchOff: () => void;
	dropdownON: () => void;
}

const useNavState = create<NavStateProps>((set) => ({
	state: true,
	dropdownState: false,
	searchOff: () => set(() => ({ state: true })),
	searchOn: () => set(() => ({ state: false })),
	dropdownON: () => set((store) => ({ dropdownState: !store.dropdownState })),
}));

export default useNavState;
