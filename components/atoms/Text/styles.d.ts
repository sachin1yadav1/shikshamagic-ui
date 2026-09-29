import { DefaultTheme } from '../../../themes/theme';
import { TypographyAttributes } from '../../../types/typography';
import { TextProps } from './types';
export interface TextStyleValues {
    color: string;
    fontStyles: TypographyAttributes;
}
interface Props extends Partial<TextProps> {
    styleValues: (theme: DefaultTheme) => TextStyleValues;
}
export declare const useTextStyles: (data?: (Props & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import('../../../types/typography').Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export declare const useTestStyles: (data?: {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import('../../../types/typography').Typography;
        dark: boolean;
        scale: string;
    } | undefined;
} | undefined) => import("jss").Classes<string>;
export {};
