import React from 'react';
import { PresetPositionTypes } from '../../../utilities/constants';
export interface TabItemProps {
    key: string;
    label: React.ReactNode;
    children: React.ReactNode;
    disabled?: boolean;
}
export interface TabProps {
    defaultActiveKey?: string;
    activeKey?: string;
    tabs: TabItemProps[];
    orientation?: Extract<PresetPositionTypes, 'left' | 'right' | 'top' | 'bottom'>;
    headerItemsPosition?: 'start' | 'center' | 'end' | 'justify';
    destroyInactiveTabPane?: boolean;
    gutter?: number;
    indicatorWeight?: number;
    showIndicator?: boolean;
    showDivider?: boolean;
    onTabClick?: (key: string) => void;
}
