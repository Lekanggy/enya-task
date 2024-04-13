import React from 'react'
import StarWar from '../assets/starw.png'
import Layout from '../components/Layout'

const Login = () => {
  return (
    <Layout>
        <div className="w-[400px] flex bg-[#031434] items-center justify-center h-full">
               <div className="w-[300px] h-[125px]">
                 <img src={StarWar} alt='start wars' className="w-full h-full object-cover"/>
               </div>
        </div>
        <div className="flex-[4] flex justify-center items-center">
            <div className="flex justify-center items-center rounded-lg shadow-md w-[467px] py-4">
                <form action="" className="flex flex-col">
                    <header className="flex flex-col space-y-3 pb-16">
                        <h2 className="text-2xl font-semibold text-[#434854]">Login</h2>
                        <span className="flex-inline text-base font-normal text-[#737373]">
                            Kindly enter your details to login
                        </span>
                    </header>

                    <div className="flex flex-col space-y-8">
                        <div className="relative w-[335px]">
                            <input type="email" className="focus:outline-none  focus:border-[#0A74DC] px-2.5 pb-2.5 pt-4 peer w-full border border-[#A4A7B7] rounded border-b placeholder:text-transparent" placeholder="name" />
                            <label htmlFor="email" className="absolute left-0 ml-1 mt-[-12px] px-1 bg-white text-sm text-[#B0B9C8] font-medium peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-red peer-focus:ml-1  peer-focus:px-1 peer-focus:text-sm transition-colors"
                            >Email</label>
                        </div>
                        <div className="relative w-[335px]">
                            <input type="password" className="focus:outline-none  focus:border-[#0A74DC] px-2.5 pb-2.5 pt-4 peer w-full border border-[#A4A7B7] rounded border-b placeholder:text-transparent" placeholder="name" />
                            <label htmlFor="password" className="absolute left-0 ml-1 mt-[-12px] px-1 bg-white text-[#B0B9C8] font-medium text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-red peer-focus:ml-1  peer-focus:px-1 peer-focus:text-sm transition-colors" 
                            >Password</label>
                        </div>
                        <button className="w-[335px] h-[48px] rounded bg-[#0A74DC] text-white text-base font-medium">Login</button>
                    </div>
                    <span className="inline-block text-center text-sm font-normal text-[#0A74DC] mt-3">Forgot your password</span>
                    <div className="flex justify-center items-center space-x-1 pt-16">
                        <span className="text-sm font-normal text-[#303B54]">Privacy Policy</span> 
                        <span className="text-sm font-normal text-[#A4A7B7]">and</span>
                        <span className="text-sm font-normal text-[#303B54]">Terms Of service</span>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Login