/// <reference types="react" />
type FontFamilyType = React.CSSProperties['fontFamily'] | string;
interface ThemeFontFamilyType {
    default: FontFamilyType;
    number: FontFamilyType;
    symbol: FontFamilyType;
}
export type { FontFamilyType, ThemeFontFamilyType };
