import { styled } from "styled-components";

export const StyledUserFeed = styled.main`
    padding-left: clamp(40px , 50%, 200px);
  padding-right: clamp(40px , 50%, 200px);
  padding-top: 20px;
   display: flex;
   flex-direction: column;
   gap: 20px;
  @media (max-width: 768px) {
    padding-left: clamp(40px , 2.5rem, 200px);
    padding-right: clamp(40px , 2.5rem, 200px);
    
    
}
`