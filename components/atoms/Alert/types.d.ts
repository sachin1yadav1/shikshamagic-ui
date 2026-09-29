/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { DefaultFillType } from '../../../utilities/constants';
import { ButtonProps } from '../Button/types';
export declare const PresetAlertTextColors: readonly ["default", "color"];
interface AlertProps {
    title?: React.ReactNode;
    message: React.ReactNode;
    icon?: React.ReactNode;
    variant?: PresetColors;
    fill?: DefaultFillType;
    visible?: boolean;
    allowClose?: boolean;
    actions?: React.ReactElement<ButtonProps>[];
    onClose?: () => void;
}
export type { AlertProps };
