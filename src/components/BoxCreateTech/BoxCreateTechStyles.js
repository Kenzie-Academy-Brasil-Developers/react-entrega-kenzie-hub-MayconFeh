import { styled } from "styled-components";

export const StyledOverlayModal= styled.div`
  position: fixed;
  

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0,0,0,.3);

  .boxModal{
    width: 369px;
    height: 350px;
    transition: 0.6s;
    border-radius: 4px;
    background: var(--color-grey-3);
    box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px rgba(0, 0, 0, 0.25);
    display: flex;
     
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 768px) {
      width: 296px;
      
    }
  }
  .headerModal{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    background: var(--color-grey-2);
    border-radius: 4px 4px 0 0;
  }
  .formModal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding: 20px;
    gap: 20px;
    >input{
      padding-left: 20px;
      border-radius: 4px;
      width: 92%;
      height: 48px;
      background: var(--color-grey-2);
      border: transparent;
      &:hover,
      &:focus{
        border: 1px solid var(--color-grey-0);
      }
    }
    >select{
      padding-left: 20px;
      border-radius: 4px;
      color: var(--color-grey-0);
      width: 100%;
      height: 48px;
      background: var(--color-grey-2);
      border: transparent;
      &:hover,
      &:focus,
      &:active,
      &:checked {
        border: 1px solid var(--color-grey-0);
      }
    }
    >button{
      background: var(--color-color-primary-disable);
      height: 48px;
      border-radius: 8px;
      
      &:hover{
        background: var(--color-color-primary);
      }
    }
  }
`