import { styled } from "styled-components";

export const StyledFormRegister = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 33.5803px 17.5897px;
gap: 18px;
transition: 0.6s;

  width: 370px;
height: 891.19px;

background: var(--color-grey-3);
box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
border-radius: 3.19812px;
@media (max-width: 768px) {

  width: 296px;
height: 709.96px;
}
div{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 10px;

  >select{
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8.14px;

    
    width: 360px;
    height: 48px;

    @media (max-width: 768px) {
      width: 100%;
    }

    background: var(--color-grey-2);

    border: 0.9772px solid var(--color-grey-0);
    border-radius: 3.20867px;
  }
}

  >label{
    color: var(--color-grey-1);
  }

 button{
  width: 360px;
  height: 48px;

/* color-primary-Disable */

background: var(--color-color-primary-disable);
/* color-primary-Disable */

border: 1.2182px solid var(--color-color-primary-disable);
border-radius: 4px;

 }
`