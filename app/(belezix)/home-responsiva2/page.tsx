import Image from "next/image";
import { Bell, ChevronDown, Menu, Heart } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gradient-to-b from-purple-600 to-purple-700 text-white p-4 rounded-b-[2rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">belezix</h1>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6" />
              <Menu className="w-6 h-6" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full border-2 border-white"
            />
            <div>
              <p className="font-semibold text-xl flex items-center">
                Olá, Ana <span className="ml-2">👋</span>
              </p>
              <p className="text-sm flex items-center">
                Rua das Palmeiras, 478 <ChevronDown className="w-4 h-4 ml-1" />
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Onde deseja navegar hoje?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: "Salões de beleza",
                image: "/placeholder.svg",
              },
              {
                name: "Barbearias",
                image: "/placeholder.svg",
              },
              {
                name: "Clínicas de estética",
                image: "/placeholder.svg",
              },
              {
                name: "Salões infantis",
                image: "/placeholder.svg",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={item.image}
                    alt={`Ícone de ${item.name}`}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Meus favoritos</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {["Salão Sempre Bela", "Clínica Embelezar"].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                aria-label={`Favorito: ${item}`}
              >
                <div className="bg-gray-200 rounded-lg overflow-hidden mb-2">
                  <Image
                    src="/placeholder.svg"
                    alt={item}
                    width={120}
                    height={120}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-sm text-center">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Espaços perto de você</h2>
          <div className="space-y-4">
            {[
              {
                name: "Espaço Bem Me Quero",
                type: "Salão de beleza",
                distance: "0.5km",
                rating: 4,
              },
              {
                name: "Barbearia do João",
                type: "Barbearia",
                distance: "1.5km",
                rating: 4,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg p-3 shadow-md"
              >
                <Image
                  src="/placeholder.svg"
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg mr-3 object-cover"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.type} • {item.distance}
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <Heart className="w-6 h-6 text-gray-400 hover:text-purple-600 transition-colors cursor-pointer" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
