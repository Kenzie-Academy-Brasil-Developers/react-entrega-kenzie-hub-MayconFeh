import { StyledH1, StyledLabel, StyledLabelInfo } from "../../../styles/typography";
import { Input } from "../../Register/RegisterInput/Index";
import { StyledFormRegister } from "./RegisterFormStyles";

export const Form = () => {
  return(
    <StyledFormRegister>
      <StyledH1>Crie sua conta</StyledH1>
      <StyledLabelInfo htmlFor="">Rapido e grátis, vamos nessa</StyledLabelInfo>
      <div>
        <StyledLabel htmlFor="">Nome</StyledLabel>
        <Input/>
        <StyledLabel htmlFor="">Email</StyledLabel>
        <Input/>
        <StyledLabel htmlFor="">Senha</StyledLabel>
        <Input/>
        <StyledLabel htmlFor="">Confirme Senha</StyledLabel>
        <Input/>
        <StyledLabel htmlFor="">Bio</StyledLabel>
        <Input/>
        <StyledLabel htmlFor="">Contato</StyledLabel>
        <Input/>
        <StyledLabel htmlFor="">Selecionar Módulo</StyledLabel>
        <select>
          <option value="">Escolha um Módulo</option>
          <option value="m1">Módulo-1</option>
          <option value="m2">Módulo-2</option>
          <option value="m3">Módulo-3</option>
          <option value="m4">Módulo-4</option>
          <option value="m5">Módulo-5</option>
          <option value="m6">Módulo-6</option>
        </select>
      </div>
      <button>Cadastrar</button>
    </StyledFormRegister>
  )
}