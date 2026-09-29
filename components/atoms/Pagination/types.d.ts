export interface PaginationProps {
    totalPages: number;
    defaultCurrentPage?: number;
    defaultPageSize?: number;
    defaultPaginationSize?: number;
    pageShift?: number;
    onChange?: (currentPage: number) => void;
}
