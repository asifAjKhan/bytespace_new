import { cn } from '@/lib/cn'
export default function SectionHeading({
  title,
  text,
  className,
  titleClassName,
  textClassName,
  textStyle,
}: {
  title: React.ReactNode
  text: string
  className?: string
  titleClassName?: string
  textClassName?: string
  textStyle?: React.CSSProperties
}) {
  return (
    <div className={cn('mx-auto text-center', className)}>
      <h2
        className={cn(
          'text-2xl font-semibold leading-tight sm:text-3xl lg:text-[32px]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mx-auto mt-4 max-w-[760px] text-xs leading-5 text-muted sm:text-[13px]',
          textClassName,
        )}
        style={textStyle}
      >
        {text}
      </p>
    </div>
  )
}
