'use client'
import Link from 'next/link'
import AuthField from './AuthField'
const Facebook = () => (
  <svg viewBox='0 0 24 24' className='h-8 w-8' aria-hidden>
    <path
      fill='currentColor'
      d='M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'
    />
  </svg>
)
const Google = () => (
  <svg viewBox='0 0 24 24' className='h-7 w-7' aria-hidden>
    <path
      fill='currentColor'
      d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
    />
  </svg>
)
export default function LoginForm() {
  return (
    <>
      <p className='text-lg text-brand'>Sign In</p>
      <h2 className='text-4xl font-semibold leading-[1.1] sm:text-[48px]'>
        Welcome Back
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className='mt-12 space-y-6'>
        <AuthField
          id='email'
          label='Email'
          type='email'
          placeholder='designer@example.com'
        />
        <AuthField
          id='password'
          label='Password'
          type='password'
          placeholder='********'
        />
        <div className='flex justify-end'>
          <button className='h-[46px] rounded-full bg-lime px-6 text-lg font-medium'>
            Sign In
          </button>
        </div>
      </form>
      <div className='mt-[72px] flex items-center gap-4 text-lg text-muted'>
        <span className='h-px flex-1 bg-line' />
        or
        <span className='h-px flex-1 bg-line' />
      </div>
      <div className='mt-12 flex justify-center gap-4'>
        {[
          ['Continue with Facebook', <Facebook key='f' />],
          ['Continue with Google', <Google key='g' />],
        ].map(([l, i]) => (
          <button
            key={l as string}
            aria-label={l as string}
            className='grid h-[72px] w-[70px] place-items-center rounded-[20px] border border-line'
          >
            {i}
          </button>
        ))}
      </div>
      <p className='mt-auto pt-16 text-center text-lg text-muted'>
        New user?{' '}
        <Link href='/register' className='text-brand'>
          Create an account
        </Link>
      </p>
    </>
  )
}
