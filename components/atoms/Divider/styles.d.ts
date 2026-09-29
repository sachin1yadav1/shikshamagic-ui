import { DefaultTheme } from '../../../themes/theme';
import { DividerProps } from './types';
export interface DividerStyleValues {
    primaryColor: string;
    borderColor: string;
}
interface Props extends Partial<DividerProps> {
    styleValues: (theme: DefaultTheme) => DividerStyleValues;
}
export declare const useDividerStyles: (data?: (Props & {
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
