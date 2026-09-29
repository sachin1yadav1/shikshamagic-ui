import { PresetColors } from '../../../types/colors';
import { SwitchProps, SwitchSizes } from './types';
interface Props extends Partial<SwitchProps> {
    variant: PresetColors;
    size: SwitchSizes;
}
export declare const useSwitchStyles: (data?: (Props & {
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
