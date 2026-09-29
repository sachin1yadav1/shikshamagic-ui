/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { BasePresetSizeTypes, SizeVariants } from '../../../types/sizes';
export type SwitchSizeType = BasePresetSizeTypes;
export type SwitchColor = React.CSSProperties['color'];
export type SwitchSizes = Extract<keyof typeof SizeVariants, 'sm' | 'md'>;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    variant: PresetColors;
    size?: SwitchSizes;
    color?: SwitchColor;
    disabled?: boolean;
    loading?: boolean;
    description?: string;
    children?: React.ReactNode;
}
