import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type FormIputPropos = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
}

function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormIputPropos) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default FormInput