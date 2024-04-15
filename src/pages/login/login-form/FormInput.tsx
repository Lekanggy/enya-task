import React from 'react'
import Input from '../../../components/Input'

type FormInputProps = {
    handleUser: React.ChangeEventHandler<HTMLInputElement>
    val:string
    formValue: string
    error?: string
}
const FormInput = ({handleUser, val, formValue, error}:FormInputProps) => {
  return (
    <div className="relative w-[335px]">
        <Input
            type={formValue}
            className="focus:outline-none  focus:border-[#0A74DC] px-2.5 pb-2.5 pt-4 peer w-full border border-[#A4A7B7] rounded border-b placeholder:text-transparent" 
            placeholder="name" 
            onChange={handleUser}
            name={formValue}
            value={val}
            required
        />
        <label htmlFor="email" className="absolute left-0 ml-1 mt-[-12px] px-1 bg-white text-sm text-[#B0B9C8] font-medium peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-red peer-focus:ml-1  peer-focus:px-1 peer-focus:text-sm transition-colors"
        >{formValue}</label>
          <span className="text-sm font-light text-red-500 mr-1">{error}</span>
    </div>
  )
}

export default FormInput