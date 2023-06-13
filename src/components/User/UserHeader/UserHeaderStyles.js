import { styled } from "styled-components";

export const StyledHeader = styled.header`
  padding-left: clamp(40px , 50%, 200px);
  padding-right: clamp(40px , 50%, 200px);
  padding-top: 20px;
  
  @media (max-width: 768px) {
    padding-left: clamp(40px , 2.5rem, 200px);
    padding-right: clamp(40px , 2.5rem, 200px);
  
}
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center ;

  button{
    width: 55.49px;
    height: 32px;

    background: var(--color-grey-3);
    border-radius: 4px;
  }
`