import { PresetSizes } from '../utilities/constants';
type PresetSizeTypes = keyof typeof PresetSizes;
type BasePresetSizeTypes = Extract<PresetSizeTypes, 'sm' | 'md' | 'lg'>;
declare const SizeVariants: {
    readonly '2xs': "2xs";
    readonly xs: "xs";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
};
type SizeVariants = (typeof SizeVariants)[keyof typeof SizeVariants];
type GeneratedSizeVariants<T extends 'size'> = `${T}0` | `${T}1` | `${T}2` | `${T}3` | `${T}4` | `${T}5` | `${T}6` | `${T}7` | `${T}8` | `${T}9` | `${T}10` | `${T}11` | `${T}12` | `${T}13` | `${T}14` | `${T}15` | `${T}16` | `${T}17` | `${T}18` | `${T}19` | `${T}20` | `${T}21` | `${T}22` | `${T}23` | `${T}24` | `${T}25` | `${T}26` | `${T}27` | `${T}28` | `${T}29` | `${T}30` | `${T}31` | `${T}32`;
type GeneratedBorderVariants<T extends 'border'> = `${T}0` | `${T}1` | `${T}2` | `${T}3`;
type Sizes = Record<GeneratedSizeVariants<'size'> | GeneratedBorderVariants<'border'>, number>;
export { BasePresetSizeTypes, GeneratedSizeVariants, PresetSizeTypes, Sizes, SizeVariants, };
