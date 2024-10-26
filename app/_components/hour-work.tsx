"use client";

import React from "react";
import { Control } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslation } from "../_helpers/fakei18n";

export type HourValidatorInput = {
  hourStart1: string;
  hourEnd1: string;
  hourLunchStart1?: string;
  hourLunchEnd1?: string;
  hourStart2?: string;
  hourEnd2?: string;
  hourLunchStart2?: string;
  hourLunchEnd2?: string;
  hourStart3?: string;
  hourEnd3?: string;
  hourLunchStart3?: string;
  hourLunchEnd3?: string;
};

export interface DaysOptions {
  label: string;
  value: string;
}

export type CreateOwnerFormData = {
  name: string;
  description: string;
  minimumTimeForReSchedule?: number;
  active?: boolean;
  haveDelivery?: boolean;
  days1Options?: DaysOptions[];
  days2Options?: DaysOptions[];
  days3Options?: DaysOptions[];
};

export type EditOwnerFormData = CreateOwnerFormData;

type HourWorkFormInput = {
  props: {
    labelDayWork: string;
    labelHourStart: string;
    labelHourEnd: string;
    labelHourLunchStart: string;
    labelHourLunchEnd: string;
    control: Control<any>;
    daysOptions: DaysOptions[];
    listHours: { label: string }[];
    daysOptionsName: string;
    flagDependent?: boolean;
    valueHourStart: string;
    onChangeHourStart: (value: string) => void;
    valueHourLunchStart: string;

    onChangeHourLunchStart: (value: string) => void;
    valueHourLunchEnd: string;
    onChangeHourLunchEnd: (value: string) => void;
    valueHourEnd: string;
    onChangeHourEnd: (value: string) => void;
  };
};

type HourWorkProps = {
  changeHour: (event: any, field: string) => void;
  listHours: { label: string }[];
  hourWork: HourValidatorInput;
  daysOptions1: DaysOptions[];
  daysOptions2: DaysOptions[];
  daysOptions3: DaysOptions[];
  control: Control<any>;
  haveAlternativeHour: boolean;
  setHaveAlternativeHour: React.Dispatch<React.SetStateAction<boolean>>;
  haveAlternativeHour2: boolean;
  setHaveAlternativeHour2: React.Dispatch<React.SetStateAction<boolean>>;
  haveLunchTime1: boolean;
  setHaveLunchTime1: React.Dispatch<React.SetStateAction<boolean>>;
  haveLunchTime2: boolean;
  setHaveLunchTime2: React.Dispatch<React.SetStateAction<boolean>>;
  haveLunchTime3: boolean;
  setHaveLunchTime3: React.Dispatch<React.SetStateAction<boolean>>;
};

type HourWorksInput = {
  props: HourWorkProps;
};

