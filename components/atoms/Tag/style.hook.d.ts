import { DefaultTheme } from '../../../themes/theme';
import { TagStyleValues } from './styles';
import { TagProps } from './types';
declare const useTagStyleValues: ({ color, variant, fill }: Partial<TagProps>) => (theme: DefaultTheme) => TagStyleValues;
export { useTagStyleValues };
