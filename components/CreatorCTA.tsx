import { Cone, Ring, Squiggle } from './Shapes'
export default function CreatorCTA() {
  return (
    <section
      className='relative flex min-h-[600px] items-center overflow-hidden bg-brand text-white'
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.12) 2px, transparent 2px)',
        backgroundSize: '150px 150px',
      }}
    >
      <div className='relative z-10 mx-auto w-full max-w-[1260px] px-5 py-24 text-center'>
        <h2 className='mx-auto max-w-[850px] text-center font-display text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-white'>
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p
          className='mx-auto mt-10 max-w-[964px] text-center text-[18px] font-normal leading-[1.6] tracking-normal text-white/95'
          style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your first
          course on the ByteSpace Course Library.
        </p>
        <button className='mt-12 rounded-full bg-lime px-8 py-4 text-lg font-medium text-ink sm:px-9 sm:text-[22px]'>
          Join as Creator
        </button>
      </div>
      <Squiggle className='absolute -left-24 -top-14 h-64 w-64 rotate-[-35deg]' />
      <Squiggle className='absolute left-[14%] top-8 hidden h-40 w-36 brightness-0 invert md:block' />
      <Cone className='absolute right-[16%] top-0 hidden h-44 w-44 md:block' />
      <Ring className='absolute -right-24 top-12 hidden h-[380px] w-[380px] md:block' />
      <Squiggle className='absolute -right-8 -bottom-24 h-72 w-64 rotate-[-60deg]' />
      <Cone className='absolute -left-10 top-[43%] hidden h-56 w-56 md:block' />
      <Ring className='absolute -left-20 bottom-[-185px] hidden h-[380px] w-[380px] md:block' />
    </section>
  )
}
