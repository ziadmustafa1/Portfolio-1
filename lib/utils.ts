import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates a throttled function that only invokes the provided function 
 * at most once per every `wait` milliseconds.
 * 
 * @param func The function to throttle
 * @param wait The number of milliseconds to throttle invocations to
 * @returns A new, throttled, function
 */
export function throttle<Args extends unknown[], Return>(
  func: (...args: Args) => Return,
  wait: number
): (...args: Args) => Return {
  let lastCallTime = 0;
  let timeoutId: NodeJS.Timeout | null = null;
  
  return function throttled(...args: Args): Return {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;
    
    if (timeSinceLastCall >= wait) {
      lastCallTime = now;
      return func(...args);
    } else {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          lastCallTime = Date.now();
          timeoutId = null;
          func(...args);
        }, wait - timeSinceLastCall);
      }
      return func(...args);
    }
  };
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after `wait` milliseconds have elapsed since the last time it was invoked.
 * 
 * @param func The function to debounce
 * @param wait The number of milliseconds to delay
 * @returns A new, debounced, function
 */
export function debounce<Args extends unknown[], Return>(
  func: (...args: Args) => Return,
  wait: number
): (...args: Args) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  
  return function debounced(...args: Args): void {
    const later = () => {
      timeoutId = null;
      func(...args);
    };
    
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(later, wait);
  };
}
