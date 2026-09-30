import { Search } from 'lucide-react'
import { Star } from 'lucide-react'

import {
  Avatars,
  Cone,
  ImageSlot,
  Ring,
  Squiggle,
  Cylinder,
  SquiggleMini,
  SquiggleMid,
} from './Shapes'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className='grid-lines relative overflow-hidden bg-brand text-white'>
      <div className='relative mx-auto max-w-page px-5 pt-32 text-center lg:px-0 lg:pt-36'>
        <h1 className='mx-auto max-w-[760px] text-[34px] font-semibold leading-[1.15] sm:text-5xl lg:text-[56px]'>
          Get Access to Hundreds Courses Available
        </h1>
        <p className='mx-auto mt-6 max-w-xl text-xs opacity-80 sm:text-sm'>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <form
          role='search'
          className='mx-auto mt-8 flex max-w-[460px] items-center gap-2 rounded-full bg-white p-1.5 text-ink'
        >
          <Search size={14} className='ml-3 shrink-0 text-muted' />
          <input
            aria-label='Search'
            placeholder='Course, topic, creator'
            className='min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-muted'
          />
          <button
            type='button'
            className='rounded-full bg-lime px-5 py-2 text-xs font-semibold'
          >
            Search
          </button>
        </form>
        <div className=' mx-auto mt-10 h-[340px] max-w-[900px] sm:h-[420px] lg:h-[440px]'>
          {/* <div className='absolute bottom-[-60%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime sm:h-[640px] sm:w-[640px]' /> */}
          {/* <div className='absolute bottom-[-175%] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-lime sm:h-[1100px] sm:w-[1100px]' /> */}

          <Image
            src='/images/heroImgBack.png'
            alt=''
            width={1000}
            height={1000}
            priority
            className='absolute bottom-[-5%] left-1/2 h-[300px] w-auto -translate-x-1/2 object-bottom sm:h-[420px] lg:h-[440px]'
          />
          <ImageSlot
            src='/images/hero-person.png'
            alt='Smiling student with laptop'
            className='absolute bottom-0 left-1/2 h-[340px] w-auto -translate-x-1/2 object-bottom [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)] sm:h-[420px] lg:h-[440px]'
          />
          <div className='absolute h-[70px] w-[208px]    top-[520px] left-[280px] hidden  rounded-xl bg-white p-3 text-left text-ink  sm:block'>
            <p className='text-xs font-semibold'>UI/UX Design</p>
            <p className='text-[10px] text-muted'>
              200 Courses • 1000+ Students
            </p>
          </div>
          <div className='absolute w-[232px] h-[131px]   right-2 top-[500px] left-[700px] rounded-xl bg-white p-3 text-left font-bold  text-ink sm:block'>
            <p className='text-[15px]'>Learning Progress</p>
            <p className='text-3xl font-semibold'>55%</p>
            <div className='mt-1 h-1 rounded bg-ink'>
              <div className='h-1 w-1/2 rounded  bg-lime' />
            </div>
          </div>
          <div className='absolute w-[258px] h-[121px] bottom-16 left-[250px] rounded-xl bg-white p-2.5 text-left text-ink sm:block'>
            <p className='text-[20px] font-semibold'>Happy Students</p>
            <p className='flex items-center gap-1'>
              <span className='text-[17px] font-bold'>4.5</span>
              <span className='font-light'>(240)</span>
              <Star size={16} color='#F5B301' fill='#F5B301' />
            </p>
            <Avatars className='mt-1' />
          </div>

          <Squiggle className='absolute left-[-210px] top-[221px] h-[385px] w-[385px]  hidden sm:block' />
          <Cylinder className='absolute right-[-235px] top-[190px] h-[385px] w-[385px]  hidden sm:block' />
          <SquiggleMini className='absolute   left-[100px] top-[350px]  rotate-[-60deg] h-[175px] w-[175px] hidden sm:block ' />
          <Ring className='absolute  left-[-50px]  bottom-2 h-[350px] w-[350px] hidden sm:block' />
          <Cone className='absolute right-[100px] top-[400px] h-[200px] w-[200px]   hidden sm:block' />
          <SquiggleMid className='absolute   right-[-100px] bottom-3 rotate-[-180deg] h-[300px] w-[300px] hidden sm:block ' />
          {/* <Squiggle className='absolute -right-8 bottom-10 h-14 w-32 -rotate-[60deg] sm:-right-16 sm:h-20 sm:w-44' /> */}
        </div>
      </div>
    </section>
  )
}
