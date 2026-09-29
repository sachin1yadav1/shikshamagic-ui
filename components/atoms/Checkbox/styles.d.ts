import { PresetColors } from '../../../types/colors';
import { CheckboxProps, CheckboxSizes } from './types';
export interface CheckboxStyleValues {
    primaryColor: string;
    bgColor: string;
    borderColor: string;
    checkmarkSize: number;
    checkmarkIconColor: string;
}
interface Props extends Partial<CheckboxProps> {
    variant: PresetColors;
    size: CheckboxSizes;
}
export declare const useCheckboxStyles: (data?: (Props & {
    theme?: {
        colors: import('../../../types/colors').Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export {};
