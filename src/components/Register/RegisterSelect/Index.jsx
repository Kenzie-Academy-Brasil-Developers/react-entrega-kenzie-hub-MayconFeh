import { forwardRef } from "react";
import { SelectContStyled, SelectStyled } from "./RegisterSelectStyles";
import { StyledLabel } from "../../../styles/typography";


export const Select = forwardRef(({label,errors,children,...rest}, ref) => {
  return(
    <SelectContStyled>
      <StyledLabel {...rest}>{label}</StyledLabel>
      <SelectStyled ref={ref} {...rest}>
        {children}
      </SelectStyled>
      {errors ? <span className="erro">{errors.message}</span> : null}
    </SelectContStyled>
  )

})