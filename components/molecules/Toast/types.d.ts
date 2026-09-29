import { CSSProperties } from 'react';
export declare const ToastTypesArr: readonly ["success", "error", "info", "warning", "loading", "blank", "custom"];
export type ToastType = (typeof ToastTypesArr)[number];
export declare const ToastPositionsArr: readonly ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
export type ToastPosition = (typeof ToastPositionsArr)[number];
export type Renderable = JSX.Element | string | null;
export interface IconTheme {
    primary: string;
    secondary: string;
}
export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;
export declare const resolveValue: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg) => TValue;
export interface Toast {
    type: ToastType;
    id: string;
    message: ValueOrFunction<Renderable, Toast>;
    icon?: Renderable;
    duration?: number;
    pauseDuration: number;
    position?: ToastPosition;
    ariaProps: {
        role: 'status' | 'alert';
        'aria-live': 'assertive' | 'off' | 'polite';
    };
    style?: CSSProperties;
    className?: string;
    iconTheme?: IconTheme;
    createdAt: number;
    visible: boolean;
    height?: number;
}
export type ToastOptions = Partial<Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'>>;
export type DefaultToastOptions = ToastOptions & {
    [key in ToastType]?: ToastOptions;
};
export interface ToasterProps {
    position?: ToastPosition;
    toastOptions?: DefaultToastOptions;
    reverseOrder?: boolean;
    gutter?: number;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    children?: (toast: Toast) => JSX.Element;
}
export interface ToastWrapperProps {
    id: string;
    className?: string;
    style?: React.CSSProperties;
    onHeightUpdate: (id: string, height: number) => void;
    children?: React.ReactNode;
}
export interface CheckmarkTheme {
    primary?: string;
    secondary?: string;
}
export interface ErrorTheme {
    primary?: string;
    secondary?: string;
}
export interface WrapperProps {
    className?: string;
    children: React.ReactNode;
}
export interface ToastBarProps {
    toast: Toast;
    position?: ToastPosition;
    style?: React.CSSProperties;
    children?: (components: {
        icon: Renderable;
        message: Renderable;
    }) => Renderable;
}
export interface ToastBarAnimationStyleProps {
    factor?: number;
    style: React.CSSProperties;
}
