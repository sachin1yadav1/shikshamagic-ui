import { DefaultTheme } from '../../../themes/theme';
import { AvatarStyleValues } from './styles';
import { AvatarProps } from './types';
declare function useAvatarStyleValues({ color, src, variant, fill }: AvatarProps): (theme: DefaultTheme) => AvatarStyleValues;
export { useAvatarStyleValues };
