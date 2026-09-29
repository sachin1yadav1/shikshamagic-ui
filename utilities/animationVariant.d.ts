import { PresetAnimationVariantsTypes } from './constants';
/**
 *
 * @param position animating based on 'top' | 'bottom' | 'left' | 'right' | 'center'
 * @param containerOffset offset based on the container position, default is 0
 * @param animationVariant animating specific to the variants 'fade' | 'slide' | 'zoom' | 'expand', for drawer variant, only 'slide' is applicable
 * @param childrenVariant child varians 'modal' | 'drawer' | 'popover' | 'dialog'
 * @returns gsap.TweenVars
 */
export default function generateAnimationVars(position: number | "top" | "right" | "bottom" | "left" | "center" | undefined, animationVariant: PresetAnimationVariantsTypes, childrenVariant?: 'modal' | 'drawer'): gsap.TweenVars;
