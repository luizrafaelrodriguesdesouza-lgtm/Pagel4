import { ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  webpSrc?: string
  fallbackSrc?: string
}

export function OptimizedImage({
  src,
  webpSrc,
  fallbackSrc,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      {fallbackSrc && <source srcSet={fallbackSrc} type="image/jpeg" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn('object-cover', className)}
        {...props}
      />
    </picture>
  )
}
