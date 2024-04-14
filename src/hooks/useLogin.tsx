import React, { useState } from 'react'
import { validateCredentials } from '../utilis/validateEmail'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
    const [user, setUser] = useState<{[k:string]:string}>({email: "",password: ""})
    const [error, setError] = useState<{[k:string]:string}>({email: "",password: ""})
    const navigate = useNavigate()
    

    const handleSubmit = (e:React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        console.log(validateCredentials(user.email, user.password))
        if(!validateCredentials(user.email, user.password)){
            setError({
                email: "Make sure to Input correct email", 
                password: "Password must be 6 characters mixed as both umbers and letters"
            })

            return;
        }
        navigate('dashboard');
    }

    const handleUser = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setUser({...user, [name]: value}) 
    }

    return {handleSubmit, handleUser, error, user}
}

export default useLogin