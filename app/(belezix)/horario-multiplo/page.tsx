"use client";

import { useState } from "react";
import { useForm, Control } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";

// Types (simplified for this example)
type DaysOptions = { label: string; value: string };
type HourValidatorInput = Record<string, string | string[]>;

// Mock data for hours and days
const listHours = Array.from({ length: 24 }, (_, i) => ({
  label: `${i.toString().padStart(2, "0")}:00`,
}));
const allDaysOptions: DaysOptions[] = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];

const HourWorkForm = ({
  control,
  daysOptions,
  listHours,
  daysOptionsName,
  haveLunchTime,
  setHaveLunchTime,
  hourWork,
  changeHour,
}: any) => {
  return (
    <Card className="mt-4">
      <CardContent>
        <div className="grid gap-4">
          <div>
            <Label>Work Days</Label>
            <MultiSelect
              options={daysOptions}
              onValueChange={(value) => changeHour(value, `${daysOptionsName}`)}
              placeholder="Select work days"
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Start Time</Label>
              <Select
                onValueChange={(value) =>
                  changeHour(value, `hourStart${daysOptionsName.slice(-1)}`)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select start time" />
                </SelectTrigger>
                <SelectContent>
                  {listHours.map((hour: { label: string }) => (
                    <SelectItem key={hour.label} value={hour.label}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>End Time</Label>
              <Select
                onValueChange={(value) =>
                  changeHour(value, `hourEnd${daysOptionsName.slice(-1)}`)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select end time" />
                </SelectTrigger>
                <SelectContent>
                  {listHours.map((hour: { label: string }) => (
                    <SelectItem key={hour.label} value={hour.label}>
                      {hour.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`lunchTime${daysOptionsName.slice(-1)}`}
              checked={haveLunchTime}
              onCheckedChange={setHaveLunchTime}
            />
            <Label htmlFor={`lunchTime${daysOptionsName.slice(-1)}`}>
              Include Lunch Break
            </Label>
          </div>
          {haveLunchTime && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Lunch Start</Label>
                <Select
                  onValueChange={(value) =>
                    changeHour(
                      value,
                      `hourLunchStart${daysOptionsName.slice(-1)}`,
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select lunch start" />
                  </SelectTrigger>
                  <SelectContent>
                    {listHours.map((hour: { label: string }) => (
                      <SelectItem key={hour.label} value={hour.label}>
                        {hour.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Lunch End</Label>
                <Select
                  onValueChange={(value) =>
                    changeHour(
                      value,
                      `hourLunchEnd${daysOptionsName.slice(-1)}`,
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select lunch end" />
                  </SelectTrigger>
                  <SelectContent>
                    {listHours.map((hour: { label: string }) => (
                      <SelectItem key={hour.label} value={hour.label}>
                        {hour.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default function Component() {
  const { control } = useForm<HourValidatorInput>();
  const [hourWork, setHourWork] = useState<HourValidatorInput>({});
  const [haveAlternativeHour, setHaveAlternativeHour] = useState(false);
  const [haveAlternativeHour2, setHaveAlternativeHour2] = useState(false);
  const [haveLunchTime1, setHaveLunchTime1] = useState(false);
  const [haveLunchTime2, setHaveLunchTime2] = useState(false);
  const [haveLunchTime3, setHaveLunchTime3] = useState(false);
  const [daysOptions1, setDaysOptions1] = useState(allDaysOptions);
  const [daysOptions2, setDaysOptions2] = useState(allDaysOptions);
  const [daysOptions3, setDaysOptions3] = useState(allDaysOptions);

  const changeHour = (value: string | string[], field: string) => {
    setHourWork((prev) => ({ ...prev, [field]: value }));

    if (field === "days1Options") {
      const selectedDays = value as string[];
      const remainingDays = allDaysOptions.filter(
        (day) => !selectedDays.includes(day.value),
      );
      setDaysOptions2(remainingDays);
      setDaysOptions3(remainingDays);
    } else if (field === "days2Options") {
      const selectedDays = value as string[];
      const remainingDays = daysOptions2.filter(
        (day) => !selectedDays.includes(day.value),
      );
      setDaysOptions3(remainingDays);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Establishment Working Hours</CardTitle>
      </CardHeader>
      <CardContent>
        <HourWorkForm
          control={control}
          daysOptions={daysOptions1}
          listHours={listHours}
          daysOptionsName="days1Options"
          haveLunchTime={haveLunchTime1}
          setHaveLunchTime={setHaveLunchTime1}
          hourWork={hourWork}
          changeHour={changeHour}
        />

        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => setHaveAlternativeHour(!haveAlternativeHour)}
          >
            {haveAlternativeHour ? "Remove" : "Add"} Alternative Schedule
          </Button>
        </div>

        {haveAlternativeHour && (
          <>
            <HourWorkForm
              control={control}
              daysOptions={daysOptions2}
              listHours={listHours}
              daysOptionsName="days2Options"
              haveLunchTime={haveLunchTime2}
              setHaveLunchTime={setHaveLunchTime2}
              hourWork={hourWork}
              changeHour={changeHour}
            />

            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setHaveAlternativeHour2(!haveAlternativeHour2)}
              >
                {haveAlternativeHour2 ? "Remove" : "Add"} Second Alternative
                Schedule
              </Button>
            </div>
          </>
        )}

        {haveAlternativeHour2 && (
          <HourWorkForm
            control={control}
            daysOptions={daysOptions3}
            listHours={listHours}
            daysOptionsName="days3Options"
            haveLunchTime={haveLunchTime3}
            setHaveLunchTime={setHaveLunchTime3}
            hourWork={hourWork}
            changeHour={changeHour}
          />
        )}

        <Button className="mt-6">Save Working Hours</Button>
      </CardContent>
    </Card>
  );
}
