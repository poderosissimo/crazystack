"use client";

import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useTranslation } from "react-i18next";
import Script from "next/script";

// Componente de input de endereço com autocomplete
const AddressInput = ({
  value,
  onChange,
  placeholder,
  required,
  ariaLabel,
}) => {
  const inputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    if (window.google && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ["address"],
          componentRestrictions: { country: "BR" },
        },
      );
      setAutocomplete(autocomplete);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        onChange(place.formatted_address);
      });
    }
  }, [onChange]);

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      aria-label={ariaLabel}
    />
  );
};

export default function FormularioOrcamento() {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const form = useForm({
    defaultValues: {
      dataPrevista: "",
      enderecoOrigem: "",
      enderecoDestino: "",
      tipoImovel: "",
      quantidadeItens: "",
      tipoItens: "",
      requisitosEspeciais: "",
      fotos: [],
    },
  });

  const updateProgress = () => {
    const fields = form.getValues();
    const filledFields = Object.values(fields).filter(Boolean).length;
    setProgress((filledFields / Object.keys(fields).length) * 100);
  };

  useEffect(() => {
    const subscription = form.watch(() => updateProgress());
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = (data) => {
    setShowSummary(true);
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`}
        strategy="lazyOnload"
      />
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{t("Solicitar Orçamento de Mudança")}</CardTitle>
          <CardDescription>
            {t(
              "Preencha o formulário abaixo com os detalhes da sua mudança para receber orçamentos personalizados.",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="dataPrevista"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Data Prevista da Mudança")}</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        required
                        aria-label={t("Data Prevista da Mudança")}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Selecione a data em que você planeja realizar a mudança.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enderecoOrigem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Endereço de Retirada")}</FormLabel>
                    <FormControl>
                      <Controller
                        name="enderecoOrigem"
                        control={form.control}
                        render={({ field }) => (
                          <AddressInput
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={t(
                              "Digite o endereço completo de onde os itens serão retirados",
                            )}
                            required
                            ariaLabel={t("Endereço de Retirada")}
                          />
                        )}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Informe o endereço completo de onde seus pertences serão retirados.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="enderecoDestino"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Endereço de Entrega")}</FormLabel>
                    <FormControl>
                      <Controller
                        name="enderecoDestino"
                        control={form.control}
                        render={({ field }) => (
                          <AddressInput
                            value={field.value}
                            onChange={field.onChange}
                            placeholder={t(
                              "Digite o endereço completo para onde os itens serão levados",
                            )}
                            required
                            ariaLabel={t("Endereço de Entrega")}
                          />
                        )}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Informe o endereço completo para onde seus pertences serão entregues.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipoImovel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Tipo de Imóvel")}</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("Selecione o tipo de imóvel")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casa">{t("Casa")}</SelectItem>
                          <SelectItem value="apartamento">
                            {t("Apartamento")}
                          </SelectItem>
                          <SelectItem value="escritorio">
                            {t("Escritório")}
                          </SelectItem>
                          <SelectItem value="outro">{t("Outro")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Escolha o tipo de imóvel de onde você está se mudando.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="quantidadeItens"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Quantidade Aproximada de Itens")}</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        placeholder={t("Ex: 50")}
                        required
                        aria-label={t("Quantidade Aproximada de Itens")}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Informe um número estimado de itens a serem transportados.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipoItens"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Tipos de Itens")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("Ex: móveis, eletrodomésticos, caixas")}
                        required
                        aria-label={t("Tipos de Itens")}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Liste os principais tipos de itens que serão transportados.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requisitosEspeciais"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Requisitos Especiais")}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t(
                          "Informe aqui se há itens frágeis, pesados ou outras necessidades especiais",
                        )}
                        aria-label={t("Requisitos Especiais")}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Descreva quaisquer necessidades especiais ou cuidados específicos para seus itens.",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fotos"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("Fotos dos Itens")}</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files)}
                        aria-label={t("Fotos dos Itens")}
                      />
                    </FormControl>
                    <FormDescription>
                      {t(
                        "Adicione fotos dos principais itens para ajudar na avaliação (opcional, máximo 5 fotos).",
                      )}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                {t("Solicitar Orçamentos")}
              </Button>
            </form>
          </Form>
        </CardContent>
        {showSummary && (
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>{t("Resumo da Solicitação")}</CardTitle>
            </CardHeader>
            <CardContent>
              <pre>{JSON.stringify(form.getValues(), null, 2)}</pre>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => {
                  console.log("Dados do formulário:", form.getValues());
                  form.reset();
                  setShowSummary(false);
                  setShowFeedback(true);
                  setTimeout(() => setShowFeedback(false), 5000);
                }}
              >
                {t("Confirmar e Enviar")}
              </Button>
              <Button variant="outline" onClick={() => setShowSummary(false)}>
                {t("Editar Informações")}
              </Button>
            </CardFooter>
          </Card>
        )}
        {showFeedback && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            {t(
              "Sua solicitação de orçamento foi enviada com sucesso! Em breve, empresas de mudança entrarão em contato com você.",
            )}
          </div>
        )}
      </Card>
    </>
  );
}
