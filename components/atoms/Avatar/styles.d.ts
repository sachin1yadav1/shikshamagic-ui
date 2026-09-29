import { DefaultTheme } from '../../../themes/theme';
import { PresetColors } from '../../../types/colors';
import { DefaultColorsTypes, DefaultFillType } from '../../../utilities/constants';
import { AvatarProps, AvatarSizes } from './types';
export interface AvatarStyleValues {
    primaryColor: string;
    bgColor: string;
    borderColor: string;
}
interface Props extends Partial<AvatarProps> {
    variant?: PresetColors;
    size: AvatarSizes;
    color?: DefaultColorsTypes;
    fill?: DefaultFillType;
    styleValues: (theme: DefaultTheme) => AvatarStyleValues;
}
declare const useAvatarStyles: (data?: (Props & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export default useAvatarStyles;
