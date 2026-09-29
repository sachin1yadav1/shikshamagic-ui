import { InputProps, InputSizeVariants, SelectInputProps } from './types';
interface Props extends Partial<InputProps> {
    size: InputSizeVariants;
}
interface SelectInputStylesProps extends Partial<SelectInputProps> {
    size: InputSizeVariants;
}
interface PhoneInputStylesProps extends Partial<SelectInputProps> {
    size: InputSizeVariants;
}
declare const useBaseInputStyles: (data?: (Props & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
declare const useSelectInputStyles: (data?: (SelectInputStylesProps & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
declare const usePhoneInputStyles: (data?: (PhoneInputStylesProps & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export { useBaseInputStyles, usePhoneInputStyles, useSelectInputStyles };
