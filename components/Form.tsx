'use client';

import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { FormSchemaType, FormSchema } from '../types/Form';
import { zodResolver } from '@hookform/resolvers/zod';
import { isValid } from 'zod';

function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode:'all'
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    await console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" border-2 border-black flex flex-col items-center gap-2 p-4 min-w-[300px] max-w-[600px] pt-16 pb-12 w-4/5 bg-gradient-to-tr rounded-md from-white via-fuchsia-100 to-white">
      <input
        className="bg-primary rounded-lg h-12 pl-4 min-w-[250px] text-white focus:text-opacity-50"
        type="text"
        {...register('firstname')}
        disabled={isSubmitting}
        placeholder="firstname"
        autoComplete='off'
      />
      {errors.firstname && <p className="error__message">{errors.firstname.message}</p>}
      <input
        className="bg-primary rounded-lg h-12 pl-4 min-w-[250px]  text-white"
        type="text"
        {...register('lastname')}
        disabled={isSubmitting}
        placeholder="lastname"
        autoComplete='off'
      />
      {errors.lastname && <p className="error__message">{errors.lastname.message}</p>}
      <input
        className="bg-primary  rounded-lg h-12 pl-4 min-w-[250px]  text-white"
        type="text"
        {...register('age')}
        disabled={isSubmitting}
        placeholder="age"
      />
      {errors.age && <p className="error__message">{errors.age.message}</p>}
      <input
        className="bg-primary rounded-lg h-12 pl-4 min-w-[250px]  text-white"
        type="email"
        aria-invalid={errors.email ? "true" : "false"}
        {...register('email')}
        disabled={isSubmitting}
        placeholder="email"
        autoComplete='off'
      />
      {errors.email && <p className="error__message">{errors.email.message}</p>}
      <button type="submit" className="bg-primary text-white mx-auto rounded-lg px-4 py-2 mt-2 disabled:bg-gray disabled:bg-opacity-40" disabled={!isDirty || !isValid}>
        Send
      </button>
    </form>
  );
}

export default Form;
