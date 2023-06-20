import { StyledH2, StyledText } from "../../../styles/typography";
import { StyledUserFeed } from "./UserFeedStyles";
import { RiEmotionSadFill } from 'react-icons/ri';

export const UserFeed  = () => {
  return(

  <StyledUserFeed>
    <StyledH2>Que pena! Estamos em desenvolvimento <RiEmotionSadFill/></StyledH2>
    <StyledText>Nossa aplicação está em desenvolvimento, em breve teremos novidades</StyledText>
  </StyledUserFeed>
  )
}