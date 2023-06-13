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

    background: var(--color-color-primary);

    border: 1.2182px solid var(--color-color-primary);
    border-radius: 4.06066px;

  }
  .containerRegister{

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    label{
      color: var(--color-grey-1);
    }
    button{
      transition: 0.6s;
    width: 350px;
    height: 48px;

    @media (max-width: 48rem) {
      width: 291px;
    }

    background: var(--color-grey-1);

    border: 1.2182px solid var(--color-grey-1);
    border-radius: 4.06066px;

    }
  }
  
`