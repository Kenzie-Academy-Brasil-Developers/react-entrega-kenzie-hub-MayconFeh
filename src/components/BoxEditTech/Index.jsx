import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../Input/Index"
import { StyledH2, StyledLabel } from "../../styles/typography"
import { TechContext } from "../../providers/TechContext"
import { StyledOverlayEditModal } from "./BoxEditTechStyles"

export const EditTechBox = () => {

  const refModal = useRef(null);
  const refButton = useRef(null)

  const {register, handleSubmit } = useForm()
  
  const {deleteTech,editTech ,setIsEditDel,techList,id,name} = useContext(TechContext)

  useEffect(()=>{
    const handleOutClick = (e) => {
  
      if(!refModal.current?.contains(e.target)){
        setIsEditDel(false)
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

  const edit = (formData) =>{
    editTech(id,formData)
    
    setIsEditDel(false)
  }

  const handleDelete = async () =>{
    
    await deleteTech(id)
    setIsEditDel(false)
  }

  return(
    <StyledOverlayEditModal role="dialog">
      <div className="boxModalEdit" ref={refModal}>
        <div className="headerEditModal">
          <StyledH2>Tecnologia Detalhes</StyledH2>
          <button ref={refButton} onClick={() => setIsEditDel(false)}>X</button>
        </div>
        <form className="formEditModal" onSubmit={handleSubmit(edit)}>
          <StyledLabel>Nome</StyledLabel>
          <Input value={name} disabled />
          <StyledLabel>Selecione um Status</StyledLabel>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">"Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="contButton">
            <button className="buttonEdit">Salvar alteração</button>
            <button className="buttonDelete" type="button" onClick={() => handleDelete()}>Excluir</button>
          </div>
        </form>
      </div>
    </StyledOverlayEditModal>
  )
}