"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = {
  serviceType: string[];
  originAddress: string;
  destinationAddress: string;
  date: Date;
  time: string;
  vehicleType: string[];
  capacity: string[];
};

export default function AdvancedFilters() {
  const [date, setDate] = useState<Date>();

  const form = useForm<FormValues>({
    defaultValues: {
      serviceType: [],
      originAddress: "",
      destinationAddress: "",
      date: new Date(),
      time: "",
      vehicleType: [],
      capacity: [],
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Here you would typically send the data to your backend or update the app state
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Filtros Avançados de Serviços
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="serviceType"
            render={() => (
              <FormItem>
                <FormLabel className="text-base">1. Tipo de Serviço</FormLabel>
                <div className="grid grid-cols-3 gap-4">
                  {["Frete", "Carreto", "Mudança"].map((item) => (
                    <FormField
                      key={item}
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-4">
            <FormLabel className="text-base">2. Localização</FormLabel>
            <FormField
              control={form.control}
              name="originAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço de Origem</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Digite o endereço..." {...field} />
                      <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinationAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço de Destino</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input placeholder="Digite o endereço..." {...field} />
                      <MapPin className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <FormLabel className="text-base">3. Data e Hora</FormLabel>
            <div className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Data</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Escolha uma data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Hora</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione um horário" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }, (_, i) => i).map(
                              (hour) => (
                                <SelectItem
                                  key={hour}
                                  value={`${hour.toString().padStart(2, "0")}:00`}
                                >
                                  {`${hour.toString().padStart(2, "0")}:00`}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                        <Clock className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <FormLabel className="text-base">
              4. Tamanho e Tipo de Veículo
            </FormLabel>
            <FormField
              control={form.control}
              name="vehicleType"
              render={() => (
                <FormItem>
                  <FormLabel>Tipo de Veículo</FormLabel>
                  <div className="grid gap-2">
                    {[
                      "Pequena Caminhonete",
                      "Caminhão Médio",
                      "Caminhão Grande",
                    ].map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="vehicleType"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="capacity"
              render={() => (
                <FormItem>
                  <FormLabel>Capacidade</FormLabel>
                  <div className="grid gap-2">
                    {[
                      "Até 1 Tonelada",
                      "1 a 3 Toneladas",
                      "Acima de 3 Toneladas",
                    ].map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="capacity"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            Buscar
          </Button>
        </form>
      </Form>
    </div>
  );
}
