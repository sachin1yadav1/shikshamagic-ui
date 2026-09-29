import { BaseColors } from '../types/colors';
import { ThemeFontFamilyType } from '../types/fontFamily';
import { PresetSizeTypes, Sizes } from '../types/sizes';
import { Typography } from '../types/typography';
export declare const baseTheme: {
    colors: import("../types/colors").Colors;
    fontFamily: ThemeFontFamilyType;
    sizes: Sizes;
    typography: Typography;
    dark: boolean;
    scale: string;
};
export type DefaultTheme = typeof baseTheme;
export type ThemeScaleType = Extract<PresetSizeTypes, 'sm' | 'md' | 'lg'>;
export type NewTheme = Partial<Omit<DefaultTheme, 'colors' | 'sizes' | 'typography' | 'borders' | 'fontFamily'> & {
    colors: Partial<BaseColors>;
    fontFamily?: ThemeFontFamilyType;
    sizes?: Partial<Sizes>;
    typography?: Partial<Typography>;
    scale?: ThemeScaleType;
}>;
export type UpdatedTheme = Omit<NewTheme, 'scale' | 'dark'>;
