import { footerLinks } from '@/lib/data'
import { Logo } from './Shapes'

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='mx-5 my-[60px] sm:mx-8 lg:mx-[120px]'>
        <div className='grid min-h-[355px] gap-12 lg:grid-cols-2'>
          <div>
            <Logo dark />
            <p
              className='mt-7 text-base text-ink'
              style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
            >
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form className='mt-14 flex max-w-[514px] items-center gap-[22px]'>
              <input
                aria-label='Email'
                type='email'
                placeholder='Enter your email'
                className='h-[54px] min-w-0 flex-1 rounded-full border border-[#d2d3d7] bg-white px-[22px] text-lg text-ink outline-none placeholder:text-ink'
                style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
              />
              <button
                type='button'
                className='h-[46px] shrink-0 rounded-full bg-lime px-[26px] text-[22px] font-medium text-ink'
                style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
              >
                Search
              </button>
            </form>
            <p
              className='mt-8 max-w-[600px] text-sm leading-6 text-ink'
              style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div
            className='grid grid-cols-2 gap-x-8 gap-y-8 pt-16 text-base leading-[1.6] text-ink sm:grid-cols-3'
            style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
          >
            {footerLinks.map((col, i) => (
              <ul key={i} className='space-y-5'>
                {col.map((link) => (
                  <li key={link}>
                    <a href='#' className='hover:text-muted'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div
          className='flex flex-col justify-between gap-5 border-t border-line py-7 text-sm leading-[1.6] text-ink sm:flex-row sm:items-center'
          style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
        >
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className='flex flex-wrap gap-6'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Service</a>
            <a href='#'>Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
