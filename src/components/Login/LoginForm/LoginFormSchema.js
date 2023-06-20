import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().min(1,"Insira o email cadastrado"),
    password: z.string().min(8,"Insira a senha cadastrada")
})