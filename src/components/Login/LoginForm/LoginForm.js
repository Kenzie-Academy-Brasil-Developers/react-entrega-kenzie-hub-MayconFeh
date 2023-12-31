import { styled } from "styled-components";

export const StyledForm = styled.form`
  background:var(--color-grey-3); 

  border-radius: 3.20867px;
  
 
  transition: 0.6s;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 33.6911px 17.6477px;
  gap: 20px;

  width: 369px;
  height: 415px;
   @media (max-width: 768px) {
    width: 296px;
    height: 402.69px;
  } 
  .containerInputs{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }
  button{
    transition: 0.6s;
    width: 350px;
    height: 48px;

    @media (max-width: 48rem) {
      width: 291px;
    }

    background: var(--color-color-primary-disable);
    border: 1.2182px solid var(--color-color-primary-disable);
    border-radius: 4.06066px;

    &:hover{
      background: var(--color-color-primary);
      border: 1.2182px solid var(--color-color-primary);

    }

  }
  .containerRegister{

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    label{
      color: var(--color-grey-1);
    }
    
    .buttonRegs{
      transition: 0.6s;
    width: 350px;
    height: 48px;

    background: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4.06066px;
    &:hover{
      background: var(--color-grey-1);
      border: 1.2182px solid var(--color-grey-1);
      
      
    }
    @media (max-width: 48rem) {
      width: 291px;
    }
  
    }
  }
  a{
    width: fit-content;
  }
  .InpLogin {
    box-sizing: border-box;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8.14px;
    padding-left:20px;

    width: 360px;
    height: 48px;
    @media (max-width: 768px) {
      width: 100%;
    }

    background: var(--color-grey-2);

    border: 0.9772px solid var(--color-grey-0);
    border-radius: 3.20867px;

  }
`