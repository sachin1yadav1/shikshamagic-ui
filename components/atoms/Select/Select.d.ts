import React from 'react';
import { OptionValue, SelectProps } from './types';
declare function Select<T extends OptionValue>(props: SelectProps<T>, ref: React.ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare const _default: <T extends unknown>(props: SelectProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement> | undefined;
}) => ReturnType<typeof Select>;
export default _default;
