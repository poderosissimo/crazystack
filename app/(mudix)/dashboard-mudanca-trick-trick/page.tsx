"use client";
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  MessageSquare,
  Send,
  Bell,
  Video,
  Phone,
  Star,
  FileText,
  Camera,
  Share2,
  DollarSign,
  Globe,
  Calendar,
  AlertTriangle,
  Gift,
  ChevronRight,
  HelpCircle,
  Bot,
  X,
  Clock,
  BarChart,
} from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import EmojiPicker from "emoji-picker-react";

// Importação dinâmica do mapa para evitar problemas de SSR
const Map = dynamic(() => import("react-map-gl"), { ssr: false });

interface Message {
  id: number;
  text: string;
  sender: "user" | "professional";
  timestamp: Date;
}

export default function AcompanhamentoServico() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Estou a caminho para realizar a mudança.",
      sender: "professional",
      timestamp: new Date(2024, 5, 1, 9, 0),
    },
    {
      id: 2,
      text: "Ótimo! Tem previsão de chegada?",
      sender: "user",
      timestamp: new Date(2024, 5, 1, 9, 5),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [rating, setRating] = useState(0);
  const [serviceProgress, setServiceProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showEmergencyButton, setShowEmergencyButton] = useState(false);
  const [language, setLanguage] = useState("pt-BR");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
      setServiceProgress((prev) => Math.min(prev + 0.1, 100));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsTyping(true);

      setTimeout(() => {
        const professionalMessage: Message = {
          id: messages.length + 2,
          text: "Entendi. Estou fazendo o possível para chegar o mais rápido. Obrigado pela paciência!",
          sender: "professional",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, professionalMessage]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleEmojiClick = (emojiObject: any) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">
            Acompanhamento do Serviço
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt-BR">Português</SelectItem>
                <SelectItem value="en-US">English</SelectItem>
                <SelectItem value="es-ES">Español</SelectItem>
              </SelectContent>
            </Select>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Detalhes</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="map">Mapa</TabsTrigger>
            <TabsTrigger value="gallery">Galeria</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Serviço:</p>
                <p>Mudança Residencial</p>
              </div>
              <div>
                <p className="font-semibold">Profissional:</p>
                <p>João Silva</p>
              </div>
              <div>
                <p className="font-semibold">Status:</p>
                <p className="text-green-600">Em andamento</p>
              </div>
              <div>
                <p className="font-semibold">Data:</p>
                <p>01/06/2024</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Progresso do Serviço:</p>
              <Progress value={serviceProgress} className="mt-2" />
            </div>
            <div className="mt-4">
              <p className="font-semibold">Tempo Decorrido:</p>
              <p className="text-2xl font-mono">{formatTime(elapsedTime)}</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Avaliação:</p>
              <div className="flex items-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <Button
              className="mt-4"
              onClick={() => setShowEmergencyButton(!showEmergencyButton)}
            >
              {showEmergencyButton ? "Ocultar" : "Mostrar"} Botão de Emergência
            </Button>
            {showEmergencyButton && (
              <Button variant="destructive" className="mt-2 w-full">
                <AlertTriangle className="mr-2" />
                Emergência
              </Button>
            )}
          </TabsContent>
          <TabsContent value="chat">
            <ScrollArea className="h-[400px] w-full pr-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-2 ${
                    message.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <div className="inline-block p-2 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white">
                    Digitando...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </ScrollArea>
            <div className="flex space-x-2 mt-2">
              <Button
                variant="outline"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                😊
              </Button>
              <Input
                placeholder="Digite sua mensagem..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>
                <Send size={18} />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
            {showEmojiPicker && (
              <div className="mt-2">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </TabsContent>
          <TabsContent value="map">
            <div className="h-[400px] w-full">
              <Map
                initialViewState={{
                  longitude: -46.6333,
                  latitude: -23.5505,
                  zoom: 11,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
              >
                {/* Adicione marcadores ou outras camadas conforme necessário */}
              </Map>
            </div>
          </TabsContent>
          <TabsContent value="gallery">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  <Camera size={32} className="text-gray-400" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex space-x-2 mt-4">
          <Button variant="outline">
            <Phone size={18} className="mr-2" />
            Ligar
          </Button>
          <Button variant="outline">
            <Video size={18} className="mr-2" />
            Vídeo
          </Button>
          <Button variant="outline">
            <Share2 size={18} className="mr-2" />
            Compartilhar
          </Button>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <Bell className="mr-2" size={18} />
            Notificações
          </p>
          <ul className="list-disc list-inside">
            <li>Profissional a caminho</li>
            <li>Serviço iniciado</li>
            <li>50% do serviço concluído</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <DollarSign className="mr-2" size={18} />
            Pagamento
          </p>
          <p>Total: R$ 500,00</p>
          <Button className="mt-2">Pagar agora</Button>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <Calendar className="mr-2" size={18} />
            Próximos Serviços
          </p>
          <ul className="list-disc list-inside">
            <li>Limpeza - 15/06/2024</li>
            <li>Pintura - 22/06/2024</li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <Gift className="mr-2" size={18} />
            Programa de Recompensas
          </p>
          <p>Pontos acumulados: 150</p>
          <Button variant="outline" className="mt-2">
            Ver recompensas
          </Button>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <HelpCircle className="mr-2" size={18} />
            FAQ
          </p>
          <ul className="space-y-2">
            <li className="flex items-center justify-between cursor-pointer">
              <span>Como cancelar um serviço?</span>
              <ChevronRight size={18} />
            </li>
            <li className="flex items-center justify-between cursor-pointer">
              <span>Política de reembolso</span>
              <ChevronRight size={18} />
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <Bot className="mr-2" size={18} />
            Suporte
          </p>
          <Button variant="outline" className="w-full">
            Iniciar chat com assistente virtual
          </Button>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <X className="mr-2" size={18} />
            Cancelar Serviço
          </p>
          <Button variant="destructive" className="w-full">
            Solicitar cancelamento
          </Button>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <Clock className="mr-2" size={18} />
            Previsão de Conclusão
          </p>
          <p>Tempo estimado restante: 2h 30min</p>
        </div>

        <div className="border rounded-lg p-4 mt-4">
          <p className="font-semibold mb-2 flex items-center">
            <BarChart className="mr-2" size={18} />
            Relatórios
          </p>
          <Button variant="outline" className="w-full">
            Gerar relatório do serviço
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
