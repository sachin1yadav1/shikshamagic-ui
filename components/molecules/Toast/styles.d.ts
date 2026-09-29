import { CheckmarkTheme, ErrorTheme } from './types';
export declare const useCheckmarkIconStyles: (data?: (CheckmarkTheme & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export declare const useErrorIconStyles: (data?: (ErrorTheme & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export declare const useToastIconStyles: (data?: ({
    colors: import("../../../types/colors").Colors;
    fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
    sizes: import("../../../types/sizes").Sizes;
    typography: import("../../../types/typography").Typography;
    dark: boolean;
    scale: string;
} & {
    theme?: Jss.Theme | undefined;
}) | undefined) => import("jss").Classes<string>;
export declare const useToasterStyles: (data?: {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
} | undefined) => import("jss").Classes<string>;
