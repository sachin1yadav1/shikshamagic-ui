/// <reference types="react" />
import { DropdownValueType } from '../../../components/molecules/Dropdown/types';
import { TableProps } from './types';
declare function Table<T extends {
    key: string;
}, K extends DropdownValueType>({ dataSource, columns, renderRow, strippedRows, rowsPerPage, onPageChange, width, height, stickyHeader, rowSelection, expandable, }: TableProps<T, K>): JSX.Element;
export default Table;
