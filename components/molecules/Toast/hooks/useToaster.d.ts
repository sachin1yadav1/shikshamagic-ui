import { DefaultToastOptions, Toast, ToastPosition } from '../types';
export declare const useToaster: (toastOptions?: DefaultToastOptions) => {
    toasts: Toast[];
    handlers: {
        updateHeight: (toastId: string, height: number) => void;
        startPause: () => void;
        endPause: () => void;
        calculateOffset: (toast: Toast, opts?: {
            reverseOrder?: boolean;
            gutter?: number;
            defaultPosition?: ToastPosition;
        }) => number;
    };
};
