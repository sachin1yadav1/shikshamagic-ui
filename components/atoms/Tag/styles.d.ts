import { DefaultTheme } from '../../../themes/theme';
import { TagProps, TagSizes } from './types';
export interface TagStyleValues {
    primaryColor: string;
    bgColor: string;
    borderColor: string;
}
interface Props extends Partial<TagProps> {
    size: TagSizes;
    styleValues: (theme: DefaultTheme) => TagStyleValues;
}
export declare const useTagStyles: (data?: (Props & {
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
