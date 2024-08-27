"use client";

import { cn } from "../../../lib/utils";

import { Show } from "../../../lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { Form, Button, Card, CardTitle } from "../../ui";

import { AddButton } from "../../add-button";
import { FormFieldBuilder } from "../form-builder/form-field";
import { IFormSections } from "../form-builder/form-builer.interface";

interface IProps<Schema> {
  card?: boolean;
  onSubmit?: <T>(data: T) => void;
  buttonConfig?: {
    buttonText?: string;
    buttonClassName?: string;
  };
  children?: React.ReactNode;
  formConfig?: IFormSections<Schema>;
}

export function FormBuilderNative<Schema>({
  card,
  children,
  onSubmit,
  formConfig,
  buttonConfig = {
    buttonText: "Crear",
  },
}: IProps<Schema>) {
  const { buttonText } = buttonConfig;

  const { form, sections } = formConfig;

  return (
    <Form {...form}>
      <form autoFocus className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full h-full flex flex-col justify-start items-start gap-x-6 gap-y-6">
          {sections?.map((s) => {
            const { title, gridColumns, fields, addButton } = s;

            const sectionConfig = {
              form,
              title,
              fields,
              gridColumns,
            };

            return (
              <Show key={title}>
                <Show.If key={title} isTrue={card}>
                  <CardForm title={title} addButton={addButton}>
                    <SectionsForm {...sectionConfig} />
                  </CardForm>
                </Show.If>

                <Show.Else>
                  <SectionsForm {...sectionConfig} />
                </Show.Else>
              </Show>
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
}

const CardForm = ({ title, addButton, children }) => {
  return (
    <Card key={title} className="p-4 w-full">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <Show>
          <Show.If isTrue={!!addButton}>
            <AddButton onClick={addButton?.onClick} title={addButton?.title} />
          </Show.If>
        </Show>
      </div>

      <Separator className="my-4" />

      {children}
    </Card>
  );
};

const SectionsForm = ({ gridColumns, title, fields, form }) => {
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
};
