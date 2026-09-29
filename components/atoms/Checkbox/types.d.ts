/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { SizeVariants } from '../../../types/sizes';
import { DefaultColorsTypes } from '../../../utilities/constants';
export type CheckboxSizes = Extract<keyof typeof SizeVariants, 'sm' | 'md'>;
interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    variant?: PresetColors;
    size?: CheckboxSizes;
    color?: DefaultColorsTypes;
    loading?: boolean;
    children?: React.ReactNode;
    intermediate?: boolean;
    description?: string;
}
export type { CheckboxProps };
