import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

/**
 * Combines two popular tailwind classname packages into a single helper that handles a variety of use-cases including formatting and specificity.
 *
 * https://www.npmjs.com/package/tailwind-merge
 * https://www.npmjs.com/package/clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}