/// <reference types="react" />
import { IconName } from '../../../types/icons';
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: number;
    color?: string;
    name: IconName;
}
