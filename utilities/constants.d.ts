/// <reference types="react" />
export declare const THEME_SCALE_RATIO = 1.125;
export declare const PresetColorsArr: readonly ["primary", "secondary", "success", "error", "warning", "info"];
export type PresetColorsTypes = (typeof PresetColorsArr)[number];
export type DefaultColorsTypes = React.CSSProperties['color'];
export declare const PresetTypographyArr: readonly ["heading", "label", "text", "bold", "border"];
/**
 * @description Preset sizes and its types
 */
export declare enum PresetSizes {
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    x2l = "x2l",
    x3l = "x3l",
    x4l = "x4l",
    x5l = "x5l"
}
export declare const PresetSizesArr: PresetSizes[];
export type PresetSizesTypes = keyof typeof PresetSizes;
/**
 * @description Position presets and its types
 */
export declare enum PresetPosition {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right",
    center = "center",
    inside = "inside",
    outside = "outside",
    float = "float",
    contraint = "contraint"
}
export declare const PresetPositionArr: PresetPosition[];
export type PresetPositionTypes = keyof typeof PresetPosition;
/**
 * @description Structure variants and its types
 */
export declare const StructureVariants: readonly ["filled", "outlined", "ghost"];
export type StructureVariantTypes = (typeof StructureVariants)[number];
/**
 * @description Modal variants and its types
 */
export declare enum PresetAnimationVariants {
    fade = "fade",
    slide = "slide",
    zoom = "zoom",
    expand = "expand"
}
export declare const PresetAnimationVariantsArray: PresetAnimationVariants[];
export type PresetAnimationVariantsTypes = keyof typeof PresetAnimationVariants;
/**
 * @description Default Component fill types
 */
export declare const DefaultFillTypesArr: readonly ["default", "solid"];
export type DefaultFillType = (typeof DefaultFillTypesArr)[number];
