/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { IconName } from '../../../types/icons';
import { SizeVariants } from '../../../types/sizes';
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    size?: SizeVariants;
    variant?: PresetColors;
    type?: 'solid' | 'outline' | 'ghost' | 'flat';
    disabled?: boolean;
    loading?: boolean;
    icon?: IconName;
    iconSize?: number;
    iconPosition?: 'start' | 'end';
    children: React.ReactNode;
    action?: 'submit' | 'reset' | 'button';
}
