import { StyledHeader } from "./UserHeaderStyles";
import { Logo } from "../../Logo/Index"
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";


export const Header = () => {

  const {userLogout} = useContext(UserContext)

  return(
    <StyledHeader>
      <Logo/>
      <button onClick={()=> userLogout()}>Sair</button>
    </StyledHeader>
  )

}