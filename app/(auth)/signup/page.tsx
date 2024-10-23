"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Eye, EyeOff, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const signUpSchema = z
  .object({
    fullName: z.string().min(2, "Nome completo é obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string(),
    phone: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.enum(["male", "female", "other", ""]).optional(),
    address: z.string().optional(),
    terms: z
      .boolean()
      .refine((val) => val === true, "Você deve aceitar os termos"),
    newsletter: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type SignUpForm = z.infer<typeof signUpSchema>;

export default function AdvancedSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const password = watch("password", "");

  const onSubmit = async (data: SignUpForm) => {
    setIsLoading(true);
    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
    setSignUpSuccess(true);
  };

  const passwordStrength = (password: string) => {
    const strengthChecks = [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password),
    ];
    return strengthChecks.filter(Boolean).length;
  };

  if (signUpSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-6 bg-green-100 rounded-lg"
      >
        <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">
          Cadastro realizado com sucesso!
        </h2>
        <p>Verifique seu e-mail para confirmar sua conta.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="fullName">Nome Completo *</Label>
          <Input id="fullName" {...register("fullName")} />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Senha *</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <div className="mt-2">
            <div className="text-sm mb-1">Força da senha:</div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full ${
                  passwordStrength(password) < 3
                    ? "bg-red-500"
                    : passwordStrength(password) < 5
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
                style={{ width: `${(passwordStrength(password) / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="confirmPassword">Confirmar Senha *</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" {...register("phone")} />
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Data de Nascimento</Label>
          <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
        </div>

        <div>
          <Label>Gênero</Label>
          <RadioGroup defaultValue="">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" {...register("gender")} />
              <Label htmlFor="male">Masculino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="female"
                id="female"
                {...register("gender")}
              />
              <Label htmlFor="female">Feminino</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="other"
                id="other"
                {...register("gender")}
              />
              <Label htmlFor="other">Outro</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" {...register("address")} />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" {...register("terms")} />
          <Label htmlFor="terms">
            Eu aceito os{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="underline">
                  termos e condições
                </TooltipTrigger>
                <TooltipContent>
                  <p>Termos e condições detalhados aqui</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
        )}

        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" {...register("newsletter")} />
          <Label htmlFor="newsletter">Receber novidades e promoções</Label>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando
            </>
          ) : (
            "Cadastrar"
          )}
        </Button>
      </form>

      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">Ou cadastre-se com</p>
        <div className="mt-4 flex justify-center space-x-4">
          <Button variant="outline">Google</Button>
          <Button variant="outline">Facebook</Button>
          <Button variant="outline">Apple</Button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Já tem uma conta?{" "}
        <a href="#" className="font-medium text-blue-600 hover:underline">
          Faça login
        </a>
      </p>
    </motion.div>
  );
}
