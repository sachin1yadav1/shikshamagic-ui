/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { DefaultColorsTypes } from 'libs/design-system/src/utilities/constants';
import { RadioOptionValueType } from '../Radio/types';
interface RadioOption {
    label: React.ReactNode;
    value: RadioOptionValueType;
    disabled?: boolean;
}
type RadioOptionType = string[] | number[] | RadioOption[];
type RadioGroupDirectionType = 'horizontal' | 'vertical';
interface RadioGroupProps {
    name?: string;
    variant?: PresetColors;
    color?: DefaultColorsTypes;
    options?: RadioOption[];
    defaultValue?: RadioOptionValueType;
    value?: RadioOptionValueType;
    direction?: RadioGroupDirectionType;
    disabled?: boolean;
    onChange?: (value: RadioOptionValueType) => void;
    wrapperClassName?: string;
}
export { RadioGroupDirectionType, RadioGroupProps, RadioOption, RadioOptionType, RadioOptionValueType, };
