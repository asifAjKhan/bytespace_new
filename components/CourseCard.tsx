import { BarChart2, Star } from 'lucide-react'
import { Avatars, ImageSlot } from './Shapes'
export default function CourseCard({
  title,
  tone,
  img,
}: {
  title: string
  tone: string
  img?: string
}) {
  return (
    <article className='w-full rounded-[24px] border border-[#CED0D3] bg-white p-3 lg:h-[384px] lg:w-[373px]'>
      <div className='relative'>
        <ImageSlot
          src={img}
          alt={title}
          className={`h-40 w-full rounded-xl bg-gradient-to-br ${tone} sm:h-44`}
        />
        <div className='absolute inset-x-2 bottom-2 flex gap-3 text-[15px] text-ink/80'>
          {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((t) => (
            <span
              key={t}
              className='rounded-full bg-white/70 px-2 py-1 backdrop-blur '
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className='mt-3 flex items-start justify-between gap-2'>
        <div className='min-w-0'>
          <h3 className='truncate text-xl font-bold'>{title}</h3>
          <p className='text-[14px] text-brand'>
            <span className='text-black'>by</span> purepearl studio
          </p>
        </div>
        <span className='flex shrink-0 items-center gap-1 text-[16px] text-muted'>
          4.5 <Star size={15} fill='gray' />
        </span>
      </div>
      <div className='mt-3 flex items-center justify-between'>
        <span className='flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[16px] text-muted'>
          <BarChart2 size={14} />
          Beginner
        </span>
        <Avatars variant='course' className='h-[40px]' />
      </div>
      <p className='mt-3 text-[22px] font-semibold text-brand'>
        $25<span className='text-[14px] font-normal text-muted'>/lifetime</span>
      </p>
    </article>
  )
}
