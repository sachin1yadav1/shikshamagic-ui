/// <reference types="react" />
import { PresetPositionTypes } from '../../../utilities/constants';
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
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
    readonly position?: Extract<PresetPositionTypes, 'left' | 'right'>;
    readonly onCancel: () => void;
    readonly onOk?: () => void;
    readonly onVisible?: () => void;
    readonly onClose?: () => void;
    readonly onComplete?: () => void;
    readonly onBack?: () => void;
}
