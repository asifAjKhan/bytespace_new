import { Share2, Sun, Target, Waves, Zap } from 'lucide-react'

const logos = [
  {
    icon: (
      <span className='relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-400'>
        <Waves size={25} strokeWidth={2.5} className='text-[#F3F3F3]' />
      </span>
    ),
  },
  {
    icon: <Sun size={38} strokeWidth={3} className='text-slate-400' />,
  },
  {
    icon: (
      <span className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-400'>
        <Zap size={22} fill='currentColor' className='text-[#F3F3F3]' />
      </span>
    ),
  },
  {
    icon: (
      <span className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-400'>
        <Share2 size={22} strokeWidth={3} className='text-[#F3F3F3]' />
      </span>
    ),
  },
  {
    icon: <Target size={38} strokeWidth={1.5} className='text-slate-400' />,
  },
]

export default function LogoStrip() {
  return (
    <section className='bg-[#F3F3F3]'>
      <div className='mx-auto flex h-[202px] max-w-page flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-9 lg:justify-between lg:px-0'>
        {logos.map(({ icon }, i) => (
          <span
            key={i}
            className='flex items-center gap-2 text-[20px] font-bold tracking-tight text-slate-500'
          >
            {icon}
            Logoipsum
          </span>
        ))}
      </div>
    </section>
  )
}
