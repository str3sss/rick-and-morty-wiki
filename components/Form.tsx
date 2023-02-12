'use client'

import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import {FormSchemaType, FormSchema } from '../types/Form'
import { zodResolver } from '@hookform/resolvers/zod';
type OneOnly<Obj, Key extends keyof Obj> = { [key in Exclude<keyof Obj, Key>]: null } & Pick<Obj, Key>;

function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('firstname')} disabled={isSubmitting} placeholder='firstname'/>
      {errors.firstname && <p>{errors.firstname.message}</p>}
      <input type="text" {...register('lastname')} disabled={isSubmitting} placeholder='lastname'/>
      {errors.lastname && <p>{errors.lastname.message}</p>}
      <input type="text" {...register('age')} disabled={isSubmitting} placeholder='age'/>
      {errors.age && <p>{errors.age.message}</p>}
      <input type="text" {...register('email')} disabled={isSubmitting} placeholder='email'/>
      {errors.email && <p>{errors.email.message}</p>}
      <button type="submit" disabled={isSubmitting}>Send</button>
    </form>
  )
}

export default Form