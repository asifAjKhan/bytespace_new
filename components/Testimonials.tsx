import { testimonials } from '@/lib/data'
import { ImageSlot } from './Shapes'
export default function Testimonials() {
  return (
    <section
      className='bg-[#FAFAFA]'
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%), radial-gradient(55% 55% at 8% 92%, rgba(126, 154, 255, 0.42) 0%, rgba(126, 154, 255, 0) 100%)',
      }}
    >
      <div className='mx-auto max-w-page px-5 py-16 lg:px-0 lg:py-20'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <h2 className='max-w-[560px] text-3xl font-semibold leading-[1.2] text-black sm:text-4xl lg:text-[44px]'>
            Discover What Our Community Is Saying
          </h2>
          <p className='text-base leading-[1.6] text-[#555861] sm:text-lg'>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className='mt-14 grid justify-center gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10'>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className='flex h-[407px] w-full max-w-[374px] flex-col rounded-[24px] bg-white p-6'
            >
              <ImageSlot
                src={t.img}
                alt={t.name}
                className='h-20 w-20 shrink-0 rounded-full'
              />
              <figcaption className='mt-6'>
                <p className='text-xl font-semibold text-black'>{t.name}</p>
                <p className='mt-1 text-base text-brand'>{t.role}</p>
              </figcaption>
              <blockquote className='mt-6 text-base leading-[1.8] text-[#555861]'>
                {t.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
