/// <reference types="react" />
import { ModalProps } from '../types';
declare const useModalAnimation: ({ modalVisible, modalRef, backdropRef, position, animation, onAnimationComplete, onReverseAnimationComplete, }: {
    modalVisible: boolean;
    modalRef: React.RefObject<HTMLDivElement>;
    backdropRef: React.RefObject<HTMLDivElement>;
    position: Pick<ModalProps, 'position'>['position'];
    animation: Pick<ModalProps, 'animation'>['animation'];
    onAnimationComplete?: (() => void) | undefined;
    onReverseAnimationComplete?: (() => void) | undefined;
}) => {
    timeline: import("react").MutableRefObject<gsap.core.Timeline | undefined>;
};
export default useModalAnimation;
