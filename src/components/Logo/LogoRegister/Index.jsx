import { Link } from "react-router-dom"
import { Logo } from "../Index"
import { ContainerLogoResg } from "./LogoRegisterStyles"


export const  LogoRegister = () => {
  return(
    <ContainerLogoResg>
      <Logo/>
      <Link to="/">
      <button>Voltar</button>
      </Link>
    </ContainerLogoResg>

  )
}