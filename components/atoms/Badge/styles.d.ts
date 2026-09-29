import { BadgePosition, BadgeProps } from './types';
import { PresetColors } from '../../../types/colors';
import { DefaultTheme } from '../../../themes/theme';
import { DefaultColorsTypes } from '../../../utilities/constants';
export interface BadgeStyleValues {
    primaryColor: string;
}
interface Props extends Partial<BadgeProps> {
    variant: PresetColors;
    size: number;
    fontSize: number;
    count: number;
    overflowCount: number;
    badgeCount: string | number;
    position: BadgePosition;
    color?: DefaultColorsTypes;
    showZero: boolean;
    showDot: boolean;
    styleValues: (theme: DefaultTheme) => BadgeStyleValues;
}
export declare const useBadgeStyles: (data?: (Props & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export {};
