import { categories, courses } from '@/lib/data'
import { cn } from '@/lib/cn'
import CourseCard from './CourseCard'
import SectionHeading from './SectionHeading'
export default function CourseSection() {
  return (
    <section className='mx-auto max-w-page px-5 pt-16 lg:px-0 lg:pt-24'>
      <SectionHeading
        titleClassName='text-[51px] font-semibold leading-[1.2] tracking-[-0.01em] sm:text-[51px] lg:text-[51px]'
        textClassName='mt-4 max-w-[900px] text-[20px] font-normal leading-[1.6] tracking-normal text-[#82868E] sm:text-[20px]'
        textStyle={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
        text='At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.'
      />
      <div className='mx-auto mt-8 flex w-full max-w-[1216px] flex-wrap justify-center gap-6'>
        {categories.map((c, i) => (
          <button
            key={c}
            className={cn(
              'rounded-full border border-line bg-[#F5F5F6] px-4 py-3 text-base font-semibold text-[#4B4B52]',
              i === 0 && 'border-lime bg-lime font-semibold text-ink',
            )}
          >
            {c}
          </button>
        ))}
        <button className='px-2 py-3 text-base font-medium text-brand'>
          + More
        </button>
      </div>
      <div className='mx-auto mt-12 grid w-full max-w-[1199px] gap-10 sm:grid-cols-2 lg:h-[808px] lg:grid-cols-3'>
        {courses.map((c) => (
          <CourseCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
