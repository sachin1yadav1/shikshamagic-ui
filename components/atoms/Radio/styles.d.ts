import { PresetColors } from '../../../types/colors';
import { RadioProps, RadioSizes } from './types';
interface Props extends Partial<RadioProps> {
    variant: PresetColors;
    size: RadioSizes;
}
export declare const useRadioStyles: (data?: (Props & {
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
