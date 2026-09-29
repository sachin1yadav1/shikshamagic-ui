declare const useTooltipAnimation: ({ isVisible, tooltipRef, }: {
    isVisible: boolean;
    tooltipRef: React.RefObject<HTMLDivElement>;
}) => {
    handleTooltipHide: (callback: () => void) => void;
};
export default useTooltipAnimation;
