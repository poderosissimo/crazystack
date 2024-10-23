import Image from "next/image";
import { Bell, ChevronDown, Menu } from "lucide-react";

export default function Component() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-b from-purple-600 to-purple-700 text-white p-4 rounded-b-3xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">belezix</h1>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6" />
            <Menu className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
          <div>
            <p className="font-semibold text-lg">Olá, Ana 👋</p>
            <p className="text-sm flex items-center">
              Rua das Palmeiras, 478 <ChevronDown className="w-4 h-4 ml-1" />
            </p>
          </div>
        </div>
      </header>
      <main className="p-4">
        <section>
          <h2 className="text-lg font-semibold mb-3">
            Onde deseja navegar hoje?
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Salões de beleza", icon: "salon" },
              { name: "Barbearias", icon: "barbershop" },
              { name: "Clínicas de estética", icon: "clinic" },
              { name: "Salões infantis", icon: "kids-salon" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-white p-2 rounded-lg shadow-md transition-transform group-hover:scale-105">
                  <Image
                    src={`/placeholder.svg?text=${item.icon}&height=60&width=60`}
                    alt={`Ícone de ${item.name}`}
                    width={60}
                    height={60}
                    className="rounded-lg mb-2"
                  />
                </div>
                <p className="text-xs text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Meus favoritos</h2>
          <div className="flex space-x-4">
            {["Salão Sempre Bela", "Clínica Embelezar"].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
                aria-label={`Favorito: ${item}`}
              >
                <div className="bg-white p-2 rounded-lg shadow-md transition-transform group-hover:scale-105">
                  <Image
                    src={`/placeholder.svg?text=${item}&height=80&width=80`}
                    alt={item}
                    width={80}
                    height={80}
                    className="rounded-lg mb-2"
                  />
                </div>
                <p className="text-xs text-center mt-2">{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Espaços perto de você</h2>
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
                className="flex items-center bg-white rounded-lg p-3 shadow transition-all hover:shadow-md"
              >
                <Image
                  src={`/placeholder.svg?text=${item.name}&height=60&width=60`}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-lg mr-3"
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
                        className={`w-4 h-4 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
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
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-purple-600 transition-colors cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            ))}
          </div>
        </section>
        <div className="fixed bottom-6 right-6">
          <button className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
