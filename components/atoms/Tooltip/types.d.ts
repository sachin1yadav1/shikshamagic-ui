/// <reference types="react" />
import { Colors } from '../../../types/colors';
export declare const TooltipPositions: readonly ["top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-start", "left", "left-end"];
export type TooltipPositions = (typeof TooltipPositions)[number];
export interface TooltipBaseProps {
    position?: TooltipPositions;
    backgroundColor?: string | Colors;
    indicatorSize?: number;
    className?: string;
    width?: number;
    label?: React.ReactNode;
    content: React.ReactNode;
}
export interface TooltipWithReference extends TooltipBaseProps {
    reference: React.RefObject<HTMLElement>;
}
export interface TooltipWithTriggerProps extends TooltipBaseProps {
    children: React.ReactElement;
}
export type TooltipProps = TooltipWithReference | TooltipWithTriggerProps;
