import { ColorVariants } from '../types/colors';
/**
 *
 * @param  {string} color - A color in hex, rgb, or hsl format.
 * @param {'primary' | 'secondary' | string} prefix  - The name of the color variation. Defaults to 'color'.
 * @returns {Record<ColorVariants<T>, string>} - An object containing the color variations.
 */
export declare const generateColorVariations: <T extends "primary" | "secondary">(color: string, prefix?: T) => Record<ColorVariants<T>, string>;
/**
 *
 * @param base  - The base color to mix with.
 * @param color  - The color to mix with the base color. Defaults to 'white'.
 * @param ratio  - The ratio of the mix. Defaults to 0.9.
 * @returns  - A color in hex format.
 */
export declare const generateFillVariation: (base: string, color?: string, ratio?: number) => string;
/**
 *
 * @param hex - A color in hex format.
 * @returns r, g, b - The red, green, and blue values of the color.
 */
export declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
} | null;
