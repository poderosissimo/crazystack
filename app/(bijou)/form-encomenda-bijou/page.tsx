"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function BijouxOrderForm() {
  const [bijouxType, setBijouxType] = useState("");
  const [bijouxMaterial, setBijouxMaterial] = useState("");
  const [designDetails, setDesignDetails] = useState("");

  // Estados para opcionais e preço base
  const [hasCravacao, setHasCravacao] = useState(false);
  const [hasUrgencia, setHasUrgencia] = useState(false);
  const [hasEmbalagem, setHasEmbalagem] = useState(false);
  const basePrice = 150;

  // Preços dos opcionais
  const cravacaoPrice = 50;
  const urgenciaPrice = 30;
  const embalagemPrice = 20;

  // Cálculo do preço final
  const calculateTotalPrice = () => {
    let totalPrice = basePrice;
    if (hasCravacao) totalPrice += cravacaoPrice;
    if (hasUrgencia) totalPrice += urgenciaPrice;
    if (hasEmbalagem) totalPrice += embalagemPrice;
    return totalPrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const totalPrice = calculateTotalPrice();
    alert(`Pedido enviado! O preço final é R$${totalPrice}`);
  };

  return (
    <div className="min-h-screen bg-purple-50 bg-opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZjFmMiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZjMGNiIiBzdHJva2Utd2lkdGg9IjIiPjwvY2lyY2xlPgo8cGF0aCBkPSJNMzAgMTBjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTAtMTAtNC41LTEwLTEwIDQuNS0xMCAxMC0xMHoiIGZpbGw9IiNmZmMwY2IiIG9wYWNpdHk9IjAuMyI+PC9wYXRoPgo8L3N2Zz4=')]">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-400 to-purple-300 text-white p-4 md:p-8 animate-fade-in-down">
        <div className="max-w-4xl mx-auto">
          <img
            src="/biju2.png"
            alt="Ana Miranda Bijoux"
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Bijuteria Personalizada - Ana Miranda Bijoux
          </h1>
          <div className="bg-purple-600 text-white inline-block px-6 py-3 rounded-full font-bold text-2xl shadow-lg transform -rotate-2">
            A partir de R$150
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg mt-[-2rem] relative z-10">
        {/* Order Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bijouxType">
                Tipo de Bijuteria <span className="text-red-500">*</span>
              </Label>
              <Input
                id="bijouxType"
                value={bijouxType}
                onChange={(e) => setBijouxType(e.target.value)}
                placeholder="Ex: Colar, Brinco, Pulseira"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bijouxMaterial">
                Material <span className="text-red-500">*</span>
              </Label>
              <Input
                id="bijouxMaterial"
                value={bijouxMaterial}
                onChange={(e) => setBijouxMaterial(e.target.value)}
                placeholder="Ex: Prata, Ouro, Couro"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="designDetails">
              Detalhes do Design <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="designDetails"
              value={designDetails}
              onChange={(e) => setDesignDetails(e.target.value)}
              placeholder="Descreva como gostaria que sua peça fosse"
            />
          </div>

          {/* Opcionais */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-600">
              Opções Extras
            </h3>

            <div className="flex items-center">
              <Checkbox
                id="cravacao"
                checked={hasCravacao}
                onCheckedChange={(checked) => setHasCravacao(!!checked)}
              />
              <Label htmlFor="cravacao" className="ml-2">
                Cravação de pedras (+R$50)
              </Label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="urgencia"
                checked={hasUrgencia}
                onCheckedChange={(checked) => setHasUrgencia(!!checked)}
              />
              <Label htmlFor="urgencia" className="ml-2">
                Urgência no pedido (+R$30)
              </Label>
            </div>

            <div className="flex items-center">
              <Checkbox
                id="embalagem"
                checked={hasEmbalagem}
                onCheckedChange={(checked) => setHasEmbalagem(!!checked)}
              />
              <Label htmlFor="embalagem" className="ml-2">
                Embalagem especial (+R$20)
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-purple-500 text-white text-lg py-6 rounded-full"
          >
            Enviar Pedido (Total: R${calculateTotalPrice()})
          </Button>
        </form>
      </main>
    </div>
  );
}
