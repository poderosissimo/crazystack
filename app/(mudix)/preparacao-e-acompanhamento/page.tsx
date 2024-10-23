"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Circle, Loader2 } from "lucide-react";

export default function PreparationAndTracking() {
  const [inventoryComplete, setInventoryComplete] = useState(false);
  const [packingProgress, setPackingProgress] = useState(0);

  const steps = [
    { title: "Inventário Digital", complete: inventoryComplete },
    { title: "Embalagem", progress: packingProgress },
    { title: "Agendamento da Equipe", complete: false },
    { title: "Verificação Final", complete: false },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Preparação e Acompanhamento</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center space-x-2">
              {step.complete ? (
                <CheckCircle className="text-green-500" />
              ) : step.progress !== undefined ? (
                <Circle className="text-blue-500" />
              ) : (
                <Circle className="text-gray-300" />
              )}
              <span className="font-semibold">{step.title}</span>
            </div>
            {step.progress !== undefined && (
              <Progress value={step.progress} className="mt-2" />
            )}
            {index < steps.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <Button
          className="w-full"
          onClick={() => setInventoryComplete(true)}
          disabled={inventoryComplete}
        >
          {inventoryComplete
            ? "Inventário Concluído"
            : "Iniciar Inventário Digital"}
        </Button>
        <Button
          className="w-full"
          onClick={() =>
            setPackingProgress(Math.min(packingProgress + 20, 100))
          }
          disabled={packingProgress === 100}
        >
          {packingProgress === 100 ? (
            "Embalagem Concluída"
          ) : (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Atualizar Progresso da Embalagem
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
