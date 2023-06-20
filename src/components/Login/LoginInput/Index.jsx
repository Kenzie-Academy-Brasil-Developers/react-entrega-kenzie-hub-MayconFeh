import { forwardRef } from "react";
import { StyledInput } from "./LoginInput";

export const Input = forwardRef( ({...rest},ref) => {
  return <StyledInput {...rest} ref={ref}/>
})