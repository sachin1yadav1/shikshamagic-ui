import { Colors } from '../../../types/colors';
import { PresetSizeTypes } from '../../../types/sizes';
export interface RatingProps {
    initialValue: number;
    maxValue?: number;
    gutter?: number;
    size?: Extract<PresetSizeTypes, 'sm' | 'md' | 'lg'>;
    color?: string | Colors;
    readonly?: boolean;
    onChange?: (value: number) => void;
}
