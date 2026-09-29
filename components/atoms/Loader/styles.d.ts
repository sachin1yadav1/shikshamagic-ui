import { PresetColors } from '../../../types/colors';
import { LoaderProps, LoaderType } from './types';
type Props = Partial<LoaderProps> & {
    type: LoaderType;
    variant: PresetColors;
};
export declare const useLoaderStyles: (data?: (Props & {
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
