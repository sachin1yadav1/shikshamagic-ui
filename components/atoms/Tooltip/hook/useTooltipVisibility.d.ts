/// <reference types="react" />
/**
 *
 * @param param0
 *
 * @returns
 *
 *  it handles the visibility of the tooltip on hover action
 *  also moving cursor on tooltip prevent tooltip hide
 */
declare function useTooltipVisibility({ isTooltipVisible, position, reference, tooltipWrapperRef, handleTooltipHide, setIsTooltipVisible, }: {
    isTooltipVisible: boolean;
    position: any;
    reference: React.RefObject<HTMLElement>;
    tooltipWrapperRef: React.RefObject<HTMLDivElement>;
    handleTooltipHide: (callback: () => void) => void;
    setIsTooltipVisible: React.Dispatch<React.SetStateAction<boolean>>;
}): void;
export default useTooltipVisibility;
