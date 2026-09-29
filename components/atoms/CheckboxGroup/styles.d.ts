import { CheckboxGroupDirectionType, CheckboxGroupProps } from './types';
interface Props extends Partial<CheckboxGroupProps> {
    direction: CheckboxGroupDirectionType;
}
export declare const useCheckboxGroupStyles: (data?: (Props & {
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
