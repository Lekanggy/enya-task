import useLogin from '../../../hooks/useLogin'
import FormInput from './FormInput'
import Header from './Header'

const LoginForm = () => {

    const {handleSubmit, handleUser, user, error} = useLogin()
  return (
    <form action="" className="flex flex-col">
        <Header/>
        <div className="flex flex-col space-y-8">
            <FormInput formValue='email' val={user?.email} error={error?.email} handleUser={handleUser}/>
            <FormInput formValue='password' val={user?.password} error={error?.password} handleUser={handleUser}/>
            <button 
                className="w-[335px] h-[48px] rounded bg-[#0A74DC] text-white text-base font-medium"
                onClick={handleSubmit}
            >Login</button>
        </div>

        <span className="inline-block text-center text-sm font-normal text-[#0A74DC] mt-3">Forgot your password</span>
        <div className="flex justify-center items-center space-x-1 pt-16">
            <span className="text-sm font-normal text-[#303B54]">Privacy Policy</span> 
            <span className="text-sm font-normal text-[#A4A7B7]">and</span>
            <span className="text-sm font-normal text-[#303B54]">Terms Of service</span>
        </div>
    </form>
  )
}

export default LoginForm