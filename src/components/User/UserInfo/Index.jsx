import { StyledUserInfo } from "./UserInfoStyles";
import { StyledH1, StyledText } from "../../../styles/typography"

export const UserInfo = () =>{
  return(
    <StyledUserInfo>
        <StyledH1>Olá, {localStorage.getItem("@USER")}</StyledH1>
        <StyledText>{localStorage.getItem("@MODULE")}</StyledText>
    </StyledUserInfo>
  )
}