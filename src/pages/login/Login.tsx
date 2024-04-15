
import StarWar from '../../assets/starw.png'
import PageLayout from '../PageLayout'

import LoginForm from './login-form/LoginForm'

const Login = () => {
   
  return (
    <PageLayout>
        <div className="w-[400px] flex bg-[#031434] items-center justify-center min-h-screen">
            <div className="w-[300px] h-[125px]">
                <img src={StarWar} alt='start wars' className="w-full h-full object-cover"/>
            </div>
        </div>
        
        <div className="flex-[4] flex justify-center items-center">
            <div className="flex justify-center items-center rounded-lg shadow-md w-[467px] py-4">
               <LoginForm/>
            </div>
        </div>
    </PageLayout>
  )
}

export default Login