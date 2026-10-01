'use client'
import { useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'
import { Logo } from './Shapes'
const nav = ['Home', 'Courses', 'Creators']
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className='absolute inset-x-0 top-0 z-30 text-white'>
      <div className='mx-auto flex h-20 max-w-page items-center justify-between px-5 lg:px-0'>
        <Logo />
        <nav
          className='hidden gap-8 text-base font-medium leading-[1.2] md:flex'
          aria-label='Main'
          style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
        >
          {nav.map((n, i) => (
            <a
              key={n}
              href='#'
              className={
                i === 0 ? 'font-semibold' : 'opacity-80 hover:opacity-100'
              }
            >
              {n}
            </a>
          ))}
        </nav>
        <div
          className='hidden items-center gap-6 text-base font-medium leading-[1.2] md:flex'
          style={{ fontFamily: 'Satoshi, var(--font-sans), sans-serif' }}
        >
          <a href='/login' className='opacity-80'>
            Sign In
          </a>
          <a href='/register'>Join Us</a>
          <button aria-label='Cart'>
            <ShoppingBag size={16} />
          </button>
        </div>
        <button
          className='md:hidden'
          aria-label='Menu'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className='mx-5 rounded-2xl bg-white p-5 text-ink shadow-xl md:hidden'>
          <nav className='flex flex-col gap-4 text-sm font-medium'>
            {[...nav, 'Sign In', 'Join Us'].map((n) => (
              <a
                key={n}
                href={
                  n === 'Sign In'
                    ? '/login'
                    : n === 'Join Us'
                      ? '/register'
                      : '#'
                }
              >
                {n}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
