"use client";

import React from "react";
import {
  useController,
  FieldValues,
  UseControllerProps,
  type Path,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ControlledSelectProps<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
> extends Omit<React.ComponentProps<typeof Select>, "name" | "defaultValue"> {
  name: Path<FormValues>;
  label?: string;
  options: { value: string; label: string }[];
  control: UseControllerProps<FormValues>["control"];
  rules?: UseControllerProps<FormValues>["rules"];
  shouldUnregister?: UseControllerProps<FormValues>["shouldUnregister"];
  isMulti?: boolean;
}

export function ControlledSelect<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
>({
  name,
  label,
  options,
  control,
  rules,
  shouldUnregister,
  isMulti,
  ...selectProps
}: ControlledSelectProps<FormValues, Option>) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules, shouldUnregister });

  const handleChange = (value: string | string[]) => {
    if (isMulti) {
      const newValue = Array.isArray(field.value)
        ? field.value.includes(value)
          ? field.value.filter((v: string) => v !== value)
          : [...field.value, value]
        : [value];
      field.onChange(newValue);
    } else {
      field.onChange(value);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Select
              onValueChange={handleChange}
              value={field.value}
              {...selectProps}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {error && <FormMessage>{error.message}</FormMessage>}
        </FormItem>
      )}
    />
  );
}
