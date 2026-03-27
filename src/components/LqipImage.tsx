import { useCallback, useState, type ImgHTMLAttributes } from 'react'

export type LqipImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'srcSet' | 'onLoad' | 'onError'
> & {
  /** Full-resolution image URL */
  src: string
  /** Optional responsive sources for the full image */
  srcSet?: string
  /** Very small / low-res preview of the same frame (blur-up LQIP) */
  placeholderSrc?: string
  /** Outer wrapper; default includes relative + overflow hidden for stacking */
  wrapperClassName?: string
  /** Applied to both images for layout (e.g. h-full w-full object-cover) */
  className?: string
  /** Tailwind or classes for the LQIP layer only */
  placeholderImgClassName?: string
}

/**
 * Low Quality Image Placeholder (LQIP) pattern: optional tiny `placeholderSrc` stays visible
 * (slightly scaled + blurred) until the full `src` fires `onLoad`, then the main image fades in.
 *
 * Not wired into pages yet—import when you want progressive loading on galleries or cards.
 */
export function LqipImage({
  src,
  srcSet,
  alt,
  placeholderSrc,
  wrapperClassName = '',
  className = '',
  placeholderImgClassName = '',
  loading = 'lazy',
  decoding = 'async',
  ...imgProps
}: LqipImageProps) {
  const [fullReady, setFullReady] = useState(false)
  const [fullFailed, setFullFailed] = useState(false)

  const onFullLoad = useCallback(() => {
    setFullReady(true)
  }, [])

  const onFullError = useCallback(() => {
    setFullFailed(true)
  }, [])

  const showPlaceholderLayer = Boolean(placeholderSrc) && !fullFailed
  const fadeInFullImage = showPlaceholderLayer

  return (
    <div
      className={['relative overflow-hidden bg-zinc-100 dark:bg-zinc-900', wrapperClassName]
        .filter(Boolean)
        .join(' ')}
    >
      {showPlaceholderLayer ? (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden
          decoding="async"
          className={[
            'pointer-events-none absolute inset-0 h-full w-full object-cover',
            'scale-105 transform-gpu blur-md',
            fullReady ? 'opacity-0 transition-opacity duration-500 ease-out' : 'opacity-100',
            placeholderImgClassName,
          ]
            .filter(Boolean)
            .join(' ')}
        />
      ) : null}
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={onFullLoad}
        onError={onFullError}
        className={[
          className,
          fadeInFullImage
            ? fullReady
              ? 'opacity-100 transition-opacity duration-500 ease-out'
              : 'opacity-0'
            : 'opacity-100',
        ]
          .filter(Boolean)
          .join(' ')}
        {...imgProps}
      />
    </div>
  )
}
