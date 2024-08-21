import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "../../lib/utils";
import { UseFormReturn } from "react-hook-form";

interface IProps {
  id: string;
  label: string;
  form: UseFormReturn;
  fieldConfig: {};
  Field: React.ElementType;
}
export const FormFieldBuilder = ({
  form,
  id,
  label,
  Field,
  fieldConfig,
}: IProps) => {
  const existError = form.formState.errors[id];
  return (
    <FormField
      control={form.control}
      name={id}
      render={({ field }) => (
        <FormItem className="w-full">
          <div className="flex sm:flex-row flex-col gap-1">
            <FormLabel
              className={cn(
                "text-sm font-bold ",
                existError && "text-destructive"
              )}
            >
              {label}

              <div className="w-full flex flex-row">
                {existError && <span className="text-destructive">*</span>}
                <FormMessage />
              </div>
            </FormLabel>
          </div>

          <FormControl>
            <Field {...field} {...fieldConfig} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};
