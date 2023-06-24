import { useForm } from "react-hook-form";
import { StyledH1, StyledLabel, StyledLabelInfo } from "../../../styles/typography";
import { StyledForm } from "./LoginForm";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./LoginFormSchema";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input/Index";

export const Form = () => {

 const {userLogin} = useContext(UserContext)

 const [isLoading , setIsLoading] = useState (false)

  const { register,  handleSubmit, formState:{errors}} = useForm ({
  resolver: zodResolver(LoginFormSchema)
})

const submit = (formData) => {
  userLogin(formData,setIsLoading)
}
    
  return(
  <StyledForm onSubmit={handleSubmit(submit)}>
    <StyledH1>Login</StyledH1>
    <div className="containerInputs">
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <Input
      className="InpLogin"
      {...register("email")} 
      type="email" 
      id="email" 
      name="email"
      placeholder="Digite seu email..."/>
      {errors.email ? <span className="erro">{errors.email.message}</span> : null}
      <StyledLabel htmlFor="password">Senha</StyledLabel>
      <Input 
      className="InpLogin"
      {...register("password")}
      type="password"
      id="password" 
      name="password"
      placeholder="Digite sua senha..."/>
       {errors.password ? <span className="erro">{errors.password.message}</span> : null}
    </div>
    
     <button>{isLoading ? "Entrando...":"Entrar" } </button> 
    <div className="containerRegister">
      <StyledLabelInfo>Ainda não possui uma conta?</StyledLabelInfo>
      <Link to="/register">
      <button className="buttonRegs">Cadastre-se</button>
      </Link>
    </div>
  </StyledForm>
  )
}