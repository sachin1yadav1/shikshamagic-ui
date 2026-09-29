/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { DefaultColorsTypes } from '../../../utilities/constants';
type CheckboxOptionValueType = string | number;
interface CheckboxOption {
    label: React.ReactNode;
    value: CheckboxOptionValueType;
    disabled?: boolean;
}
type CheckboxOptionType = string[] | number[] | CheckboxOption[];
type CheckboxValueType = CheckboxOptionValueType | boolean;
type CheckboxGroupDirectionType = 'horizontal' | 'vertical';
interface CheckboxGroupProps {
    name?: string;
    variant?: PresetColors;
    color?: DefaultColorsTypes;
    options?: CheckboxOption[];
    defaultValue?: CheckboxOptionValueType[];
    value?: CheckboxValueType[];
    direction?: CheckboxGroupDirectionType;
    disabled?: boolean;
    onChange?: (checkedValues: CheckboxValueType[]) => void;
    wrapperClassName?: string;
}
export { CheckboxGroupDirectionType, CheckboxGroupProps, CheckboxOption, CheckboxOptionType, CheckboxOptionValueType, CheckboxValueType, };
