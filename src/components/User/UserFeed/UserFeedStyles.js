import { styled } from "styled-components";

export const StyledUserFeed = styled.main`
    padding-left: clamp(40px , 100%, 200px);
  padding-right: clamp(40px , 100%, 200px);
  padding-top: 20px;
   display: flex;
   flex-direction: column;
   gap: 20px;
  @media (max-width: 768px) {
    padding-left: clamp(40px , 2.5rem, 200px);
    padding-right: clamp(40px , 2.5rem, 200px);
    
    
}
>div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  >button{
    width: 2.03031rem;
    height: 2rem;
    background: var(--color-grey-3);
    font-size:16px;
    font-weight: 700;
  }
}
>ul{
  display: flex;
 
  padding: 1.375rem 1.1875rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--color-grey-3);
  width: 95.5%;
  height: 26rem;
  transition: 0.6s;
  overflow-y: auto;
  @media (max-width: 768px) {
    width: 94%;
  }
  @media (max-width: 438px) {
    width: 89%;
  }
  >li{
    height: 49px;
    width: 100%;
    background: var(--color-grey-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px ;
    &:hover{
      background: var(--color-grey-2);
    }
    >p{
      color: var(--color-grey-1);
    }
  }
}
`