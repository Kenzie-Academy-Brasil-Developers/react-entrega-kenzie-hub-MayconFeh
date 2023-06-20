import { useForm } from "react-hook-form";
import { StyledH1, StyledLabel, StyledLabelInfo } from "../../../styles/typography";
import { Input } from "../LoginInput/Index";
import { StyledForm } from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services/api";
import { LoginFormSchema } from "./LoginFormSchema";
import { toast } from "react-toastify";
import { useState } from "react";

export const Form = () => {

  const [isLoading , setIsLoading] = useState(false)

  const { register,  handleSubmit, formState:{errors},reset} = useForm ({
  resolver: zodResolver(LoginFormSchema)
})
  const navegate = useNavigate()

  const Login = async (formData) =>{
  try {
    const res = await api.post("/sessions",formData)
    notifySucess()
    reset()
    console.log(res);
    localStorage.setItem("@TOKEN", res.data.token)
    localStorage.setItem("@USERID", res.data.user.id)
    localStorage.setItem("@USER" , res.data.user.name)
    localStorage.setItem("@MODULE" , res.data.user.course_module)
    setTimeout(()=>{
      navegate("/user")
    },3000)
  } catch (error) {
    notifyError()
  } finally{
    setIsLoading(true)
  }
}
  const notifySucess = () => {
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
  toast.error("Ops deu algo de errado", {
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
const submit = (formData) => {
  Login(formData)
}
    
  return(
  <StyledForm onSubmit={handleSubmit(submit)}>
    <StyledH1>Login</StyledH1>
    <div className="containerInputs">
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <Input
      {...register("email")} 
      type="email" 
      id="email" 
      name="email"
      placeholder="Digite seu email..."/>
      {errors.email ? <span className="erro">{errors.email.message}</span> : null}
      <StyledLabel htmlFor="password">Senha</StyledLabel>
      <Input 
      {...register("password")}
      type="password"
      id="password" 
      name="password"
      placeholder="Digite sua senha..."/>
       {errors.password ? <span className="erro">{errors.password.message}</span> : null}
    </div>
    
    {isLoading ? <button>Entrando...</button> : <button>Entrar</button> }
    <div className="containerRegister">
      <StyledLabelInfo>Ainda não possui uma conta?</StyledLabelInfo>
      <Link to="/register">
      <button className="buttonRegs">Cadastre-se</button>
      </Link>
    </div>
  </StyledForm>
  )
}