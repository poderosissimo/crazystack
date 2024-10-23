import Image from "next/image";
import { Bell, ChevronDown, Menu, Search, Plus } from "lucide-react";

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold">belezix</h1>
            <div className="flex items-center space-x-4 md:hidden">
              <Bell className="w-6 h-6" />
              <Menu className="w-6 h-6" />
            </div>
          </div>
          <nav className="hidden md:block">
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
          <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="pl-10 pr-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Bell className="w-6 h-6 cursor-pointer hidden md:block" />
            <Menu className="w-6 h-6 cursor-pointer hidden md:block" />
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
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        <section className="mb-8 md:mb-12">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6">
            Onde deseja navegar hoje?
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-8">
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
                <div className="bg-white p-2 md:p-4 rounded-lg shadow-md transition-transform group-hover:scale-105">
                  <Image
                    src={`/placeholder.svg?text=${item.icon}&height=60&width=60`}
                    alt={`Ícone de ${item.name}`}
                    width={60}
                    height={60}
                    className="rounded-lg mb-2"
                  />
                </div>
                <p className="text-xs md:text-sm text-center mt-2">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <section className="mb-6 md:mb-0 md:col-span-2">
            <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6">
              Espaços perto de você
            </h2>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
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
                  className="flex items-center bg-white rounded-lg p-3 md:p-4 shadow transition-all hover:shadow-md"
                >
                  <Image
                    src={`/placeholder.svg?text=${item.name}&height=60&width=60`}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg mr-3 md:mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm md:text-lg">
                      {item.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {item.type} • {item.distance}
                    </p>
                    <div className="flex items-center mt-1 md:mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 md:w-5 md:h-5 ${
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
                      <span className="ml-1 md:ml-2 text-xs md:text-sm text-gray-600">
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
          <section className="mt-6 md:mt-0">
            <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-6">
              Meus favoritos
            </h2>
            <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
              {[
                "Salão Sempre Bela",
                "Clínica Embelezar",
                "Barbearia Estilo",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 md:flex-shrink md:flex items-center bg-white rounded-lg p-2 md:p-4 shadow transition-all hover:shadow-md group"
                  aria-label={`Favorito: ${item}`}
                >
                  <Image
                    src={`/placeholder.svg?text=${item}&height=60&width=60`}
                    alt={item}
                    width={60}
                    height={60}
                    className="rounded-lg mb-2 md:mb-0 md:mr-4"
                  />
                  <p className="text-xs md:text-lg font-medium group-hover:text-purple-600 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8">
        <button className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
