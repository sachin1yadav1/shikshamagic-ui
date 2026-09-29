import { PresetColors } from '../../../types/colors';
import { DefaultColorsTypes } from '../../../utilities/constants';
export declare const Loaders: {
    readonly dots: "dots";
    readonly ring: "ring";
    readonly three_dots: "three_dots";
    readonly blocks: "blocks";
    readonly rotating_lines: "rotating_lines";
    readonly signal: "signal";
};
export type LoaderNames = (typeof Loaders)[keyof typeof Loaders];
export interface LoaderProps {
    size?: number;
    color?: PresetColors | DefaultColorsTypes;
    type: LoaderNames;
}
