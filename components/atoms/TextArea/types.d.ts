import React from 'react';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: 'flat' | 'outline' | 'default';
    label?: React.ReactNode;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
    valid?: boolean;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}
