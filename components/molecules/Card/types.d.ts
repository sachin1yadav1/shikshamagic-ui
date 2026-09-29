/// <reference types="react" />
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    heading?: string;
    subheading?: string;
    cover?: React.ReactNode;
    extra?: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    direction?: 'row' | 'column';
    outlined?: boolean;
}
export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
    heading: string;
    subheading?: string;
    avatar: string;
    extra?: React.ReactNode;
    outlined?: boolean;
    avatarSize?: number;
}
