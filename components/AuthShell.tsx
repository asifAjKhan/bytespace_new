import Link from 'next/link'
/** Blue grid page with intro copy + illustration on the left and a white card on the right. */
export default function AuthShell({
  title,
  text,
  children,
}: {
  title: string
  text: string
  children: React.ReactNode
}) {
  return (
    <main className='auth-grid min-h-screen overflow-hidden text-white'>
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 pb-10 pt-8 lg:min-h-screen lg:grid-cols-[1fr_579px] lg:grid-rows-[auto_1fr] lg:gap-x-[60px] lg:gap-y-0 lg:px-0 lg:pb-[34px] lg:[grid-template-areas:'text_card''art_card']">
        <div className='[grid-area:text] lg:pt-0'>
          <Link href='/' aria-label='ByteSpace home'>
            <img
              src='/images/auth-logo.png'
              alt='ByteSpace'
              className='h-9 w-auto'
            />
          </Link>
          <h1 className='mt-[34px] text-xl font-semibold lg:mt-[30px]'>
            {title}
          </h1>
          <p className='mt-5 max-w-[480px] text-xl leading-[29px] lg:mt-6'>
            {text}
          </p>
        </div>
        <section className='flex flex-col rounded-[28px] bg-white p-7 text-ink sm:p-16 lg:mt-[86px] lg:min-h-[784px] lg:rounded-[32px] lg:[grid-area:card]'>
          {children}
        </section>
        <img
          src='/images/auth-art.png'
          alt='Course cards preview'
          className='w-full max-w-[518px] self-end justify-self-start [grid-area:art] max-lg:mx-auto'
        />
      </div>
    </main>
  )
}
