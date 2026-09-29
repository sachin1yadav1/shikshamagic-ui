/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { SizeVariants } from '../../../types/sizes';
import { DefaultColorsTypes, DefaultFillType } from '../../../utilities/constants';
type AvatarShapeType = 'circle' | 'square';
export type AvatarSizes = SizeVariants;
interface AvatarProps {
    name?: string;
    src?: string | React.ReactNode;
    icon?: React.ReactNode;
    shape?: AvatarShapeType;
    variant?: PresetColors;
    color?: DefaultColorsTypes;
    size?: AvatarSizes;
    fill?: DefaultFillType;
    maxLettersCount?: number;
    badge?: React.ReactNode;
    label?: React.ReactNode;
    description?: React.ReactNode;
    onClick?: () => void;
}
export type { AvatarProps, AvatarShapeType };
