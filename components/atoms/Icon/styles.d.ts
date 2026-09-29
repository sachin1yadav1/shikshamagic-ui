import { IconProps } from './types';
interface Props extends Omit<IconProps, 'name'> {
}
declare const useIconStyles: (data?: (Props & {
    theme?: Jss.Theme | undefined;
}) | undefined) => import("jss").Classes<string>;
export default useIconStyles;
