import { Form } from "../../components/Login/LoginForm/Index"
import { Logo } from "../../components/Logo/Index"
import { StyledMainLogin } from "./LoginPageStyles"

export const LoginPage = () => {
    return(
      <StyledMainLogin>
        <Logo/>
        <Form />
      </StyledMainLogin>
      
    
    )
}