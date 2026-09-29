/**
 * Check if a string is a valid color
 * @param colorString - The color string to check
 * @returns - A boolean indicating if the color is valid
 * @example
 * const color = '#fff';
 * const isValid = isValidColor(color); // true
 * @example
 * const color = 'red';
 * const isValid = isValidColor(color); // true
 * @example
 * const color = 'invalid';
 * const isValid = isValidColor(color); // false
 */
export declare const isValidColor: (colorString: string) => boolean;
