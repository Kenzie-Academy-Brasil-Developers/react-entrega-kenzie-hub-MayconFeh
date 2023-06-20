import { styled } from "styled-components";

export const SelectStyled = styled.select`


  
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8.14px;
    transition: 0.6s;
    padding: 0px 20px;
    color:var(--color-grey-0);

    width: 360px;
    height: 48px;

    @media (max-width: 768px) {
      width: 100%;
    }

    background: var(--color-grey-2);

    border: 0.9772px solid var(--color-grey-0);
    border-radius: 3.20867px;
  

`
export const SelectContStyled = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`