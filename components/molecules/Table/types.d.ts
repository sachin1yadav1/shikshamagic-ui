/// <reference types="react" />
import { DropdownItemProps, DropdownProps, DropdownValueType } from '../Dropdown/types';
export interface Column<T, K extends DropdownValueType = any> {
    title: string;
    dataIndex: keyof T;
    allowSorting?: boolean;
    render?: (key: keyof T, data: T) => JSX.Element;
    width?: number;
    fixed?: 'left' | 'right';
    filter?: {
        menu: Pick<DropdownProps<K>, 'menu'>['menu'];
        onFilter: (data: T, selectedOptions: DropdownItemProps<K>[]) => void;
    };
}
export interface TableProps<T extends {
    key: string;
}, K extends DropdownValueType = any> {
    dataSource: T[];
    columns: Column<T, K>[];
    renderRow?: (data: T, columnKey: keyof T) => JSX.Element;
    strippedRows?: boolean;
    rowsPerPage?: number;
    onPageChange?: (page: number) => void;
    width?: number;
    height?: number;
    stickyHeader?: boolean;
    rowSelection?: {
        selectedRowKeys?: string[];
        onSelect?: (selectedRowKeys: string[], selectedRows: T[]) => void;
        onSelectAll?: (selectedRowKeys: string[], selectedRows: T[]) => void;
        selections?: {
            key: string;
            text: string;
            onSelect: (selectedRowKeys: string[], selectedRows: T[]) => void;
        }[];
    };
    expandable?: {
        renderExpandedRow: (record: T) => JSX.Element;
        expandedRowKeys?: string[];
    };
}
