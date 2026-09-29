/// <reference types="react" />
import { PresetColors } from '../../../types/colors';
import { DefaultColorsTypes } from '../../../utilities/constants';
type TextType = 'text' | 'heading' | 'paragraph';
type TextColor = PresetColors | DefaultColorsTypes;
type TextLevel = 1 | 2 | 3 | 4 | 5 | 6;
type TextElipsisMode = 'head' | 'middle' | 'tail' | 'clip';
type TextAlign = 'center' | 'inherit' | 'justify' | 'left' | 'right';
interface TextProps {
    type?: TextType;
    color?: TextColor;
    level?: TextLevel;
    size?: number;
    weight?: React.CSSProperties['fontWeight'];
    lineHeight?: React.CSSProperties['lineHeight'];
    fontFamily?: React.CSSProperties['fontFamily'];
    align?: TextAlign;
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
    noWrap?: boolean;
    elipsis?: boolean;
    elipsisMode?: TextElipsisMode;
    numberOfLines?: number;
    maxLettersCount?: number;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export type { TextAlign, TextColor, TextElipsisMode, TextLevel, TextProps, TextType, };
