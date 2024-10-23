"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  X,
  ShoppingCart,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast, Toaster } from "react-hot-toast";

// Simulated product data with additional fields
const products = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Bijuteria ${i + 1}`,
  type: [
    "Colar",
    "Brinco",
    "Anel",
    "Pulseira",
    "Tornozeleira",
    "Tiara",
    "Broche",
  ][Math.floor(Math.random() * 7)],
  price: Math.floor(Math.random() * 200) + 10,
  material: [
    "Ouro",
    "Prata",
    "Bronze",
    "Aço Inoxidável",
    "Ródio",
    "Cobre",
    "Latão",
  ][Math.floor(Math.random() * 7)],
  color: [
    "Dourado",
    "Prateado",
    "Rosa",
    "Azul",
    "Verde",
    "Roxo",
    "Multicolorido",
  ][Math.floor(Math.random() * 7)],
  image: `/placeholder.svg?height=300&width=300&text=Bijuteria+${i + 1}`,
  rating: (Math.random() * 5).toFixed(1),
  stock: Math.floor(Math.random() * 50),
  discount: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : 0,
}));

export default function Component() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("relevance");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
    toast.success(
      favorites.includes(id)
        ? "Removido dos favoritos"
        : "Adicionado aos favoritos",
    );
  };

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { id: product.id, quantity: 1 }];
    });
    toast.success("Produto adicionado ao carrinho");
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedType || product.type === selectedType) &&
      (!selectedMaterial || product.material === selectedMaterial) &&
      (!selectedColor || product.color === selectedColor) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.color.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price_asc") return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    if (sortBy === "rating") return parseFloat(b.rating) - parseFloat(a.rating);
    if (sortBy === "discount") return b.discount - a.discount;
    return 0; // relevance (no sorting)
  });

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const resetFilters = () => {
    setSelectedType(null);
    setSelectedMaterial(null);
    setSelectedColor(null);
    setPriceRange([0, 200]);
    setSearchTerm("");
    setSortBy("relevance");
  };

  return (
    <div className="container mx-auto p-4">
      <Toaster position="bottom-right" />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Catálogo de Bijuterias</h1>
        <div className="flex items-center space-x-2">
          <Button onClick={() => setShowFilters(!showFilters)}>
            <Filter className="mr-2 h-4 w-4" /> Filtros
          </Button>
          <Button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          >
            {viewMode === "grid" ? "Lista" : "Grade"}
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Pesquisar bijuterias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-100 rounded-lg">
          <Select onValueChange={(value) => setSelectedType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Bijuteria" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Colar",
                "Brinco",
                "Anel",
                "Pulseira",
                "Tornozeleira",
                "Tiara",
                "Broche",
              ].map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSelectedMaterial(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Material" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Ouro",
                "Prata",
                "Bronze",
                "Aço Inoxidável",
                "Ródio",
                "Cobre",
                "Latão",
              ].map((material) => (
                <SelectItem key={material} value={material}>
                  {material}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setSelectedColor(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Cor" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Dourado",
                "Prateado",
                "Rosa",
                "Azul",
                "Verde",
                "Roxo",
                "Multicolorido",
              ].map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div>
            <label className="text-sm font-medium">
              Faixa de Preço: R${priceRange[0]} - R${priceRange[1]}
            </label>
            <Slider
              min={0}
              max={200}
              step={1}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2"
            />
          </div>
          <Button
            onClick={resetFilters}
            variant="outline"
            className="col-span-full"
          >
            Limpar Filtros
          </Button>
        </div>
      )}

      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-600">
          {sortedProducts.length} produtos encontrados
        </p>
        <Select onValueChange={(value) => setSortBy(value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevance">Relevância</SelectItem>
            <SelectItem value="price_asc">Preço: Menor para Maior</SelectItem>
            <SelectItem value="price_desc">Preço: Maior para Menor</SelectItem>
            <SelectItem value="rating">Avaliações</SelectItem>
            <SelectItem value="discount">Maiores Descontos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            : "space-y-4"
        }
      >
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            className={viewMode === "grid" ? "flex flex-col" : "flex flex-row"}
          >
            <CardHeader className={viewMode === "grid" ? "" : "w-1/3"}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className={viewMode === "grid" ? "" : "w-2/3"}>
              <CardTitle>{product.name}</CardTitle>
              <p className="text-sm text-gray-600">{product.type}</p>
              <div className="flex items-center mt-2">
                <p className="font-bold text-lg">
                  {product.discount > 0 ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        R${product.price}
                      </span>
                      <span className="text-red-500">
                        R$
                        {(
                          (product.price * (100 - product.discount)) /
                          100
                        ).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    `R$${product.price}`
                  )}
                </p>
                {product.discount > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < Math.floor(parseFloat(product.rating))
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating}
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                <Badge>{product.material}</Badge>
                <Badge>{product.color}</Badge>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {product.stock > 0
                  ? `${product.stock} em estoque`
                  : "Fora de estoque"}
              </p>
            </CardContent>
            <CardFooter
              className={`flex justify-between ${viewMode === "grid" ? "mt-auto" : ""}`}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        className={`mr-2 h-4 w-4 ${favorites.includes(product.id) ? "fill-red-500" : ""}`}
                      />
                      {favorites.includes(product.id)
                        ? "Favoritado"
                        : "Favoritar"}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {favorites.includes(product.id)
                        ? "Remover dos favoritos"
                        : "Adicionar aos favoritos"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Dialog>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedProduct(product)}>
                    Ver Detalhes
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{selectedProduct?.name}</DialogTitle>
                    <DialogDescription>Detalhes do produto</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <img
                      src={selectedProduct?.image}
                      alt={selectedProduct?.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p>
                      <strong>Tipo:</strong> {selectedProduct?.type}
                    </p>
                    <p>
                      <strong>Material:</strong> {selectedProduct?.material}
                    </p>
                    <p>
                      <strong>Cor:</strong> {selectedProduct?.color}
                    </p>
                    <p>
                      <strong>Preço:</strong> R${selectedProduct?.price}
                    </p>
                    <p>
                      <strong>Avaliação:</strong>
                      {selectedProduct?.rating}
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`inline-block h-4 w-4 ml-1 ${
                            index <
                            Math.floor(
                              parseFloat(selectedProduct?.rating || "0"),
                            )
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </p>
                    <p>
                      <strong>Estoque:</strong> {selectedProduct?.stock}
                    </p>
                    {(selectedProduct?.discount ?? 0) > 0 && (
                      <p>
                        <strong>Desconto:</strong> {selectedProduct?.discount}%
                      </p>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <Button onClick={() => addToCart(selectedProduct!)}>
                      Adicionar ao Carrinho
                    </Button>
                    <Button>Encomendar via WhatsApp</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronUp className="h-4 w-4 mr-2" />
          Anterior
        </Button>
        <span className="py-2 px-4 rounded bg-gray-100">
          Página {currentPage} de{" "}
          {Math.ceil(sortedProducts.length / productsPerPage)}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(
                prev + 1,
                Math.ceil(sortedProducts.length / productsPerPage),
              ),
            )
          }
          disabled={
            currentPage === Math.ceil(sortedProducts.length / productsPerPage)
          }
        >
          Próxima
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600"
        >
          <img
            src="/whatsapp-icon.svg"
            alt="WhatsApp"
            className="w-6 h-6 mr-2"
          />
          Contato via WhatsApp
        </Button>
        <Button
          size="lg"
          className="rounded-full bg-blue-500 hover:bg-blue-600"
        >
          <ShoppingCart className="w-6 h-6 mr-2" />
          Carrinho ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </Button>
      </div>

      <footer className="mt-12 py-6 border-t">
        <div className="flex justify-between items-center">
          <p>
            &copy; 2024 Catálogo de Bijuterias. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
