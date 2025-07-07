'use client';

import { useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'banner';
  fill?: boolean;
  skeleton?: boolean;
  onLoad?(): void;
  onError?(): void;
}

const aspectRatioClasses = {
  auto: 'aspect-auto',
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  banner: 'aspect-[2.39/1]',
};

export function OptimizedImage({
  src,
  alt,
  className,
  imgClassName,
  aspectRatio = 'auto',
  fill = false,
  skeleton = true,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState<OptimizedImageProps['src']>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    setImgSrc('/placeholder.svg');
    onError?.();
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        !fill && aspectRatioClasses[aspectRatio],
        className,
      )}
    >
      <Image
        src={imgSrc}
        alt={alt}
        className={cn(
          'object-cover duration-700 ease-in-out',
          isLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm',
          error ? 'grayscale' : '',
          imgClassName,
        )}
        fill={fill}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      {skeleton && !isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-800" />
      )}
    </div>
  );
}
