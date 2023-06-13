import { StyledHeader } from "./UserHeaderStyles";
import { Logo } from "../../Logo/Index"
export const Header = () => {
  return(
    <StyledHeader>
      <Logo/>
      <button>Sair</button>
    </StyledHeader>
  )

}