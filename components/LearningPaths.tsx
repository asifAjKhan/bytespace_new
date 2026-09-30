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
        titleClassName='text-3xl font-bold sm:text-4xl lg:text-[40px]'
      />
      <div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6'>
        {paths.map((p, i) => {
          const Icon = icons[i]
          return (
            <a
              key={p}
              href='#'
              className='flex h-36 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-white text-base font-bold'
            >
              <span className='grid h-12 w-12 place-items-center rounded-full bg-lime'>
                <Icon size={24} strokeWidth={2.25} />
              </span>
              {p}
            </a>
          )
        })}
      </div>
    </section>
  )
}
