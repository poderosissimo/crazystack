"use client";
import { useState } from "react";
import { Star, MessageCircle, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Component() {
  const [activeTab, setActiveTab] = useState("SOBRE");
  const tabs = ["SOBRE", "SERVIÇOS", "AVALIAÇÕES", "PUBLICAÇÕES"];

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Salão de beleza"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h1 className="text-white text-2xl font-bold">Salão Sempre Bela</h1>
          <p className="text-white text-sm">Salão de Beleza - 4.2km</p>
        </div>
        <button className="absolute top-4 right-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-sm font-semibold">ABERTO</span>
            <span className="text-gray-500 text-sm">• FECHA ÀS 18H</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-lg font-bold mr-1">4,0</span>
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
              <Star className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            Chat
          </button>
          <button className="bg-green-100 text-green-600 px-3 py-1 rounded-full flex items-center">
            <Phone className="w-4 h-4 mr-1" />
            WhatsApp
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Profissionais</h2>
          <div className="flex space-x-4 overflow-x-auto">
            {["Maria", "João", "Carla", "Carol", "Paula"].map((name, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`/placeholder.svg?height=50&width=50&text=${name}`}
                  alt={name}
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-xs mt-1">{name}</span>
                <span className="text-xs text-gray-500">
                  {
                    [
                      "Manicure",
                      "Cabeleireiro",
                      "Manicure",
                      "Maquiadora",
                      "Esteticista",
                    ][index]
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4">
            {activeTab === "SOBRE" && (
              <div>
                <h3 className="font-semibold mb-2">Sobre</h3>
                <p className="text-sm text-gray-600 mb-4">
                  O Salão Sempre Bela está no mercado há mais de 10 anos
                  buscando sempre trazer o melhor em tendências para sua beleza!
                </p>
                <h3 className="font-semibold mb-2">Endereço</h3>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2 mt-1" />
                  <p className="text-sm text-gray-600">
                    Av. das Palmeiras, 478, Bairro Centro - Uberlândia/MG
                  </p>
                </div>
                <button className="text-purple-600 text-sm font-semibold mt-2 flex items-center">
                  VER LOCALIZAÇÃO
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
            {activeTab === "SERVIÇOS" && (
              <div>
                <h3 className="font-semibold mb-2">Promoções</h3>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold">Maquiagem</h4>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <span className="text-gray-500 line-through text-sm">
                        R$110,00
                      </span>
                      <span className="text-green-600 font-semibold ml-2">
                        R$95,00
                      </span>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                      AGENDAR
                    </button>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Cabelo</h4>
                {/* Add more services here */}
              </div>
            )}
            {activeTab === "AVALIAÇÕES" && (
              <div>
                <h3 className="font-semibold mb-2">3 avaliações</h3>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <img
                      src="/placeholder.svg?height=40&width=40&text=MD"
                      alt="Marcela Dias"
                      className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                      <h4 className="font-semibold">Marcela Dias</h4>
                      <div className="flex items-center">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                        <span className="text-gray-500 text-sm ml-2">
                          17/11/2021
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Houve um atraso no atendimento mas gostei muito da
                    maquiagem.
                  </p>
                </div>
                {/* Add more reviews here */}
              </div>
            )}
            {activeTab === "PUBLICAÇÕES" && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <img
                    src="/placeholder.svg?height=150&width=150&text=Makeup"
                    alt="Produção completa para noiva"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Produção completa para noiva
                  </p>
                </div>
                <div>
                  <img
                    src="/placeholder.svg?height=150&width=150&text=Nails"
                    alt="Unhas de hoje"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Unhas de hoje 💅</p>
                </div>
                {/* Add more posts here */}
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="w-full bg-purple-600 text-white py-3 font-semibold">
        AGENDAR
      </button>
    </div>
  );
}
