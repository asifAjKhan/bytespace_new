import {
  Briefcase,
  Camera,
  Code2,
  Megaphone,
  Monitor,
  PenTool,
  type LucideIcon,
} from 'lucide-react'
import { paths } from '@/lib/data'
import SectionHeading from './SectionHeading'
const icons: LucideIcon[] = [
  PenTool,
  Code2,
  Monitor,
  Briefcase,
  Megaphone,
  Camera,
]
export default function LearningPaths() {
  return (
    <section className='mx-auto max-w-page px-5 pb-20 pt-16 lg:px-0 lg:pb-28'>
      <SectionHeading
        title='Explore Diverse Learning Paths at Bytespace'
        text="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        titleClassName='text-[33px] font-bold sm:text-[40px] lg:text-[44px]'
        textClassName='max-w-[1150px] text-[20px] leading-[1.6] sm:text-[21px]'
        textStyle={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
      />
      <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {paths.map((p, i) => {
          const Icon = icons[i]
          return (
            <a
              key={p}
              href='#'
              className='mx-auto flex h-[167px] w-full max-w-[167px] flex-col items-center justify-center gap-2 rounded-[24px] border border-[#CED0D3] bg-white text-base font-bold'
            >
              <span className='grid h-[58px] w-[58px] place-items-center rounded-full bg-lime'>
                <Icon size={29} strokeWidth={2.25} />
              </span>
              {p}
            </a>
          )
        })}
      </div>
    </section>
  )
}
