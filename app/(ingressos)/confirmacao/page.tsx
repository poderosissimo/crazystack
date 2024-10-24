"use client";

import { useState } from "react";
import { Check, Download, Eye, ArrowLeft, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import QRCode from "qrcode.react";

// Tipos
type Ingresso = {
  id: string;
  eventoNome: string;
  sessao: string;
  tipo: string;
  quantidade: number;
  preco: number;
};

// Dados mockados do pedido
const pedido = {
  numeroPedido: "123456",
  data: new Date().toLocaleDateString("pt-BR"),
  ingressos: [
    {
      id: "1",
      eventoNome: "Show do Metallica",
      sessao: "15/10/2023 20:00",
      tipo: "Inteira",
      quantidade: 2,
      preco: 100,
    },
    {
      id: "2",
      eventoNome: "Show do Metallica",
      sessao: "15/10/2023 20:00",
      tipo: "Meia",
      quantidade: 1,
      preco: 50,
    },
    {
      id: "3",
      eventoNome: "Festival de Jazz",
      sessao: "20/11/2023 19:00",
      tipo: "VIP",
      quantidade: 2,
      preco: 200,
    },
  ] as Ingresso[],
};

export default function TelaConfirmacao() {
  const [downloadStatus, setDownloadStatus] = useState<Record<string, boolean>>(
    {},
  );
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [isRefundRequested, setIsRefundRequested] = useState<
    Record<string, boolean>
  >({});
  const [isTransferEnabled, setIsTransferEnabled] = useState<
    Record<string, boolean>
  >({});

  const handleDownload = (ingressoId: string) => {
    // Simula o download do ingresso
    setTimeout(() => {
      setDownloadStatus((prev) => ({ ...prev, [ingressoId]: true }));
      // Aqui você implementaria a lógica real de download, por exemplo:
      // window.open(`/api/tickets/download/${ingressoId}`, '_blank')
    }, 1500);
  };

  const handleRefundRequest = (ingressoId: string) => {
    setIsRefundRequested((prev) => ({ ...prev, [ingressoId]: true }));
    // Aqui você implementaria a lógica real de solicitação de estorno
    alert("Solicitação de estorno enviada. Nossa equipe entrará em contato.");
  };

  const handleTransferToggle = (ingressoId: string) => {
    setIsTransferEnabled((prev) => ({
      ...prev,
      [ingressoId]: !prev[ingressoId],
    }));
  };

  const totalValor = pedido.ingressos.reduce(
    (total, ingresso) => total + ingresso.quantidade * ingresso.preco,
    0,
  );

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-center">
            Compra Confirmada!
          </CardTitle>
          <CardDescription className="text-center">
            Obrigado por sua compra. Seu pedido foi processado com sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Número do Pedido: {pedido.numeroPedido}
              </p>
              <p className="text-sm text-muted-foreground">
                Data da Compra: {pedido.data}
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-semibold mb-2">Detalhes do Pedido</h3>
              {pedido.ingressos.map((ingresso) => (
                <Card key={ingresso.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{ingresso.eventoNome}</h4>
                        <p className="text-sm text-muted-foreground">
                          {ingresso.sessao}
                        </p>
                      </div>
                      <p className="font-semibold">
                        R$ {(ingresso.preco * ingresso.quantidade).toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm">
                      {ingresso.tipo} - Quantidade: {ingresso.quantidade}
                    </p>
                    <div className="mt-4 flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                            onClick={() => setSelectedTicketId(ingresso.id)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Ver Ingresso
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Detalhes do Ingresso</DialogTitle>
                            <DialogDescription>
                              Informações e QR Code do seu ingresso
                            </DialogDescription>
                          </DialogHeader>
                          {selectedTicketId && (
                            <div className="grid gap-4 py-4">
                              <div className="flex justify-center">
                                <QRCode
                                  value={`ticket-${selectedTicketId}`}
                                  size={200}
                                />
                              </div>
                              <div>
                                <Label className="font-bold">Evento</Label>
                                <p>{ingresso.eventoNome}</p>
                              </div>
                              <div>
                                <Label className="font-bold">Sessão</Label>
                                <p>{ingresso.sessao}</p>
                              </div>
                              <div>
                                <Label className="font-bold">Tipo</Label>
                                <p>{ingresso.tipo}</p>
                              </div>
                              <div>
                                <Label className="font-bold">Quantidade</Label>
                                <p>{ingresso.quantidade}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Switch
                                  id={`ticket-transfer-${ingresso.id}`}
                                  checked={
                                    isTransferEnabled[ingresso.id] || false
                                  }
                                  onCheckedChange={() =>
                                    handleTransferToggle(ingresso.id)
                                  }
                                />
                                <Label
                                  htmlFor={`ticket-transfer-${ingresso.id}`}
                                >
                                  Permitir transferência
                                </Label>
                              </div>
                              <Button
                                variant="destructive"
                                onClick={() => handleRefundRequest(ingresso.id)}
                                disabled={isRefundRequested[ingresso.id]}
                              >
                                {isRefundRequested[ingresso.id]
                                  ? "Estorno Solicitado"
                                  : "Solicitar Estorno"}
                              </Button>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        onClick={() => handleDownload(ingresso.id)}
                        disabled={downloadStatus[ingresso.id]}
                      >
                        {downloadStatus[ingresso.id] ? (
                          <RefreshCcw className="mr-2 h-4 w-4" />
                        ) : (
                          <Download className="mr-2 h-4 w-4" />
                        )}
                        {downloadStatus[ingresso.id]
                          ? "Baixar Novamente"
                          : "Baixar"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Separator />
            <div className="flex justify-between items-center font-semibold">
              <span>Total</span>
              <span>R$ {totalValor.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/eventos" passHref>
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Eventos
            </Button>
          </Link>
          <Button>Minha Conta</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
