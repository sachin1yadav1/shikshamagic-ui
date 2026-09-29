import React from 'react';
/** backdrop for both default and nested modals */
declare const Backdrop: React.ForwardRefExoticComponent<Required<{
    children?: React.ReactNode;
}> & {
    onClick?: ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
export default Backdrop;
