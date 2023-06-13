import { StyledUserInfo } from "./UserInfoStyles";
import { StyledH1, StyledText } from "../../../styles/typography"

export const UserInfo = () =>{
  return(
    <StyledUserInfo>
        <StyledH1>Olá, Maycon Felipe</StyledH1>
        <StyledText>Primeiro módulo (Introdução ao Frontend)</StyledText>
    </StyledUserInfo>
  )
}