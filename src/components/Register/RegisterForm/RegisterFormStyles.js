import { styled } from "styled-components";

export const StyledFormRegister = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 33.5803px 17.5897px;
gap: 18px;
transition: 0.6s;

  width: 370px;
  

background: var(--color-grey-3);
box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
border-radius: 3.19812px;
@media (max-width: 768px) {

  width: 296px;
  
}


  >label{
    color: var(--color-grey-1);
  }

 button{
  width: 360px;
  height: 48px;

  transition: 0.6s;
  background: var(--color-color-primary-disable);
  &:hover{
  background: var(--color-color-primary);

  }
@media (max-width: 786px) {
  width: 300px; 
}
  border: 1.2182px solid var(--color-color-primary-disable);
  border-radius: 4px;

 }
`