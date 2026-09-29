import { Colors } from '../../../types/colors';
interface Props {
    indicatorSize?: number;
    arrowColor?: string | Colors;
    hideArrow?: boolean;
    defaultPosition: 'top' | 'bottom' | 'left' | 'right';
    indicatorAlignment: 'start' | 'center' | 'end';
}
declare const usePopoverStyles: (data?: (Props & {
    theme?: {
        colors: Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
/** testing trigger styles */
declare const useTestTriggerStyles: (data?: (Props & {
    theme?: {
        colors: Colors;
        fontFamily: import("../../../types/fontFamily").ThemeFontFamilyType;
        sizes: import("../../../types/sizes").Sizes;
        typography: import("../../../types/typography").Typography;
        dark: boolean;
        scale: string;
    } | undefined;
}) | undefined) => import("jss").Classes<string>;
export { usePopoverStyles, useTestTriggerStyles };
