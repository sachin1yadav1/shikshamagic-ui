/// <reference types="react" />
import { DefaultColorsTypes } from 'libs/design-system/src/utilities/constants';
import { PresetColors } from '../../../types/colors';
type BadgePosition = {
    top?: React.CSSProperties['top'] | 'auto';
    right?: React.CSSProperties['right'] | 'auto';
    bottom?: React.CSSProperties['bottom'] | 'auto';
    left?: React.CSSProperties['left'] | 'auto';
};
interface BadgeProps {
    variant?: PresetColors;
    size?: number;
    position?: BadgePosition;
    fontSize?: number;
    count?: number;
    overflowCount?: number;
    color?: DefaultColorsTypes;
    showZero?: boolean;
    showDot?: boolean;
    children?: React.ReactNode;
}
export type { BadgePosition, BadgeProps };
