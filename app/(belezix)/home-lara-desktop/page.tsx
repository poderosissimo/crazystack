import Image from "next/image";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold">belezix</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="hover:text-purple-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-200">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-200">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-200">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="pl-10 pr-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Bell className="w-6 h-6 cursor-pointer" />
            <Menu className="w-6 h-6 cursor-pointer" />
            <div className="flex items-center space-x-3">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">Ana</p>
                <p className="text-sm flex items-center">
                  Rua das Palmeiras, 478{" "}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Onde deseja navegar hoje?
          </h2>
          <div className="grid grid-cols-8 gap-8">
            {[
              { name: "Salões de beleza", icon: "salon" },
              { name: "Barbearias", icon: "barbershop" },
              { name: "Clínicas de estética", icon: "clinic" },
              { name: "Salões infantis", icon: "kids-salon" },
              { name: "Spa", icon: "spa" },
              { name: "Manicure", icon: "manicure" },
              { name: "Maquiagem", icon: "makeup" },
              { name: "Depilação", icon: "waxing" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-white p-4 rounded-lg shadow-md transition-transform group-hover:scale-105">
                  <Image
                    src={`/placeholder.svg?text=${item.icon}&height=80&width=80`}
                    alt={`Ícone de ${item.name}`}
                    width={80}
                    height={80}
                    className="rounded-lg mb-2"
                  />
                </div>
                <p className="text-sm text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-3 gap-8">
          <section className="col-span-2">
            <h2 className="text-2xl font-semibold mb-6">
              Espaços perto de você
            </h2>
            <div className="grid grid-cols-2 gap-6">
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
                {
                  name: "Clínica Beleza Pura",
                  type: "Clínica de estética",
                  distance: "2.0km",
                  rating: 5,
                },
                {
                  name: "Salão Encanto Kids",
                  type: "Salão infantil",
                  distance: "1.8km",
                  rating: 4,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-4 shadow transition-all hover:shadow-md"
                >
                  <Image
                    src={`/placeholder.svg?text=${item.name}&height=80&width=80`}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.type} • {item.distance}
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < item.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
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
          <section>
            <h2 className="text-2xl font-semibold mb-6">Meus favoritos</h2>
            <div className="space-y-4">
              {[
                "Salão Sempre Bela",
                "Clínica Embelezar",
                "Barbearia Estilo",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-lg p-4 shadow transition-all hover:shadow-md group"
                  aria-label={`Favorito: ${item}`}
                >
                  <Image
                    src={`/placeholder.svg?text=${item}&height=60&width=60`}
                    alt={item}
                    width={60}
                    height={60}
                    className="rounded-lg mr-4"
                  />
                  <p className="text-lg font-medium group-hover:text-purple-600 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="fixed bottom-8 right-8">
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
    </div>
  );
}
