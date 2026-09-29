import { PresetSizeTypes } from '../types/sizes';
/**
 *
 * @param size Size presets defined in PresetSizes
 * @param baseSize base size to start with, default is 10
 * @param baseRatio multiplier with base size to get the size, default is 0.5
 * @param ratioShift size shift when size is increased, default is 0.3
 * @returns number
 */
export declare function generateSizeVariations(size: PresetSizeTypes, baseSize?: number, baseRatio?: number, ratioShift?: number): number;
