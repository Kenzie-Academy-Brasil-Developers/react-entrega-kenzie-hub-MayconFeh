import { styled } from "styled-components";

export const StyledInput = styled.input`
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

`