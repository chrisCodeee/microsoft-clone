import { create } from "zustand";

interface CarouselProps {
	state: boolean;
	play: () => void;
	pause: () => void;
}

const useCarousel = create<CarouselProps>((set) => ({
	state: true,
	play: () => set(() => ({ state: true })),
	pause: () => set(() => ({ state: false })),
}));

export default useCarousel;
