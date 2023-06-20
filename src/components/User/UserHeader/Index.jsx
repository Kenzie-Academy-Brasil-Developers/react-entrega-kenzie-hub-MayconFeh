import { StyledHeader } from "./UserHeaderStyles";
import { Logo } from "../../Logo/Index"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navegate = useNavigate()
  const Logout = () => {
    localStorage.clear()
    toast("Saindo...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setTimeout(()=>{
        navegate("/")
      },3000)
  }
  
  return(
    <StyledHeader>


      <Logo/>
      <button onClick={Logout}>Sair</button>
    </StyledHeader>
  )

}