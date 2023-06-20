import { z } from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório...").email("Forneça um e-mail válido"),
  password: z.string().min(8, "A senha é obrigatório e deve conter pelo menos 8 caracteres...")
    .regex(/(?=.?[!@#$%^&])/, "É necessário pelo menos um caractere especial (!@#$%^&*)")
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
  name: z.string().min(3, "O nome é obrigatório e deve conter pelo menos 3 caracteres..."),
  confirmPassword: z.string().min(1,"Confirmar a senha é obrigatório"),
  bio: z.string().min(3, "A bio é obrigatório e deve conter pelo menos 3 caracteres..."),
  contact: z.string().regex(/^\d{10,11}$/, "O contato precisa ser um número com 10 a 11 dígitos."),
  course_module: z.string().nonempty('Por favor, selecione um módulo'),
}).refine(({password,confirmPassword})=> confirmPassword === password ,{
  message: "A confirmação e a senha precisam corresponder",
  path: ["confirmPassword"],
})