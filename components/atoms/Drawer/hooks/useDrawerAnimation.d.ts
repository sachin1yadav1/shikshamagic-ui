/// <reference types="react" />
import { DrawerProps } from '../types';
declare const useDrawerAnimation: ({ drawerVisible, drawerRef, backdropRef, position, onAnimationComplete, onReverseAnimationComplete, }: {
    drawerVisible: boolean;
    drawerRef: React.RefObject<HTMLDivElement>;
    backdropRef: React.RefObject<HTMLDivElement>;
    position: Pick<DrawerProps, 'position'>['position'];
    onAnimationComplete?: (() => void) | undefined;
    onReverseAnimationComplete?: (() => void) | undefined;
}) => {
    timeline: import("react").MutableRefObject<gsap.core.Timeline | undefined>;
};
export default useDrawerAnimation;
