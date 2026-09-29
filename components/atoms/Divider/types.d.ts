/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { DefaultColorsTypes } from '../../../utilities/constants';
type DividerType = 'horizontal' | 'vertical';
type DividerOrientationType = 'left' | 'right' | 'center';
interface DividerProps {
    variant?: PresetColors;
    color?: DefaultColorsTypes;
    type?: DividerType;
    stroke?: number;
    fontSize?: number;
    fontWeight?: React.CSSProperties['fontWeight'];
    dashed?: boolean;
    orientation?: DividerOrientationType;
    orientationMargin?: number;
    children?: React.ReactNode;
}
export type { DividerProps, DividerType };
