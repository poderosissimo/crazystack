"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Search,
  Clock,
  Users,
  Tag,
  Info,
  DollarSign,
  Ticket,
  Star,
  Music,
  Film,
  Book,
  Briefcase,
  Coffee,
  Utensils,
  Mic,
  Camera,
  Palette,
  Feather,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Tipo expandido para representar um evento
type Event = {
  id: string;
  title: string;
  date: string;
  endDate: string;
  location: string;
  venue: string;
  imageUrl: string;
  description: string;
  organizer: string;
  category: string;
  subcategory: string;
  ageRestriction: string;
  ticketTypes: TicketType[];
  totalCapacity: number;
  availableTickets: number;
  isFeatured: boolean;
  tags: string[];
  rating: number;
  reviews: number;
  faq: FAQ[];
  socialMediaLinks: SocialMediaLinks;
  accessibility: string[];
  parking: string;
  publicTransport: string;
  dressCode: string;
  foodOptions: string[];
  duration: string;
  language: string;
  cancellationPolicy: string;
  covidPrecautions: string[];
  sponsors: string[];
  performers: string[];
  schedule: ScheduleItem[];
};

type TicketType = {
  name: string;
  price: number;
  available: number;
};

type FAQ = {
  question: string;
  answer: string;
};

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
};

type ScheduleItem = {
  time: string;
  activity: string;
};

// Componente principal
export default function EventList() {
  // Lista de eventos (normalmente viria de uma API)
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Festival de Música Verão",
      date: "2024-07-15T10:00:00",
      endDate: "2024-07-17T23:00:00",
      location: "Rio de Janeiro, RJ",
      venue: "Praia de Copacabana",
      imageUrl: "/placeholder.svg?height=200&width=300",
      description:
        "O maior festival de música do verão carioca, com artistas nacionais e internacionais.",
      organizer: "Eventos RJ Ltda.",
      category: "Música",
      subcategory: "Festival",
      ageRestriction: "18+",
      ticketTypes: [
        { name: "Passe 3 dias", price: 450, available: 5000 },
        { name: "Ingresso Diário", price: 180, available: 10000 },
      ],
      totalCapacity: 50000,
      availableTickets: 15000,
      isFeatured: true,
      tags: ["música", "praia", "verão"],
      rating: 4.7,
      reviews: 1250,
      faq: [
        {
          question: "Posso levar comida?",
          answer: "Não é permitido entrada com alimentos externos.",
        },
      ],
      socialMediaLinks: {
        facebook: "https://facebook.com/festivaldeverao",
        instagram: "https://instagram.com/festivaldeverao",
      },
      accessibility: ["Rampas de acesso", "Banheiros adaptados"],
      parking: "Estacionamento pago no local",
      publicTransport: "Ônibus e metrô próximos",
      dressCode: "Casual",
      foodOptions: ["Food trucks variados", "Áreas de alimentação"],
      duration: "3 dias",
      language: "Português",
      cancellationPolicy: "Reembolso total até 30 dias antes do evento",
      covidPrecautions: [
        "Uso de máscara recomendado",
        "Álcool em gel disponível",
      ],
      sponsors: ["Marca de Bebidas X", "Banco Y"],
      performers: ["Artista A", "Banda B", "DJ C"],
      schedule: [
        { time: "10:00", activity: "Abertura dos portões" },
        { time: "12:00", activity: "Primeiro show" },
      ],
    },
    {
      id: "2",
      title: "Conferência Tech Inovação",
      date: "2024-09-22T09:00:00",
      endDate: "2024-09-23T18:00:00",
      location: "São Paulo, SP",
      venue: "Centro de Convenções XYZ",
      imageUrl: "/placeholder.svg?height=200&width=300",
      description:
        "Conferência anual sobre as últimas tendências em tecnologia e inovação.",
      organizer: "TechConf Brasil",
      category: "Tecnologia",
      subcategory: "Conferência",
      ageRestriction: "Livre",
      ticketTypes: [
        { name: "Passe Completo", price: 800, available: 1000 },
        { name: "Passe de 1 Dia", price: 500, available: 500 },
      ],
      totalCapacity: 2000,
      availableTickets: 1500,
      isFeatured: true,
      tags: ["tecnologia", "inovação", "networking"],
      rating: 4.9,
      reviews: 750,
      faq: [
        {
          question: "Haverá tradução simultânea?",
          answer: "Sim, para palestras internacionais.",
        },
      ],
      socialMediaLinks: {
        twitter: "https://twitter.com/techinnovationconf",
        linkedin: "https://linkedin.com/company/techinnovationconf",
      },
      accessibility: ["Elevadores", "Intérpretes de Libras"],
      parking: "Estacionamento gratuito",
      publicTransport: "Estação de metrô a 500m",
      dressCode: "Business casual",
      foodOptions: ["Coffee breaks inclusos", "Restaurantes no local"],
      duration: "2 dias",
      language: "Português e Inglês",
      cancellationPolicy: "Reembolso de 50% até 15 dias antes do evento",
      covidPrecautions: [
        "Comprovante de vacinação obrigatório",
        "Distanciamento social",
      ],
      sponsors: ["Empresa de Software X", "Startup Y"],
      performers: ["Palestrante Internacional A", "CEO da Empresa B"],
      schedule: [
        { time: "09:00", activity: "Credenciamento" },
        { time: "10:00", activity: "Palestra de abertura" },
      ],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Filtra os eventos com base no termo de pesquisa
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Eventos Disponíveis</h1>

      {/* Barra de pesquisa */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Pesquisar eventos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de eventos */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{event.title}</span>
                {event.isFeatured && (
                  <Badge variant="secondary">Destaque</Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {event.description}
              </p>
              <div className="space-y-2">
                <p className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  {new Date(event.date).toLocaleDateString("pt-BR")} -{" "}
                  {new Date(event.endDate).toLocaleDateString("pt-BR")}
                </p>
                <p className="flex items-center text-sm">
                  <Clock className="mr-2 h-4 w-4" />
                  {event.duration}
                </p>
                <p className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.venue}, {event.location}
                </p>
                <p className="flex items-center text-sm">
                  <Users className="mr-2 h-4 w-4" />
                  Capacidade: {event.totalCapacity}
                </p>
                <p className="flex items-center text-sm">
                  <Tag className="mr-2 h-4 w-4" />
                  {event.category} - {event.subcategory}
                </p>
                <p className="flex items-center text-sm">
                  <Info className="mr-2 h-4 w-4" />
                  {event.ageRestriction}
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Ingressos:</h4>
                {event.ticketTypes.map((ticket, index) => (
                  <p key={index} className="text-sm flex justify-between">
                    <span>{ticket.name}</span>
                    <span>R$ {ticket.price.toFixed(2)}</span>
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm">
                  {event.rating.toFixed(1)} ({event.reviews} avaliações)
                </span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Comprar Ingressos</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Disponíveis: {event.availableTickets}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <p className="text-center text-muted-foreground mt-6">
          Nenhum evento encontrado.
        </p>
      )}
    </div>
  );
}
