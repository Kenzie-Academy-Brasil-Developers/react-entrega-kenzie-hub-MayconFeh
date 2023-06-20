import { forwardRef } from "react";
import { StyledInput } from "./RegisterInput";
import { StyledLabel } from "../../../styles/typography";

export const Input =forwardRef( ({label,errors,...rest}, ref) => {
  return (
    <div>
      <StyledLabel {...rest}>{label}</StyledLabel>
      <StyledInput {...rest} ref={ref}  required />
      {errors ? <span className="erro">{errors.message}</span> : null}
    </div> 
)})