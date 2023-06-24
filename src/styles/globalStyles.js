import { createGlobalStyle, } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --color-color-primary: #ff577f;
    --color-color-primary-50: #ff427f;
    --color-color-primary-disable: #59323f;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343b41;
    --color-grey-1: #868e96;
    --color-grey-0: #f8f9fa;
    --color-sucess: #3fe864;
    --color-negative: #e83f5b;
}

body{
  background:var(--color-grey-4);
  min-height: 100vh;
  max-width: 100vw;
  color: var(--color-grey-0);
  position: relative;
  

}

.erro{
  color: var(--color-negative);
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
}


input{
  color:var(--color-grey-0);
  border: 1px solid var(--color-grey-0);
  border-radius: 3.20867px;
  padding: 0px, 12px;
  outline: none;
  color: var(--color-grey-0);

  &::placeholder{
    color: var(--color-grey-1);
  }
}
option{
  color: var(--color-grey-0);
}
select option {
  color: var(--color-grey-0);
}
select:hover,
select:focus,
select:active,
select:checked {
  color: var(--color-grey-0);
  border: 1px solid var(--color-grey-0);
}

button{

  color: var(--color-grey-0);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12.8347px;
  line-height: 21px;
  outline: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading{
  width: 60px;
  height: 60px;
  border-radius:50%;
  animation: spin 1.2s linear infinite;
 
  &::before,
  &::after{
  content: "";
  position: absolute;
  border-radius: inherit;
  }
  &::before{
    width: 100%;
    height: 100%;
   background-image: 
   linear-gradient(0deg,
    #f0c 0%,
    #80f 100%
    );
  }
    &::after{
      width: 85%;
    height: 85%;
    background:var(--color-grey-4);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
  }

  .loadingContainer{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width : 100% ;
  height: 100%;
  position: absolute;
  
  }
`