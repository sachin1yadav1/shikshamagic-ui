/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { SizeVariants } from '../../../types/sizes';
import { DefaultColorsTypes } from '../../../utilities/constants';
export type RadioSizes = Extract<keyof typeof SizeVariants, 'sm' | 'md'>;
interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    variant?: PresetColors;
    size?: RadioSizes;
    color?: DefaultColorsTypes;
    loading?: boolean;
    children?: React.ReactNode;
    description?: string;
}
export { RadioProps };
