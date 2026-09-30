export default function AuthField({
  id,
  label,
  type = 'text',
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={id} className='mb-2 block text-sm font-medium'>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className='h-[52px] w-full rounded-xl border border-[#E4E4E4] bg-[#FBFBFB] px-6 text-lg outline-none placeholder:text-[#8E8E8E] focus:border-brand'
      />
    </div>
  )
}
