/// <reference types="react" />
import { SelectInputProps } from '../Input/types';
/**
 * TODO: label -> can be anything (like a string, number, or generally a react node)
 * TODO: value -> generics
 */
export type OptionValue = any;
export interface OptionType<T extends OptionValue> {
    label: React.ReactNode;
    value: T;
    disabled?: boolean;
}
export interface OptionWithKey<T extends OptionValue> extends OptionType<T> {
    key: string;
}
export interface OptionTypeReturn {
    label: string;
    value: OptionValue;
}
export interface SelectProps<T extends OptionValue> extends Omit<SelectInputProps, 'value' | 'defaultValue' | 'onSelect'> {
    /** uniques */
    options: OptionType<T>[];
    renderOptionItem?: (item: OptionType<T>, index?: number) => React.ReactNode;
    multiSelect?: boolean;
    defaultValue?: T[];
    allowSearch?: boolean;
    allowTagWrap?: boolean;
    allowTagScroll?: boolean;
    emptyListComponent?: React.ReactNode;
    dropDownPosition?: 'top' | 'bottom';
    dropDownClassName?: string;
    dropDownStyle?: React.CSSProperties;
    onSelect?: (value: T[], option: OptionType<T>[]) => void;
}
