import { styled } from "styled-components";

export const StyledUserInfo = styled.div`

height: 131px;
margin-top: 20px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: clamp(40px , 50%, 200px);
  padding-right: clamp(40px , 50%, 200px);
  >p{
    color: var(--color-grey-1);
  }
  
  @media (max-width: 768px) {
    padding-left: clamp(40px , 2.5rem, 200px);
    padding-right: clamp(40px , 2.5rem, 200px);
    flex-direction: column;
    justify-content:center;
    align-items: center;
}

border-bottom: 1px solid var(--color-grey-3) ;
border-top: 1px solid var(--color-grey-3) ;
`