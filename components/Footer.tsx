import { footerLinks } from '@/lib/data'
import { Logo } from './Shapes'
export default function Footer() {
  return (
    <footer className='border-t border-line bg-white'>
      <div className='mx-auto max-w-page px-5 pt-14 lg:px-0'>
        <div className='grid gap-10 lg:grid-cols-[1.1fr_2fr]'>
          <div>
            <div
              className='[&>a]:!text-2xl [&>a]:leading-none'
              style={{
                fontFamily: '"Clash Display", var(--font-display), sans-serif',
              }}
            >
              <Logo dark />
            </div>
            <p className='mt-4 text-[11px] text-muted'>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form className='mt-5 flex max-w-sm items-center gap-2 rounded-full border border-line p-1.5'>
              <input
                aria-label='Email'
                type='email'
                placeholder='Enter your email'
                className='min-w-0 flex-1 bg-transparent px-3 text-xs outline-none'
              />
              <button
                type='button'
                className='rounded-full bg-lime px-5 py-2 text-xs font-semibold'
              >
                Search
              </button>
            </form>
            <p className='mt-3 max-w-sm text-[10px] text-muted'>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
          <div
            className='grid grid-cols-2 gap-6 text-[14px] leading-[1.6] text-muted sm:grid-cols-3'
            style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
          >
            {footerLinks.map((col, i) => (
              <ul key={i} className='space-y-3'>
                {col.map((l) => (
                  <li key={l}>
                    <a href='#' className='hover:text-ink'>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div
          className='mt-24 flex flex-col justify-between gap-3 border-t border-line py-6 text-[14px] leading-[1.6] text-muted sm:flex-row'
          style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
        >
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Service</a>
            <a href='#'>Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
