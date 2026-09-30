import type { Metadata } from 'next'
import AuthShell from '@/components/AuthShell'
import LoginForm from '@/components/LoginForm'
export const metadata: Metadata = { title: 'Sign In – ByteSpace' }
export default function LoginPage() {
  return (
    <AuthShell
      title='Sign in with ease'
      text='Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'
    >
      <LoginForm />
    </AuthShell>
  )
}
