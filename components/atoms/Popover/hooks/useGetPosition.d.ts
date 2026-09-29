import { PopoverPositionsType } from '../types';
declare const useGetPosition: (position: PopoverPositionsType) => {
    getDefaultPosition: () => 'top' | 'bottom' | 'left' | 'right';
    getOrientation: () => string;
    getAlignment: () => "start" | "end" | "center";
};
export default useGetPosition;
