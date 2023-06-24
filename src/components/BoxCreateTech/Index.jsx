import { useForm } from "react-hook-form"
import {Input} from "../Input/Index"
import {StyledH2, StyledLabel} from "../../styles/typography"
import { StyledOverlayModal } from "./BoxCreateTechStyles"
import { useContext, useEffect, useRef } from "react"
import { TechContext } from "../../providers/TechContext"

export const CreateTechBox = () => {

  const refModal = useRef(null);
  const refButton = useRef(null)

  const {register, handleSubmit } = useForm()
  
  const {createTech ,setIsOpen} = useContext(TechContext)

  useEffect(()=>{
    const handleOutClick = (e) => {
  
      if(!refModal.current?.contains(e.target)){
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
        if(e.key === "Escape"){
          refButton.current?.click()
        }
      
    }

    window.addEventListener('mousedown',handleOutClick)

    window.addEventListener('keydown',handleKeyDown)
    
    return () =>{

    window.removeEventListener('mousedown',handleOutClick)

    window.removeEventListener('keydown',handleKeyDown)
    }
  },[])

  const submit = async (techData) =>{
    const data = {...techData}
    await createTech(data)
    setIsOpen(false)
    
  }


  return(
    <StyledOverlayModal role="dialog">
      <div ref={refModal} className="boxModal">

        <div className="headerModal">
          <StyledH2>Cadastra Tecnologia</StyledH2>
          <button ref={refButton} onClick={()=>{setIsOpen(false)}} >X</button>
        </div>
        <form className="formModal" onSubmit={handleSubmit(submit)}>

          <StyledLabel htmlFor="title">Nome</StyledLabel>
          <Input name="title" id="title" placeholder="Digite a Tecnologia" {...register("title")}/>
          
          <StyledLabel htmlFor="status">Selecione o status</StyledLabel>
          <select name="status" id="status"{...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          
          <button  >Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyledOverlayModal>
  )
}