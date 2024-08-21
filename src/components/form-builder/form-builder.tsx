import { cn } from "../../lib/utils";

import { Form } from "../ui/form";
import { Button } from "../ui/button";

import { FormFieldBuilder } from "../form-builder/form-field";
import { IFormSections } from "../form-builder/form-builer.interface";

interface IProps {
  onSubmit?: <T>(data: T) => void;
  buttonText?: string;
  formConfig?: IFormSections<any>;
  children?: React.ReactNode;
}

export const FormBuilderNative = ({
  children,
  onSubmit,
  formConfig,
  buttonText,
}: IProps) => {
  const { form, sections } = formConfig;

  return (
    <Form {...form}>
      <form autoFocus className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full h-full flex flex-col justify-start items-start gap-x-6 gap-y-6">
          {sections?.map((s) => {
            const { title, gridColumns, fields } = s;

            return (
              <section key={title} className="w-full space-y-4">
                <div
                  className={cn(
                    "w-full gap-y-3 gap-x-5 grid",
                    gridColumns ? `grid-cols-${gridColumns}` : "grid-cols-1"
                  )}
                >
                  {fields?.map((f) => {
                    const { fieldConfig } = f;

                    return (
                      <FormFieldBuilder
                        key={fieldConfig.id}
                        id={fieldConfig.id}
                        form={form}
                        {...f}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })}
          {children}

          {buttonText && (
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
