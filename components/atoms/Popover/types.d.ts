/// <reference types="react" />
import { Colors } from '../../../types/colors';
export declare const PopoverPositions: readonly ["top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-start", "bottom", "bottom-end", "left-start", "left", "left-end"];
export type TriggerPositionProps = {
    x: number;
    y: number;
    height: number;
    width: number;
} | null;
export type PopoverPositionsType = (typeof PopoverPositions)[number];
interface DefaultDivProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content' | 'children'> {
}
export interface PopoverBaseProps extends DefaultDivProps {
    readonly open: boolean;
    readonly position?: PopoverPositionsType;
    readonly arrowColor?: string | Colors;
    readonly hideArrow?: boolean;
    readonly trackTrigger?: boolean;
    readonly content: React.ReactNode;
    readonly followTriggerDimensions?: {
        width?: boolean;
        height?: boolean;
    };
    readonly overlayClassName?: string;
    readonly onAnimationComplete?: () => void;
    readonly onReverseAnimationComplete?: () => void;
}
export interface PopoverWithReference extends PopoverBaseProps {
    reference: React.RefObject<HTMLElement>;
}
export interface PopoverWithTrigger extends PopoverBaseProps {
    reference?: null;
    children: React.ReactElement;
}
export type PopoverProps = PopoverWithReference | PopoverWithTrigger;
export {};
