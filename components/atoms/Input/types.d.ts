import React, { HTMLInputTypeAttribute } from 'react';
import { SizeVariants } from '../../../types/sizes';
import CountryCodes from '../../../utilities/countryCode';
export type CountryCodesType = keyof typeof CountryCodes;
type InputType = Extract<HTMLInputTypeAttribute, 'text' | 'search' | 'number'>;
export type InputSizeVariants = Exclude<SizeVariants, '2xs' | 'xs'>;
export interface InputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'defaultChecked' | 'checked' | 'type' | 'step' | 'size'> {
    size?: InputSizeVariants;
    type?: InputType | undefined;
    allowClear?: boolean;
    selectOnFocus?: boolean;
    step?: number;
    description?: string;
    valid?: boolean;
    errorMessage?: string;
    label?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    containerStyle?: React.CSSProperties;
}
export interface PhoneInputProps extends Omit<InputProps, 'type'> {
    defaultCountryCode?: CountryCodesType;
    allowSearch?: boolean;
    onChangeCountryCode?: (countryCode: string) => void;
}
type TagProps = {
    label: React.ReactNode;
    key: string;
};
export interface SelectInputProps extends InputProps {
    tags?: TagProps[];
    allowTagsOverflow?: boolean;
    onKeyPress?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    onTagClose?: (tag: TagProps) => void;
    onClear?: () => void;
}
export interface InputRefType extends HTMLDivElement {
    focus: () => void;
    blur: () => void;
}
export {};
