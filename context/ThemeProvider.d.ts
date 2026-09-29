import React from 'react';
import { DefaultTheme, NewTheme, UpdatedTheme } from '../themes/theme';
import { BaseColors } from '../types/colors';
import { ThemeFontFamilyType } from '../types/fontFamily';
import { Sizes } from '../types/sizes';
import { Typography } from '../types/typography';
export interface IUseTheme {
    theme: DefaultTheme;
    updateColors: (colors: Partial<BaseColors>) => void;
    updateFontFamily: (fontFamily: ThemeFontFamilyType) => void;
    updateSizes: (sizes: Partial<Sizes>) => void;
    updateTypography: (typography: Partial<Typography>) => void;
    createTheme: (customizations?: NewTheme) => void;
    updateTheme: (customizations?: UpdatedTheme) => void;
}
export declare const useTheme: () => IUseTheme;
interface IThemeProviderProps {
    children: React.ReactNode;
}
export declare const ThemeProvider: React.FC<IThemeProviderProps>;
export {};
