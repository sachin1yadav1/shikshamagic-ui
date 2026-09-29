/// <reference types="react" />
import { PresetAnimationVariantsTypes, PresetPositionTypes } from '../../../utilities/constants';
export interface DefaultModalProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly type?: 'success' | 'delete' | 'warning';
    readonly open: boolean;
    readonly title: string;
    readonly subtitle?: string;
    readonly children: JSX.Element;
    readonly header?: JSX.Element;
    readonly actions?: React.ReactNode[];
    readonly keyboard?: boolean;
    readonly closable?: boolean;
    readonly allowback?: boolean;
    /** types related to modal position*/
    readonly position?: Extract<PresetPositionTypes, 'top' | 'bottom' | 'left' | 'right' | 'center'>;
    /** animation */
    readonly animation?: PresetAnimationVariantsTypes;
    readonly onCancel: () => void;
    readonly onOk?: () => void;
    readonly onVisible?: () => void;
    readonly onClose?: () => void;
    readonly onComplete?: () => void;
    readonly onBack?: () => void;
}
export type ModalProps = DefaultModalProps;
