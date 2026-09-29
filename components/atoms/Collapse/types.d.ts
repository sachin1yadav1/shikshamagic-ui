/// <reference types="react" />
import { PresetPositionTypes } from '../../../utilities/constants';
export interface CollapseSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}
export interface CollapseProps {
    variant: 'outlined' | 'ghost';
    accordionMode?: boolean;
    toggleButtonOrientation?: Extract<PresetPositionTypes, 'left' | 'right'>;
    sections: CollapseSectionProps[];
    disabled?: string[];
    initiallyExpanded?: string[];
    disabledAll?: boolean;
    expandAll?: boolean;
    onChange?: (id: string) => void;
}
