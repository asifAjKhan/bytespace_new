import { courses } from '@/lib/data'
import CourseCard from './CourseCard'
import { ImageSlot, Squiggle } from './Shapes'

const stats = [
  ['12K', 'Students'],
  ['70+', 'Courses'],
  ['16', 'Creators'],
]

export default function PathSection() {
  return (
    <section
      className='relative overflow-hidden bg-[#FAFAFA]'
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 18% 12%, rgba(212,255,51,0.48), transparent 34%), radial-gradient(ellipse at 8% 92%, rgba(122,151,255,0.34), transparent 38%), radial-gradient(ellipse at 96% 8%, rgba(149,170,255,0.22), transparent 30%)',
      }}
    >
      <div className='mx-auto grid max-w-page items-center gap-8 px-5 pt-12 pb-0 lg:grid-cols-2 lg:px-0 lg:pt-16 lg:pb-0'>
        <div>
          <h2 className='max-w-[700px] font-display text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#25252B]'>
            Your Path to Professional Growth Starts Here!
          </h2>

          <p
            className='mt-7 max-w-[620px] text-[18px] font-normal leading-[1.6] tracking-normal text-[#555861]'
            style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
          >
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <dl className='mt-8 flex gap-8 sm:gap-10'>
            {stats.map(([n, l]) => (
              <div key={l}>
                <dt className='text-2xl font-bold leading-tight text-brand sm:text-3xl lg:text-[42px]'>
                  {n}
                </dt>
                <dd className='mt-1 text-sm text-[#555861] sm:text-base lg:text-[20px]'>
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className='relative mx-auto h-[400px] w-full max-w-[620px] sm:h-[480px]'>
          <div className='absolute left-0 top-8 z-10 w-[min(62%,320px)] drop-shadow-[0_18px_20px_rgba(0,0,0,0.16)]'>
            <CourseCard {...courses[0]} />
          </div>
          <ImageSlot
            src='/images/hero-person.png'
            alt='Student learning online'
            className='absolute bottom-0 left-[2%] z-20 h-[330px] w-auto drop-shadow-[0_24px_22px_rgba(0,0,0,0.3)] sm:left-[15%] sm:h-[420px] lg:h-[470px]'
          />
          <Squiggle className='absolute right-[-8px] top-[34%] z-40 h-36 w-32 rotate-180 object-contain' />
          <div className='absolute right-0 top-[44%] z-30 w-[160px] rounded-2xl bg-white p-3 shadow-[0_14px_32px_rgba(20,20,20,0.18)] sm:right-1 sm:w-[205px] sm:p-5'>
            <p className='text-xs font-medium text-ink sm:text-sm'>
              Learning Progress
            </p>
            <p className='mt-1 text-3xl font-bold leading-none text-ink sm:text-4xl'>
              55%
            </p>
            <div className='mt-3 h-2 rounded-full bg-slate-100'>
              <div className='h-2 w-[55%] rounded-full bg-lime' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
