/// <reference types="react" />
import { AvatarProps } from '../Avatar/types';
interface AvatarGroupProps extends Pick<AvatarProps, 'size' | 'shape'> {
    /**
     * The maximum number of avatars to show before +x.
     */
    maxCount?: number;
    children: React.ReactNode;
}
export type { AvatarGroupProps };