export const HourWorks = ({
  props: {
    haveLunchTime1,
    setHaveLunchTime1,
    haveLunchTime2,
    setHaveLunchTime2,
    haveLunchTime3,
    setHaveLunchTime3,
    changeHour,
    listHours,
    hourWork,
    daysOptions1,
    daysOptions2,
    daysOptions3,
    control,
    haveAlternativeHour,
    setHaveAlternativeHour,
    haveAlternativeHour2,
    setHaveAlternativeHour2,
  },
}: HourWorksInput) => {
  const { onChanges } = useOnChanges({ changeHour });
  const { t } = useTranslation(["PAGES"]);

  return (
    <div className="space-y-6">
      <HourWorkForm
        props={{
          labelDayWork: t("PAGES:FIELDS.daysOfHourWorked", {
            defaultValue: "Dias de funcionamento 1",
          }),
          labelHourStart: t("PAGES:FIELDS.hourInit", {
            defaultValue: "Hora de início",
          }),
          labelHourEnd: t("PAGES:FIELDS.hourEnd", {
            defaultValue: "Hora de término",
          }),
          labelHourLunchStart: t("PAGES:FIELDS.lunchTimeInit", {
            defaultValue: "Hora de início do almoço",
          }),
          labelHourLunchEnd: t("PAGES:FIELDS.lunchTimeEnd", {
            defaultValue: "Hora de término do almoço",
          }),
          control,
          daysOptions: daysOptions1,
          listHours,
          daysOptionsName: "days1Options",
          flagDependent: haveLunchTime1,
          valueHourStart: hourWork.hourStart1,
          onChangeHourStart: onChanges.onChangehourStart1,
          valueHourLunchStart: hourWork.hourLunchStart1 || "",
          onChangeHourLunchStart: onChanges.onChangehourLunchStart1,
          valueHourLunchEnd: hourWork.hourLunchEnd1 || "",
          onChangeHourLunchEnd: onChanges.onChangehourLunchEnd1,
          valueHourEnd: hourWork.hourEnd1,
          onChangeHourEnd: onChanges.onChangehourEnd1,
        }}
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="haveLunchTime1"
          checked={haveLunchTime1}
          onCheckedChange={(checked) => setHaveLunchTime1(checked as boolean)}
        />
        <Label htmlFor="haveLunchTime1">
          {t("PAGES:FIELDS.haveLunchTime", {
            defaultValue: "Possui horário de almoço?",
          })}
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="haveAlternativeHour"
          checked={haveAlternativeHour}
          onCheckedChange={(checked) =>
            setHaveAlternativeHour(checked as boolean)
          }
        />
        <Label htmlFor="haveAlternativeHour">
          {t("PAGES:FIELDS.haveAlternativeDaysWorked", {
            defaultValue: "Possui horário alternativo?",
          })}
        </Label>
      </div>
      {haveAlternativeHour && (
        <div className="space-y-6">
          <HourWorkForm
            props={{
              labelDayWork: t("PAGES:FIELDS.daysOfHourWorked", {
                defaultValue: "Dias de funcionamento 2",
              }),
              labelHourStart: t("PAGES:FIELDS.hourInit", {
                defaultValue: "Hora de início",
              }),
              labelHourEnd: t("PAGES:FIELDS.hourEnd", {
                defaultValue: "Hora de término",
              }),
              labelHourLunchStart: t("PAGES:FIELDS.lunchTimeInit", {
                defaultValue: "Hora de início do almoço",
              }),
              labelHourLunchEnd: t("PAGES:FIELDS.lunchTimeEnd", {
                defaultValue: "Hora de término do almoço",
              }),
              control,
              daysOptions: daysOptions2,
              listHours,
              daysOptionsName: "days2Options",
              flagDependent: haveLunchTime2,
              valueHourStart: hourWork.hourStart2 || "",
              onChangeHourStart: onChanges.onChangehourStart2,
              valueHourLunchStart: hourWork.hourLunchStart2 || "",
              onChangeHourLunchStart: onChanges.onChangehourLunchStart2,
              valueHourLunchEnd: hourWork.hourLunchEnd2 || "",
              onChangeHourLunchEnd: onChanges.onChangehourLunchEnd2,
              valueHourEnd: hourWork.hourEnd2 || "",
              onChangeHourEnd: onChanges.onChangehourEnd2,
            }}
          />
          <div className="flex items-center space-x-2">
            <Checkbox
              id="haveLunchTime2"
              checked={haveLunchTime2}
              onCheckedChange={(checked) =>
                setHaveLunchTime2(checked as boolean)
              }
            />
            <Label htmlFor="haveLunchTime2">
              {t("PAGES:FIELDS.haveLunchTime", {
                defaultValue: "Possui horário de almoço?",
              })}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="haveAlternativeHour2"
              checked={haveAlternativeHour2}
              onCheckedChange={(checked) =>
                setHaveAlternativeHour2(checked as boolean)
              }
            />
            <Label htmlFor="haveAlternativeHour2">
              {t("PAGES:FIELDS.haveAnotherAlternativeDaysWorked", {
                defaultValue: "Possui horário alternativo?",
              })}
            </Label>
          </div>
          {haveAlternativeHour2 && (
            <div className="space-y-6">
              <HourWorkForm
                props={{
                  labelDayWork: t("PAGES:FIELDS.daysOfHourWorked", {
                    defaultValue: "Dias de funcionamento 3",
                  }),
                  labelHourStart: t("PAGES:FIELDS.hourInit", {
                    defaultValue: "Hora de início",
                  }),
                  labelHourEnd: t("PAGES:FIELDS.hourEnd", {
                    defaultValue: "Hora de término",
                  }),
                  labelHourLunchStart: t("PAGES:FIELDS.lunchTimeInit", {
                    defaultValue: "Hora de início do almoço",
                  }),
                  labelHourLunchEnd: t("PAGES:FIELDS.lunchTimeEnd", {
                    defaultValue: "Hora de término do almoço",
                  }),
                  control,
                  daysOptions: daysOptions3,
                  listHours,
                  daysOptionsName: "days3Options",
                  flagDependent: haveLunchTime3,
                  valueHourStart: hourWork.hourStart3 || "",
                  onChangeHourStart: onChanges.onChangehourStart3,
                  valueHourLunchStart: hourWork.hourLunchStart3 || "",
                  onChangeHourLunchStart: onChanges.onChangehourLunchStart3,
                  valueHourLunchEnd: hourWork.hourLunchEnd3 || "",
                  onChangeHourLunchEnd: onChanges.onChangehourLunchEnd3,
                  valueHourEnd: hourWork.hourEnd3 || "",
                  onChangeHourEnd: onChanges.onChangehourEnd3,
                }}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="haveLunchTime3"
                  checked={haveLunchTime3}
                  onCheckedChange={(checked) =>
                    setHaveLunchTime3(checked as boolean)
                  }
                />
                <Label htmlFor="haveLunchTime3">
                  {t("PAGES:FIELDS.haveAnotherAlternativeLunchTimeDaysWorked", {
                    defaultValue: "Possui horário de almoço alternativo?",
                  })}
                </Label>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const useOnChanges = ({
  changeHour,
}: {
  changeHour: (event: any, field: string) => void;
}) => {
  const createOnChange = (field: string) => (value: string) =>
    changeHour(value, field);
  const fields = [
    "hourStart1",
    "hourEnd1",
    "hourLunchStart1",
    "hourLunchEnd1",
    "hourStart2",
    "hourEnd2",
    "hourLunchStart2",
    "hourLunchEnd2",
    "hourStart3",
    "hourEnd3",
    "hourLunchStart3",
    "hourLunchEnd3",
  ];
  const onChanges = fields.reduce((acc: any, field) => {
    acc[`onChange${field}`] = createOnChange(field);
    return acc;
  }, {});
  return { onChanges };
};

export const HourWorkForm = ({
  props: {
    labelDayWork = "Dias de funcionamento 1",
    labelHourStart = "Horário de abertura 1",
    labelHourEnd = "Horário de fechamento 1",
    labelHourLunchStart = "Horário de almoço 1",
    labelHourLunchEnd = "Horário de retorno do almoço 1",
    control,
    daysOptions,
    listHours,
    daysOptionsName = "days1Options",
    flagDependent = false,
    valueHourStart,
    onChangeHourStart,
    valueHourLunchStart,
    onChangeHourLunchStart,
    valueHourLunchEnd,
    onChangeHourLunchEnd,
    valueHourEnd,
    onChangeHourEnd,
  },
}: HourWorkFormInput) => {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name={daysOptionsName}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{labelDayWork}</FormLabel>
            <FormControl>
              <Select
                onValueChange={(value) => field.onChange(value.split(","))}
                value={field.value?.join(",")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione pelo menos 1 dia" />
                </SelectTrigger>
                <SelectContent>
                  {daysOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="openHour"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{labelHourStart}</FormLabel>
            <Select onValueChange={onChangeHourStart} value={valueHourStart}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o horário de abertura" />
              </SelectTrigger>
              <SelectContent>
                {listHours.map((hour) => (
                  <SelectItem key={hour.label} value={hour.label}>
                    {hour.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="endHour"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{labelHourEnd}</FormLabel>
            <Select onValueChange={onChangeHourEnd} value={valueHourEnd}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o horário de fechamento" />
              </SelectTrigger>
              <SelectContent>
                {listHours.map((hour) => (
                  <SelectItem key={hour.label} value={hour.label}>
                    {hour.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {flagDependent && (
        <>
          <FormField
            control={control}
            name="openHourLunch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labelHourLunchStart}</FormLabel>
                <Select
                  onValueChange={onChangeHourLunchStart}
                  value={valueHourLunchStart}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o horário de início do almoço" />
                  </SelectTrigger>
                  <SelectContent>
                    {listHours.map((hour) => (
                      <SelectItem key={hour.label} value={hour.label}>
                        {hour.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="endHourLunch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labelHourLunchEnd}</FormLabel>
                <Select
                  onValueChange={onChangeHourLunchEnd}
                  value={valueHourLunchEnd}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o horário de fim do almoço" />
                  </SelectTrigger>
                  <SelectContent>
                    {listHours.map((hour) => (
                      <SelectItem key={hour.label} value={hour.label}>
                        {hour.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </>
      )}
    </div>
  );
};

export const daysOptions = [
  { value: "monday", label: "Segunda-feira" },
  { value: "tuesday", label: "Terça-feira" },
  { value: "wednesday", label: "Quarta-feira" },
  { value: "thursday", label: "Quinta-feira" },
  { value: "friday", label: "Sexta-feira" },
  { value: "saturday", label: "Sábado" },
  { value: "sunday", label: "Domingo" },
];

export const listHours = [
  { label: "7:00" },
  { label: "7:30" },
  { label: "8:00" },
  { label: "8:30" },
  { label: "9:00" },
  { label: "9:30" },
  { label: "10:00" },
  { label: "10:30" },
  { label: "11:00" },
  { label: "11:30" },
  { label: "12:00" },
  { label: "12:30" },
  { label: "13:00" },
  { label: "13:30" },
  { label: "14:00" },
  { label: "14:30" },
  { label: "15:00" },
  { label: "15:30" },
  { label: "16:00" },
  { label: "16:30" },
  { label: "17:00" },
  { label: "17:30" },
  { label: "18:00" },
  { label: "18:30" },
  { label: "19:00" },
  { label: "19:30" },
  { label: "20:00" },
  { label: "20:30" },
  { label: "21:00" },
  { label: "21:30" },
  { label: "22:00" },
  { label: "22:30" },
  { label: "23:00" },
  { label: "23:30" },
];

type Day = {
  [x: string]: boolean;
};

export type Days = {
  days1: Day;
  days2?: Day;
  days3?: Day;
};

export function formatOptions(day: Day | undefined) {
  if (!day) return [];
  const options: any = [];
  for (const [dayOfWeek, value] of Object.entries(day)) {
    if (value) {
      const currentValue = dayOfWeek?.substring(0, dayOfWeek?.length - 1);
      options.push({
        label: daysOptions?.find?.((day) => day?.value === currentValue)?.label,
        value: dayOfWeek,
      });
    }
  }
  return options;
}

export function formatDays(array: any, numberOfDay: string) {
  return {
    ["monday" + numberOfDay]: getDayOfWeek(array, "monday" + numberOfDay),
    ["tuesday" + numberOfDay]: getDayOfWeek(array, "tuesday" + numberOfDay),
    ["wednesday" + numberOfDay]: getDayOfWeek(array, "wednesday" + numberOfDay),
    ["thursday" + numberOfDay]: getDayOfWeek(array, "thursday" + numberOfDay),
    ["friday" + numberOfDay]: getDayOfWeek(array, "friday" + numberOfDay),
    ["saturday" + numberOfDay]: getDayOfWeek(array, "saturday" + numberOfDay),
    ["sunday" + numberOfDay]: getDayOfWeek(array, "sunday" + numberOfDay),
  };
}

function getDayOfWeek(array: any, value: string): boolean {
  return !!array?.find?.((item: any) => item?.value === value);
}
