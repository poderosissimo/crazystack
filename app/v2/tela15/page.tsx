"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarIcon,
  ClockIcon,
  DollarSignIcon,
  MapPinIcon,
  SearchIcon,
  TruckIcon,
  UserIcon,
} from "lucide-react";

// Enums and types
enum EnumMoveStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}

type Customer = {
  name: string;
};

type Driver = {
  name: string;
};

type Move = {
  id: string;
  createdAt: string;
  customer: Customer;
  status: EnumMoveStatus;
  price: number;
  scheduledAt: string;
  pickupLocation: string;
  deliveryLocation: string;
  driver?: Driver;
};

// Mock data
const mockMoves: Move[] = [
  {
    id: "1",
    createdAt: "2023-05-01T10:00:00Z",
    customer: { name: "John Doe" },
    status: EnumMoveStatus.IN_PROGRESS,
    price: 100,
    scheduledAt: "2023-05-02T14:00:00Z",
    pickupLocation: "123 Main St",
    deliveryLocation: "456 Elm St",
    driver: { name: "Alice Smith" },
  },
  {
    id: "2",
    createdAt: "2023-05-01T11:00:00Z",
    customer: { name: "Jane Smith" },
    status: EnumMoveStatus.PENDING,
    price: 150,
    scheduledAt: "2023-05-03T09:00:00Z",
    pickupLocation: "789 Oak St",
    deliveryLocation: "101 Pine St",
  },
  // Add more mock data as needed
];

export default function OrderSummary() {
  const [moves, setMoves] = useState<Move[]>(mockMoves);
  const [filteredMoves, setFilteredMoves] = useState<Move[]>(mockMoves);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<EnumMoveStatus | "ALL">(
    "ALL",
  );

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMoves((prevMoves) =>
        prevMoves.map((move) => ({
          ...move,
          status:
            Math.random() > 0.8 ? getNextStatus(move.status) : move.status,
        })),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let result = moves;

    if (statusFilter !== "ALL") {
      result = result.filter((move) => move.status === statusFilter);
    }

    if (searchTerm) {
      result = result.filter(
        (move) =>
          move.id.includes(searchTerm) ||
          move.customer.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredMoves(result);
  }, [moves, statusFilter, searchTerm]);

  const getNextStatus = (currentStatus: EnumMoveStatus): EnumMoveStatus => {
    switch (currentStatus) {
      case EnumMoveStatus.PENDING:
        return EnumMoveStatus.IN_PROGRESS;
      case EnumMoveStatus.IN_PROGRESS:
        return EnumMoveStatus.COMPLETED;
      default:
        return currentStatus;
    }
  };

  const getStatusBadge = (status: EnumMoveStatus) => {
    switch (status) {
      case EnumMoveStatus.PENDING:
        return <Badge variant="secondary">Pendente</Badge>;
      case EnumMoveStatus.IN_PROGRESS:
        return <Badge variant="default">Em Progresso</Badge>;
      case EnumMoveStatus.COMPLETED:
        return <Badge variant="success">Concluído</Badge>;
      case EnumMoveStatus.CANCELED:
        return <Badge variant="destructive">Cancelado</Badge>;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Resumo de Pedidos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <Input
              type="search"
              placeholder="Pesquisar por ID ou nome do cliente"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select
            value={statusFilter}
            onValueChange={(value) =>
              setStatusFilter(value as EnumMoveStatus | "ALL")
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todos</SelectItem>
              <SelectItem value={EnumMoveStatus.PENDING}>Pendente</SelectItem>
              <SelectItem value={EnumMoveStatus.IN_PROGRESS}>
                Em Progresso
              </SelectItem>
              <SelectItem value={EnumMoveStatus.COMPLETED}>
                Concluído
              </SelectItem>
              <SelectItem value={EnumMoveStatus.CANCELED}>Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Data Agendada</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMoves
              .sort((a, b) => {
                const order = [
                  EnumMoveStatus.IN_PROGRESS,
                  EnumMoveStatus.PENDING,
                  EnumMoveStatus.COMPLETED,
                  EnumMoveStatus.CANCELED,
                ];
                return order.indexOf(a.status) - order.indexOf(b.status);
              })
              .map((move) => (
                <TableRow key={move.id}>
                  <TableCell>{move.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <UserIcon className="mr-2 h-4 w-4" />
                      {move.customer.name}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(move.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <DollarSignIcon className="mr-2 h-4 w-4" />
                      {move.price.toFixed(2)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {new Date(move.scheduledAt).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
