import { styled } from "styled-components";

export const ContainerLogoResg = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
transition: 0.6s;

gap: 225px;
@media (max-width: 768px) {
  gap: 150px;
}

>button{
  width: 79.54px;
height: 31.95px;
background: var(--color-grey-3);
border-radius: 4px;
}
`