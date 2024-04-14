import { useEffect, useState } from 'react'
import { client } from './axios-instance'

const useFetech = (url:string) => {
    const [dataState, setDataState] = useState("idle")
    const [response, setResponse] = useState<{[k:string]:any}>()
    //const [del, setDel] = useState(false)
  
  
  
    
    useEffect(()=>{
      const getData = async ()=>{
          setDataState("loading")
          
         
          const request = client()
  
          try {
              await request.get(url).then(res=>{
                  setResponse(res?.data)
                  setDataState("success")
                  // setTimeout(()=>{
                  //     setDataState("idle")
                  // },500)
                 
              }).catch(error=>{
                  setDataState("failed")
                  console.log(error.response?.data?.error)
                  console.log(error.response?.data?.message)
              })
          } catch (error) {
              console.log(error)
          }
      }
  
      if(url) getData();
      
    }, [url])
  
    return {response, dataState}
}

export default useFetech