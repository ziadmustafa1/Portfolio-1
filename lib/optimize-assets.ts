/**
 * Asset optimization utilities
 */

// Image format preference order based on browser support and performance
export const getOptimalImageFormat = (): 'avif' | 'webp' | 'png' | 'jpeg' => {
  if (typeof window === 'undefined') {
    // Default for SSR
    return 'webp';
  }

  // Check for AVIF support
  const canUseAvif = document.createElement('canvas')
    .toDataURL('image/avif').indexOf('data:image/avif') === 0;
  
  if (canUseAvif) {
    return 'avif';
  }
  
  // Check for WebP support
  const canUseWebp = document.createElement('canvas')
    .toDataURL('image/webp').indexOf('data:image/webp') === 0;
  
  if (canUseWebp) {
    return 'webp';
  }
  
  // Fallback
  return 'png';
};

// Generate sizes attribute for responsive images
export const generateSizesAttribute = (
  mobile: string = '100vw',
  tablet: string = '50vw',
  desktop: string = '33vw'
): string => {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
};

// Calculate aspect ratio for proper CLS prevention
export function calculateAspectRatio(width: number, height: number): string {
  return `${width} / ${height}`;
}

// Generate a color-based blurDataURL
export function generateColorPlaceholder(hex: string = '#e2e8f0'): string {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Create an SVG with the color
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="rgb(${r},${g},${b})"/></svg>`;
  
  // Convert to base64
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// Helper for optimizing image loading priority
export const getPriorityForImage = (
  isAboveFold: boolean, 
  isHero: boolean = false,
  isLogo: boolean = false
): boolean => {
  // Hero images and logos should be loaded with priority
  if (isHero || isLogo) {
    return true;
  }
  
  // Images above the fold should typically be loaded with priority
  return isAboveFold;
};

// Validate image dimensions to enforce best practices
export function validateImageDimensions(
  width: number, 
  height: number, 
  maxWidth: number = 2000, 
  maxHeight: number = 2000
): { valid: boolean; message?: string } {
  if (width > maxWidth || height > maxHeight) {
    return {
      valid: false,
      message: `Image dimensions exceed recommended size (${maxWidth}x${maxHeight}px). Current size: ${width}x${height}px`
    };
  }
  
  return { valid: true };
}

// Calculate approx image file size based on dimensions for preload decision
export function estimateImageSize(width: number, height: number, format: string): number {
  // Rough estimates of bits per pixel based on format
  const bppMap: Record<string, number> = {
    'jpeg': 1.5,
    'jpg': 1.5,
    'png': 3,
    'webp': 0.9,
    'avif': 0.6
  };
  
  const bpp = bppMap[format.toLowerCase()] || 2;
  
  // Calculate size in KB
  return Math.round((width * height * bpp) / 8 / 1024);
} 