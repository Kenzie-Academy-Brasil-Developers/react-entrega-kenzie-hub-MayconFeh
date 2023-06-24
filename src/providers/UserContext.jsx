import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
  const {reset}= useForm()
  const [user , setUser] = useState(null)
  const [loading , setLoading] = useState(false)
  
  const navegate = useNavigate()
  const currentPath = window.location.pathname

  useEffect( () => {
    
    const token = localStorage.getItem("@TOKEN")
    const id = localStorage.getItem("@USERID")

    const loadUser = async () => {

      try {
        setLoading(true)
        const {data} = await api.get(`/users/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(data)
        navegate(currentPath)
      } catch (error) {
        notifyError()
      } finally {
        setLoading(false)
      }
    }
    if(token && id) {
      loadUser()
    }

  },[])

  const notifyRegisterSucess = () => {
    toast.success("Conta criada com sucesso",{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
  
  const notifyLoginSucess = () => {
    toast.success("Login realizado com sucesso",{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
  const notifyError = () => {
    ("Ops deu algo de errado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const notifyLogout = () => {
    toast("Saindo...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
 
  const userRegister = async (formData,setIsLoading ) =>{
    try {
      setIsLoading(true) 
      const data = await api.post("/users",formData)
      notifyRegisterSucess()
      reset()
      setTimeout(()=>{
        navegate("/")
      },3000)
    }
    catch(error) {
      notifyError(error)
    } finally{
      setIsLoading(false)
    }
  }

  const userLogin = async (formData,setIsLoading ) =>{
      try {
        setIsLoading(true)
        const {data} = await api.post("/sessions",formData)
        notifyLoginSucess()
        reset()
        
        localStorage.setItem("@TOKEN", data.token)
        localStorage.setItem("@USERID", data.user.id)
        setUser(data.user)
        setTimeout(()=>{
          navegate("/user")
        },3000)
        
      } catch (error) {
        notifyError()
      } finally{
        setIsLoading(false)
      }
  }

  const userLogout = () =>{
    notifyLogout()
    localStorage.clear()
    navegate("/")
    setUser(null)
  }
  
  return(
    <UserContext.Provider value={{ user , userLogin , userLogout, userRegister, loading }}>
      {children}
    </UserContext.Provider>
  )
}