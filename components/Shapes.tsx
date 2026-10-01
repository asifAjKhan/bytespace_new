import { cn } from '@/lib/cn'
/** Replaceable image slot. Pass `src` to swap the placeholder for the real asset. */
export function ImageSlot({
  src,
  alt = '',
  label,
  className,
}: {
  src?: string
  alt?: string
  label?: string
  className?: string
}) {
  if (src)
    return <img src={src} alt={alt} className={cn('object-cover', className)} />
  return (
    <div
      role='img'
      aria-label={alt || label}
      className={cn(
        'flex items-end justify-center bg-gradient-to-b from-slate-200 to-slate-400 text-xs text-slate-600',
        className,
      )}
    >
      {label}
    </div>
  )
}
export const Squiggle = ({ className }: { className?: string }) => (
  <img
    src='/images/heroShape1.svg'
    alt=''
    aria-hidden
    className={cn('object-contain', className)}
  />
)

export const SquiggleMini = ({ className }: { className?: string }) => (
  <img
    src='/images/squiggleMini.svg'
    alt=''
    aria-hidden
    className={cn('object-contain', className)}
  />
)

export const SquiggleMid = ({ className }: { className?: string }) => (
  <img
    src='/images/squiggleMid.svg'
    alt=''
    aria-hidden
    className={cn('object-contain', className)}
  />
)

export const Cylinder = ({ className }: { className?: string }) => (
  <img
    src='/images/heroShapecylender.svg'
    alt=''
    aria-hidden
    className={cn('object-contain', className)}
  />
)
export const Ring = ({ className }: { className?: string }) => (
  <img
    src='/images/ring.svg'
    alt=''
    aria-hidden
    className={cn('object-contain', className)}
  />
)

export const Cone = ({ className }: { className?: string }) => (
  <img
    src='/images/heroShapeCone.svg'
    alt=''
    aria-hidden
    className={cn('object-contain', className)}
  />
)

export const Avatars = ({
  className,
  variant = 'hero',
}: {
  className?: string
  variant?: 'hero' | 'course'
}) => (
  <img
    src={
      variant === 'hero'
        ? '/images/avatars-hero.png'
        : '/images/avatars-course.png'
    }
    alt='Happy students'
    className={cn(variant === 'hero' ? 'h-7' : 'h-5', 'w-auto', className)}
  />
)
export const Logo = ({ dark = false }: { dark?: boolean }) => (
  <a
    href='/'
    className={cn(
      'flex items-center gap-1.5 text-[24px] font-bold leading-none tracking-[0]',
      dark ? 'text-ink' : 'text-white',
    )}
  >
    <span className='grid h-6 w-6 place-items-center rounded-md text-sm font-extrabold text-ink'>
      <img src='/images/logo.png' alt='ByteSpace logo' width={30} height={30} />
    </span>
    <span
      style={{ fontFamily: '"Clash Display", var(--font-display), sans-serif' }}
    >
      <sub className='text-[24px] from-neutral-200'>ByteSpace</sub>
    </span>
  </a>
)
