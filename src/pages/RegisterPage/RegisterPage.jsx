import { StyledMainRegister } from "./RegisterPageStyles"
import { LogoRegister } from "../../components/Logo/LogoRegister/Index"
import { Form } from "../../components/Register/RegisterForm/Index"

export const RegisterPage = () => {
    return(
        <StyledMainRegister>
          <LogoRegister/>
          <Form />
        </StyledMainRegister>
    )
}