import { CheckCircle2 } from 'lucide-react'
import { Avatars, ImageSlot, Squiggle } from './Shapes'

const points = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export default function CreatorSection() {
  return (
    <section
      className='bg-[#FAFAFA]'
      style={{
        backgroundImage:
          'radial-gradient(ellipse at 4% 2%, rgba(122,151,255,0.34), transparent 35%), radial-gradient(ellipse at 4% 94%, rgba(212,255,51,0.56), transparent 29%), radial-gradient(ellipse at 98% 88%, rgba(112,143,255,0.32), transparent 36%)',
      }}
    >
      <div className='mx-auto grid max-w-page items-center gap-8 px-5 pt-0 pb-12 lg:grid-cols-2 lg:px-0 lg:pt-0 lg:pb-16'>
        <div className='relative mx-auto h-[500px] w-full max-w-[650px] sm:h-[680px] lg:h-[760px]'>
          <div className='absolute left-0 top-8 z-20 w-[245px] rounded-2xl bg-brand px-4 py-4 text-white shadow-md sm:top-14 sm:w-[350px] sm:px-5 sm:py-5'>
            <p className='text-sm leading-tight sm:text-xl'>Total Revenue</p>
            <p className='text-[10px] opacity-80 sm:text-sm'>July 1-28</p>
            <p className='mt-2 text-2xl font-bold sm:text-3xl'>$120.29</p>
            <div className='mt-3 h-2 rounded-full bg-white/20'>
              <div className='h-2 w-[55%] rounded-full bg-lime' />
            </div>
          </div>
          <div className='absolute left-0 top-[175px] z-20 w-[190px] rounded-2xl bg-brand px-4 py-4 text-white shadow-md sm:top-[265px] sm:w-[210px] sm:px-5 sm:py-5'>
            <p className='text-sm leading-tight sm:text-xl'>Year to Date</p>
            <p className='text-[10px] opacity-80 sm:text-sm'>2023</p>
            <p className='mt-2 text-2xl font-bold sm:text-3xl'>$1,200.38</p>
            <span className='mt-3 inline-block rounded-full bg-lime px-3 py-1 text-[10px] font-medium text-ink sm:text-xs'>
              +12%
            </span>
          </div>
          <ImageSlot
            src='/images/female.svg'
            alt='Creator wearing headphones'
            className='absolute bottom-0 left-[5%] z-30 h-[470px] w-auto drop-shadow-[0_20px_24px_rgba(0,0,0,0.2)] sm:left-[10%] sm:h-[640px] lg:h-[720px]'
          />
          <div className='absolute bottom-[150px] right-0 z-40 w-[210px] rounded-2xl bg-white px-3 py-3 shadow-[0_16px_35px_rgba(20,20,20,0.18)] sm:bottom-[166px] sm:w-[290px] sm:px-4 sm:py-4'>
            <p
              className='text-[18px] font-normal leading-[1.6] text-ink'
              style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
            >
              Happy Students
            </p>
            <p
              className='text-[12px] font-normal leading-[1.6] text-ink'
              style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
            >
              4.5 <span className='text-muted'>(240)</span>{' '}
              <span className='text-lime'>★</span>
            </p>
            <Avatars className='mt-2 h-8 sm:h-10' />
          </div>
          <Squiggle className='absolute right-[2%] top-[110px] z-40 h-40 w-32 -translate-x-10 rotate-180 object-contain sm:right-[4%] sm:top-[170px] sm:h-56 sm:w-44' />
        </div>
        <div className='lg:pl-8'>
          <h2 className='max-w-[520px] text-3xl font-bold leading-[1.15] text-[#25252B] sm:text-4xl lg:text-[48px]'>
            Create &amp; Manage Courses Easily.
          </h2>
          <p className='mt-8 max-w-[520px] text-base leading-[1.65] text-[#777982] sm:text-lg'>
            <b className='text-ink'>ByteSpace</b> supports individuals or
            entities in the creation, publication, and administration of
            educational courses.
          </p>
          <ul className='mt-6 space-y-3 text-sm text-[#25252B] sm:text-base'>
            {points.map((point) => (
              <li key={point} className='flex items-center gap-2'>
                <CheckCircle2
                  size={16}
                  className='shrink-0 fill-brand text-white'
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
