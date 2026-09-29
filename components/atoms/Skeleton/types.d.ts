export interface SkeletonBaseProps {
}
export interface SquareSkeletonProps extends SkeletonBaseProps {
    variant: 'square';
    side?: number;
}
export interface CircleSkeletonProps extends SkeletonBaseProps {
    variant: 'circle';
    radius?: number;
}
export interface TextSkeletonProps extends SkeletonBaseProps {
    variant?: 'text';
    lines?: number;
    maxWidth?: number;
    minWidth?: number;
    gap?: number;
}
export interface RectangleSkeletonProps extends SkeletonBaseProps {
    variant: 'rectangle';
    width?: number;
    height?: number;
}
export type SkeletonProps = SquareSkeletonProps | CircleSkeletonProps | TextSkeletonProps | RectangleSkeletonProps;
