/// <reference types="react" />
import { PopoverProps } from '../../../components/atoms/Popover/types';
export type DropdownValueType = string | number | Record<string, any>;
export interface DropdownItemProps<T extends DropdownValueType = any> {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    value?: T;
}
export interface DefaultMenuProps<T extends DropdownValueType = any> extends DropdownItemProps<T> {
    type?: 'default';
}
export interface DividerMenuProps {
    type: 'divider';
}
export interface DropdownProps<T extends DropdownValueType = any> extends Pick<PopoverProps, 'position'> {
    readonly open: boolean;
    readonly menu: {
        header?: React.ReactNode;
        items: Array<DefaultMenuProps<T> | DividerMenuProps>;
    };
    readonly children: React.ReactElement;
    readonly onClose?: () => void;
    readonly onClick?: ({ item, key, }: {
        item: DefaultMenuProps<T>;
        key: string;
    }) => void;
}
