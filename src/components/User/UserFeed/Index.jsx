import { useContext } from "react";
import { StyledH2, StyledText } from "../../../styles/typography";
import { StyledUserFeed } from "./UserFeedStyles";
import { RiEmotionSadFill } from 'react-icons/ri';
import { TechContext } from "../../../providers/TechContext";
import { UserContext } from "../../../providers/UserContext";
import { CreateTechBox } from "../../BoxCreateTech/Index";
import { EditTechBox } from "../../BoxEditTech/Index";

export const UserFeed = () => {

  const { setIsOpen, isOpen, techList,setIsEditDel,isEditDel,setId,setName } = useContext(TechContext)
  const { user } = useContext(UserContext)
  
  const openEditDelModal = (techDatas) =>{
    setIsEditDel(true)
    setId(techDatas.id)
    setName(techDatas.title)
  }

  return (
    <>
      {isOpen ? <CreateTechBox /> : null}
      {isEditDel ? <EditTechBox/> :null}
      <StyledUserFeed>
        <div>
          <StyledH2>Tecnologias</StyledH2>
          <button onClick={() => { setIsOpen(true) }}>+</button>
        </div>
        <ul>
          {techList.map(techs=>(
            <li onClick={() => { openEditDelModal(techs)}} key={techs.id}> 
              <StyledH2>{techs.title}</StyledH2>
              <StyledText >{techs.status}</StyledText>
            </li>
          ))}
        </ul>
      </StyledUserFeed>
    </>
  )
}