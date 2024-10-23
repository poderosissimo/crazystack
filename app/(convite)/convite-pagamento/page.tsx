"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ArrowLeft, CreditCard, Calendar, Lock, User } from "lucide-react";

interface CreditCardPaymentProps {
  totalAmount: number;
  onBack: () => void;
  onPaymentComplete: () => void;
}
export default function Page() {
  return (
    <CreditCardPayment
      totalAmount={85}
      onBack={() => {}}
      onPaymentComplete={() => {}}
    />
  );
}
function CreditCardPayment({
  totalAmount,
  onBack,
  onPaymentComplete,
}: CreditCardPaymentProps) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment gateway
    // For this example, we'll just simulate a successful payment
    console.log("Payment processed");
    onPaymentComplete();
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-pink-50 bg-opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZjFmMiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZjMGNiIiBzdHJva2Utd2lkdGg9IjIiPjwvY2lyY2xlPgo8cGF0aCBkPSJNMzAgMTBjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTAtMTAtNC41LTEwLTEwIDQuNS0xMCAxMC0xMHoiIGZpbGw9IiNmZmMwY2IiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')] p-4 md:p-8 flex items-center justify-center">
      <Card className="w-full max-w-[95%] md:max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-pink-400 to-pink-300 text-white p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl font-bold">
            Pagamento com Cartão de Crédito
          </CardTitle>
          <CardDescription className="text-pink-100 text-sm md:text-base">
            Insira os detalhes do seu cartão para finalizar o pedido
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-4 md:p-6 space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="cardNumber"
                className="flex items-center space-x-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>Número do Cartão</span>
              </Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(formatCardNumber(e.target.value))
                }
                maxLength={19}
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="expiryDate"
                  className="flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Data de Expiração</span>
                </Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/AA"
                  value={expiryDate}
                  onChange={(e) =>
                    setExpiryDate(formatExpiryDate(e.target.value))
                  }
                  maxLength={5}
                  className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>CVV</span>
                </Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  maxLength={4}
                  className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="cardholderName"
                className="flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Nome no Cartão</span>
              </Label>
              <Input
                id="cardholderName"
                placeholder="Nome Completo"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className="transition duration-200 ease-in-out focus:ring-2 focus:ring-pink-300 hover:border-pink-300"
              />
            </div>
            <div className="bg-pink-50 p-4 rounded-md">
              <p className="text-lg font-semibold text-pink-600">
                Total a Pagar: R$ {totalAmount.toFixed(2)}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between p-4 md:p-6 bg-pink-50 space-y-4 sm:space-y-0">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 hover:bg-pink-100 py-2 px-4"
            >
              <ArrowLeft size={16} />
              <span>Voltar</span>
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-2 px-4"
            >
              Pagar Agora
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
