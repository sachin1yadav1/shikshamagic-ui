/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { SizeVariants } from '../../../types/sizes';
import { DefaultColorsTypes } from '../../../utilities/constants';
export type TagFillType = 'default' | 'solid' | 'transparent';
export type TagSizes = Exclude<keyof typeof SizeVariants, '2xs'>;
export interface TagProps {
    variant?: PresetColors;
    size?: TagSizes;
    color?: DefaultColorsTypes;
    bordered?: boolean;
    fill?: TagFillType;
    icon?: React.ReactNode;
    closeIcon?: React.ReactNode;
    rounded?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
}
