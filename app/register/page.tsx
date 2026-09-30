import type { Metadata } from 'next'
import AuthShell from '@/components/AuthShell'
import RegisterForm from '@/components/RegisterForm'
export const metadata: Metadata = { title: 'Create an Account – ByteSpace' }
export default function RegisterPage() {
  return (
    <AuthShell
      title='Sign up and come in'
      text='The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost'
    >
      <RegisterForm />
    </AuthShell>
  )
}
