import { StyledH1, StyledLabel, StyledLabelInfo } from "../../../styles/typography";
import { Input } from "../LoginInput/Index";
import { StyledForm } from "./LoginForm";

export const Form = () => {
  return(

  <StyledForm>
    <StyledH1>Login</StyledH1>
    <div className="containerInputs">
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <Input  
      id="email" 
      name="email"
      placeholder="Digite seu email..."/>
      <StyledLabel htmlFor="password">Senha</StyledLabel>
      <Input 
      id="password" 
      name="password"
      placeholder="Digite sua senha..."/>
    </div>
    <button>Entrar</button>
    <div className="containerRegister">
      <StyledLabelInfo>Ainda não possui uma conta?</StyledLabelInfo>
      <button>Cadastre-se</button>
    </div>
  </StyledForm>
  )
}