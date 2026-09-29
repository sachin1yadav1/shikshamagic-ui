import { TabProps } from './types';
interface Props extends Partial<TabProps> {
    sliderOffset: number;
    sliderWidth: number;
    sliderHeight: number;
}
declare const useTabStyles: (data?: (Props & {
    theme?: {
        colors: import("../../../types/colors").Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export default useTabStyles;
