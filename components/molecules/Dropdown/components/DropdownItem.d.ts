import React from 'react';
import { DropdownItemProps } from '../types';
declare const DropdownItem: ({ label, icon, isSelected, ...defaultProps }: DropdownItemProps<any> & React.HTMLAttributes<HTMLDivElement> & {
    isSelected?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default DropdownItem;
