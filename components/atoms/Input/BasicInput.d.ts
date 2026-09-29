import React from 'react';
import { InputProps, InputRefType } from './types';
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<InputRefType>>;
export default Input;
