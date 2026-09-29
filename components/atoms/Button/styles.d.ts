import { PresetColors } from '../../../types/colors';
import { SizeVariants } from '../../../types/sizes';
import { ButtonProps } from './types';
interface Props extends Partial<ButtonProps> {
    variant: PresetColors;
    size: SizeVariants;
}
declare const useButtonStyles: (data?: (Props & {
    theme?: {
        colors: import('../../../types/colors').Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import('../../../types/sizes').Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export default useButtonStyles;
