import { categories, courses } from '@/lib/data'
import { cn } from '@/lib/cn'
import CourseCard from './CourseCard'
import SectionHeading from './SectionHeading'
export default function CourseSection() {
  return (
    <section className='mx-auto max-w-page px-5 pt-16 lg:px-0 lg:pt-24'>
      <SectionHeading
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
        text='At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.'
      />
      <div className='mx-auto mt-8 flex max-w-[980px] flex-wrap justify-center gap-2.5'>
        {categories.map((c, i) => (
          <button
            key={c}
            className={cn(
              'rounded-full border border-line bg-[#F5F5F6] px-5 py-3 text-base text-[#4B4B52]',
              i === 0 && 'border-lime bg-lime font-medium text-ink',
            )}
          >
            {c}
          </button>
        ))}
        <button className='px-2 py-3 text-base font-medium text-brand'>
          + More
        </button>
      </div>
      <div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {courses.map((c) => (
          <CourseCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  )
}
