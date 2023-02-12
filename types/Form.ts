import { z } from 'zod'
import { SubmitHandler, useForm } from "react-hook-form";


export const FormSchema = z.object({
  firstname: z.string().min(1, {message: 'Required'}),
  lastname: z.string().min(1, {message: 'Required'}),
  email: z.string().email({message: 'Incorrect email'}),
  age: z.number().min(10, {message: 'You must be at least 16 years old'})
})

export type FormSchemaType = z.infer<typeof FormSchema>
