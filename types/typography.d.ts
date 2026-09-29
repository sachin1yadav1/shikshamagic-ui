import { PresetTypographyArr } from '../utilities/constants';
type PresetTypographySizes = Exclude<(typeof PresetTypographyArr)[number], 'bold' | 'border'>;
type TypographyAttributes = {
    fontSize: number;
    lineHeight: number;
};
type GeneratedTypographyVariants<T extends PresetTypographySizes> = `${T}1` | `${T}2` | `${T}3` | `${T}4` | `${T}5` | `${T}6`;
type BaseTypography = GeneratedTypographyVariants<PresetTypographySizes>;
type GeneratedTypographyBoldVariants<T extends 'bold'> = `${T}100` | `${T}200` | `${T}300` | `${T}400` | `${T}500` | `${T}600` | `${T}700` | `${T}800` | `${T}900`;
type TypographyFontSize = Record<BaseTypography, TypographyAttributes>;
type TypographyFontWeight = Record<GeneratedTypographyBoldVariants<'bold'>, number>;
type Typography = {
    text: TypographyFontSize;
    weight: TypographyFontWeight;
};
export { BaseTypography, GeneratedTypographyBoldVariants, GeneratedTypographyVariants, PresetTypographySizes, Typography, TypographyAttributes, TypographyFontSize, TypographyFontWeight, };
