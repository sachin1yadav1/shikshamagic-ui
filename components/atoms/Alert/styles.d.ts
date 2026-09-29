/// <reference types="react" />
import { DefaultTheme } from '../../../themes/theme';
import { PresetColors } from '../../../types/colors';
import { DefaultFillType } from '../../../utilities/constants';
import { AlertProps } from './types';
export interface AlertStyleValues {
    primaryColor: string;
    bgColor: string;
    borderColor: string;
}
interface Props extends Partial<AlertProps> {
    icon: React.ReactNode;
    variant: PresetColors;
    fill: DefaultFillType;
    styleValues: (theme: DefaultTheme) => AlertStyleValues;
}
export declare const useAlertStyles: (data?: (Props & {
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
