import { useForm } from "react-hook-form";
import { StyledH1, StyledLabel, StyledLabelInfo } from "../../../styles/typography";
import { InputReg } from "../../Register/RegisterInput/Index";
import { StyledFormRegister } from "./RegisterFormStyles";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../RegisterSelect/Index";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";


export const Form = ( ) => {

  const [isLoading , setIsLoading] = useState (false)

  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: zodResolver(RegisterFormSchema)
  })
 
  const {userRegister } = useContext(UserContext)
  
  const submit = (formData) => {
    userRegister(formData,setIsLoading)
  }

  return (
    
      <StyledFormRegister onSubmit={handleSubmit(submit) }>
        <StyledH1>Crie sua conta</StyledH1>
        <StyledLabelInfo htmlFor="">Rapido e grátis, vamos nessa</StyledLabelInfo>
        
          <InputReg className="regsInput" type="text" label="Nome" htmlFor="name"id="name" name="name" placeholder="Digite seu nome..." {...register("name")} errors={errors.name}/>

          <InputReg className="regsInput" type="email" label="Email" htmlFor="email" id="email" name="email" placeholder="Digite seu email..." {...register("email")}  errors={errors.email}/>
         
          <InputReg className="regsInput" type="password" label="Senha" htmlFor="password" id="password" name="password" placeholder="Digite sua senha..." {...register("password")} errors={errors.password}/>
          
          <InputReg className="regsInput" type="password" label="Confirme a senha" htmlFor="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha..." {...register("confirmPassword")} errors={errors.confirmPassword}/>

          <InputReg className="regsInput" type="text" label="Bio" htmlFor="bio" id="bio" name="bio" placeholder="Fale sobre você..." {...register("bio")} errors={errors.bio}/>

          <InputReg className="regsInput" type="number" label="Contato" htmlFor="contact" id="contact" name="contact" placeholder="Opção de Contato..." {...register("contact")} errors={errors.contact}/>

          <StyledLabel ></StyledLabel>
          <Select  htmlFor="course_module" label="Selecionar Módulo" id="course_module" name="course_module" errors={errors.course_module} {...register("course_module")}>
            <option value="">Escolha um Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
          </Select>
           <button type="submit">{isLoading ? "Cadastrando...": "Cadastrar"}</button> 
      </StyledFormRegister>
   
  )
}