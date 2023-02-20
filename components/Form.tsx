'use client';

import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { FormSchemaType, FormSchema } from '../types/Form';
import { zodResolver } from '@hookform/resolvers/zod';

function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode:'all'
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 p-4 min-w-[300px] bg-white">
      <input
        className="bg-primary rounded-lg h-12 pl-4 text-white"
        type="text"
        {...register('firstname')}
        disabled={isSubmitting}
        placeholder="firstname"
      />
      {errors.firstname && <p className="error__message">{errors.firstname.message}</p>}
      <input
        className="bg-primary rounded-lg h-12 pl-4 text-white"
        type="text"
        {...register('lastname')}
        disabled={isSubmitting}
        placeholder="lastname"
      />
      {errors.lastname && <p className="error__message">{errors.lastname.message}</p>}
      <input
        className="bg-primary  rounded-lg h-12 pl-4 text-white"
        type="text"
        {...register('age')}
        disabled={isSubmitting}
        placeholder="age"
      />
      {errors.age && <p className="error__message">{errors.age.message}</p>}
      <input
        className="bg-primary rounded-lg h-12 pl-4 text-white"
        type="email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register('email')}
        disabled={isSubmitting}
        placeholder="email"
      />
      {errors.email && <p className="error__message">{errors.email.message}</p>}
      <button type="submit" className="bg-pink mx-auto rounded-lg px-4 py-2" disabled={isSubmitting}>
        Send
      </button>
    </form>
  );
}

export default Form;
