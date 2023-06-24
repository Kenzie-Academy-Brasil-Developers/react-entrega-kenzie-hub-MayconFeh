import { forwardRef } from "react";
import { StyledInput } from "./input";

export const Input = forwardRef( ({...rest},ref) => {
  return <StyledInput {...rest} ref={ref}/>
})