import { PopoverPositionsType } from '../types';
declare const usePopoverAnimation: ({ followTriggerDimensions, actualPopoverVisiblity, popoverRef, position, isPopoverVisible, onReverseComplete, onComplete, }: {
    followTriggerDimensions: {
        width?: boolean;
        height?: boolean;
    };
    popoverRef: React.RefObject<HTMLDivElement>;
    position: PopoverPositionsType;
    actualPopoverVisiblity: boolean;
    isPopoverVisible: boolean;
    onReverseComplete: () => void;
    onComplete: () => void;
}) => void;
export default usePopoverAnimation;
