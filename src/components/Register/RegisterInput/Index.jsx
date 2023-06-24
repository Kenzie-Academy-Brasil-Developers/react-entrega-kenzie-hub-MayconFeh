import { forwardRef } from "react";

import { StyledLabel } from "../../../styles/typography";
import { Input } from "../../Input/Index";
export const InputReg =forwardRef( ({htmlfor,label,errors,...rest}, ref) => {
  return (
    <div>
      <StyledLabel htmlFor={htmlfor}>{label}</StyledLabel>
      <Input {...rest} ref={ref}  required />
      {errors ? <span className="erro">{errors.message}</span> : null}
    </div> 
)})