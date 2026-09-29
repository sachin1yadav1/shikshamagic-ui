import { TooltipPositions } from '../types';
declare const useTooltipPosition: ({ reference, isTooltipVisible, position, tooltipWrapperRef, }: {
    reference: React.RefObject<HTMLElement>;
    isTooltipVisible: boolean;
    position: TooltipPositions;
    tooltipWrapperRef: React.RefObject<HTMLDivElement>;
}) => void;
export default useTooltipPosition;
