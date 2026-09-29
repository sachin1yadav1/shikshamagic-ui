import { PopoverPositionsType } from '../types';
declare const usePopoverPosition: ({ reference, isPopoverVisible, position, popoverWrapperRef, }: {
    reference: React.RefObject<HTMLElement>;
    isPopoverVisible: boolean;
    position: PopoverPositionsType;
    popoverWrapperRef: React.RefObject<HTMLDivElement>;
}) => void;
export default usePopoverPosition;
