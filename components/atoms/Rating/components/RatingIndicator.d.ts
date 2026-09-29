import { RatingProps } from '../types';
declare function RatingIndicator({ gutter, size, color, readonly, index, value, onHover, onChange, }: Pick<RatingProps, 'readonly' | 'color' | 'gutter' | 'size' | 'onChange'> & {
    value: number;
    index: number;
    onHover: (value: number) => void;
}): import("react/jsx-runtime").JSX.Element;
export default RatingIndicator;
