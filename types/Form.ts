import { z } from 'zod'
import { SubmitHandler, useForm } from "react-hook-form";
import { type } from 'os';


export const FormSchema = z.object({
  firstname: z.string().min(1, {message: 'firstname is required'}),
  lastname: z.string().min(1, {message: 'lastname is required'}),
  email: z.string().email({message: 'Incorrect email'}),
  age: z.coerce.number().min(16, {message: 'You must be at least 16 years old'})
})

export type FormSchemaType = z.infer<typeof FormSchema>
export type FormError = keyof FormSchemaType