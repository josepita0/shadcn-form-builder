import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

interface IProps {
  schema: z.AnyZodObject | z.ZodEffects<z.AnyZodObject>;
}
export const useInstanceForm = <I extends FieldValues>({ schema }: IProps) => {
  const form = useForm<I>({ resolver: zodResolver(schema) });

  return form;
};
