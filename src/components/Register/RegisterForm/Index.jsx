import { useForm } from "react-hook-form";
import { StyledH1, StyledLabel, StyledLabelInfo } from "../../../styles/typography";
import { Input } from "../../Register/RegisterInput/Index";
import { StyledFormRegister } from "./RegisterFormStyles";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {  toast } from "react-toastify";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { Select } from "../RegisterSelect/Index";
import { useState } from "react";


export const Form = ( ) => {

  const [isLoading , setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors },reset } = useForm({
    resolver: zodResolver(RegisterFormSchema)
  })
  const navegate = useNavigate()
  const Register = async (formData) =>{
    try {
      const res = await api.post("/users",formData)
      notifySucess()
      reset()
      
      setTimeout(()=>{
        navegate("/")
      },3000)
    }
    catch(error) {
      notifyError(error)
    }
    finally{
      setIsLoading(true)
    }
   }
  

   const notifySucess = () => {
    toast.success("Conta criada com sucesso",{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  }
  const notifyError = () => {
    ("Ops deu algo de errado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const submit = (formData) => {
    Register(formData)
  }

  return (
    
      <StyledFormRegister onSubmit={handleSubmit(submit) }>
        <StyledH1>Crie sua conta</StyledH1>
        <StyledLabelInfo htmlFor="">Rapido e grátis, vamos nessa</StyledLabelInfo>
        
          <Input type="text" label="Nome" htmlFor="name"id="name" name="name" placeholder="Digite seu nome..." {...register("name")} errors={errors.name}/>

          <Input type="email" label="Email" htmlFor="email" id="email" name="email" placeholder="Digite seu email..." {...register("email")}  errors={errors.email}/>
         
          <Input type="password" label="Senha" htmlFor="password" id="password" name="password" placeholder="Digite sua senha..." {...register("password")} errors={errors.password}/>
          
          <Input type="password" label="Confirme a senha" htmlFor="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirme sua senha..." {...register("confirmPassword")} errors={errors.confirmPassword}/>

          <Input type="text" label="Bio" htmlFor="bio" id="bio" name="bio" placeholder="Fale sobre você..." {...register("bio")} errors={errors.bio}/>

          <Input type="number" label="Contato" htmlFor="contact" id="contact" name="contact" placeholder="Opção de Contato..." {...register("contact")} errors={errors.contact}/>

          <StyledLabel ></StyledLabel>
          <Select  htmlFor="course_module" label="Selecionar Módulo" id="course_module" name="course_module" errors={errors.course_module} {...register("course_module")}>
            <option value="">Escolha um Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo">Segundo módulo</option>
            <option value="Terceiro módulo">Terceiro módulo</option>
            <option value="Quarto módulo">Quarto módulo</option>
            <option value="Quinto módulo">Quinto módulo</option>
            <option value="Sexto módulo">Sexto módulo</option>
          </Select>
          {isLoading ? <button type="submit">Cadastrando...</button> : <button type="submit">Cadastrar</button>}
      </StyledFormRegister>
   
  )
}