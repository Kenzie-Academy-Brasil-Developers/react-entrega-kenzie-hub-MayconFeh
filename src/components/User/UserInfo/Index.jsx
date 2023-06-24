import { StyledUserInfo } from "./UserInfoStyles";
import { StyledH1, StyledText } from "../../../styles/typography"
import { UserContext } from "../../../providers/UserContext";
import { useContext } from "react";

export const UserInfo = () =>{
  const {user} =useContext(UserContext)
  return(
    <StyledUserInfo>
        <StyledH1>Olá, {user?.name}</StyledH1>
        <StyledText>{user?.course_module}</StyledText>
    </StyledUserInfo>
  )
}