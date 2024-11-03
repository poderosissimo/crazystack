import { useState } from 'react'
import { Star, MessageCircle, Phone, MapPin, ChevronRight, Calendar, Clock, Scissors, Camera, Heart } from 'lucide-react'

export default function Component() {
  const [activeTab, setActiveTab] = useState('SOBRE')
  const tabs = ['SOBRE', 'SERVIÇOS', 'AVALIAÇÕES', 'PUBLICAÇÕES']

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src="/placeholder.svg?height=300&width=400"
          alt="Salão de beleza"
          className="w-full h-48 sm:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Salão Sempre Bela</h1>
          <p className="text-white text-xs sm:text-sm flex items-center">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Salão de Beleza - 4.2km
          </p>
        </div>
        <button className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black bg-opacity-50 rounded-full p-1 sm:p-2 transition-colors duration-300 hover:bg-opacity-75">
          <Heart className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span className="text-green-500 text-xs sm:text-sm font-semibold px-2 py-1 bg-green-100 rounded-full">ABERTO</span>
            <span className="text-gray-500 text-xs sm:text-sm flex items-center">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              FECHA ÀS 18H
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-yellow-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
              <span className="text-base sm:text-lg font-bold mr-1 text-yellow-700">4,0</span>
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
              ))}
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-200 fill-current" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4 sm:mb-6">
          <button className="bg-purple-100 text-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center text-xs sm:text-sm transition-colors duration-300 hover:bg-purple-200">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            Chat
          </button>
          <button className="bg-green-100 text-green-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center text-xs sm:text-sm transition-colors duration-300 hover:bg-green-200">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            WhatsApp
          </button>
        </div>
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Profissionais</h2>
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {['Maria', 'João', 'Carla', 'Carol', 'Paula'].map((name, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-1 sm:mb-2 border-2 border-purple-300">
                  <img
                    src={`/placeholder.svg?height=64&width=64&text=${name}`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium">{name}</span>
                <span className="text-xs text-gray-500">{['Manicure', 'Cabeleireiro', 'Manicure', 'Maquiadora', 'Esteticista'][index]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="flex border-b overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm ${activeTab === tab ? 'border-b-2 border-purple-600 text-purple-600 font-semibold' : 'text-gray-500'} transition-colors duration-300 hover:text-purple-600`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4 sm:mt-6">
            {activeTab === 'SOBRE' && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Sobre</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  O Salão Sempre Bela está no mercado há mais de 10 anos buscando sempre trazer o melhor em tendências para sua beleza!
                </p>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Endereço</h3>
                <div className="flex items-start bg-gray-100 p-3 sm:p-4 rounded-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2 sm:mr-3 mt-1" />
                  <p className="text-sm sm:text-base text-gray-600">
                    Av. das Palmeiras, 478, Bairro Centro - Uberlândia/MG
                  </p>
                </div>
                <button className="text-purple-600 font-semibold mt-3 sm:mt-4 flex items-center text-sm sm:text-base transition-colors duration-300 hover:text-purple-800">
                  VER LOCALIZAÇÃO
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                </button>
              </div>
            )}
            {activeTab === 'SERVIÇOS' && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Promoções</h3>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 shadow-sm">
                  <h4 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 flex items-center">
                    <Scissors className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Maquiagem
                  </h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-500 line-through text-xs sm:text-sm">R$110,00</span>
                      <span className="text-green-600 font-bold text-lg sm:text-2xl ml-2">R$95,00</span>
                    </div>
                    <button className="bg-purple-600 text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 hover:bg-purple-700">
                      AGENDAR
                    </button>
                  </div>
                </div>
                <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Cabelo</h4>
                <div className="space-y-3 sm:space-y-4">
                  {['Corte', 'Coloração', 'Hidratação'].map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-3 sm:p-4 border rounded-lg">
                      <span className="font-medium text-sm sm:text-base">{service}</span>
                      <button className="text-purple-600 font-semibold text-xs sm:text-sm">Ver preço</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'AVALIAÇÕES' && (
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">3 avaliações</h3>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    { name: 'Marcela Dias', date: '17/11/2021', rating: 4, comment: 'Houve um atraso no atendimento mas gostei muito da maquiagem.' },
                    { name: 'Carlos Silva', date: '05/10/2021', rating: 5, comment: 'Excelente atendimento e resultado!' },
                    { name: 'Ana Paula', date: '22/09/2021', rating: 3, comment: 'O serviço foi bom, mas o preço um pouco alto.' }
                  ].map((review, index) => (
                    <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <img
                          src={`/placeholder.svg?height=48&width=48&text=${review.name.charAt(0)}`}
                          alt={review.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 border-2 border-purple-300"
                        />
                        <div>
                          <h4 className="font-semibold text-sm sm:text-base">{review.name}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} />
                            ))}
                            <span className="text-gray-500 text-xs sm:text-sm ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'PUBLICAÇÕES' && (
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {[
                  { title: 'Produção completa para noiva', image: 'Makeup' },
                  { title: 'Unhas de hoje 💅', image: 'Nails' },
                  { title: 'Novo corte tendência', image: 'Haircut' },
                  { title: 'Tratamento capilar', image: 'Treatment' }
                ].map((post, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={`/placeholder.svg?height=200&width=200&text=${post.image}`}
                      alt={post.title}
                      className="w-full h-32 sm:h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-xs sm:text-sm p-2 sm:p-3">{post.title}</p>
                    </div>
                    <button className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 sm:py-4 font-semibold text-sm sm:text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
        AGENDAR
      </button>
    </div>
  )
}