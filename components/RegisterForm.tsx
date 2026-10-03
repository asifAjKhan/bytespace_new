'use client'
import Link from 'next/link'
import AuthField from './AuthField'
export default function RegisterForm() {
  return (
    <>
      <p className='text-lg text-brand'>Create an Account</p>
      <h2 className='text-4xl font-semibold leading-[1.1] sm:text-[48px]'>
        Welcome to ByteSpace
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className='mt-10 space-y-6'>
        <AuthField id='name' label='Full Name' placeholder='Jamie Davis' />
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
            Continue
          </button>
        </div>
      </form>
      <p className='mt-auto pt-16 text-center text-lg text-muted'>
        Already have an account?{' '}
        <Link href='/login' className='text-brand'>
          Login
        </Link>
      </p>
    </>
  )
}
