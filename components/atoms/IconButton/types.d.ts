/// <reference types="react" />
import { PresetColorsTypes } from '../../../utilities/constants';
import { IconProps } from '../Icon/types';
interface IconButtonIconProps {
    iconName: IconProps['name'];
    iconSize?: IconProps['size'];
    iconColor?: IconProps['color'];
}
export interface IconButtonProps extends IconButtonIconProps, React.HTMLAttributes<HTMLButtonElement> {
    colorVariant?: PresetColorsTypes;
    disabled?: boolean;
    onClick?: () => void;
}
export {};
