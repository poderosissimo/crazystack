import Image from "next/image";
import {
  Star,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Component() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start p-4">
      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-3xl overflow-hidden shadow-lg">
        <div className="bg-purple-600 text-white p-6 relative">
          <ChevronLeft className="absolute top-6 left-4" />
          <div className="flex justify-center -mb-16">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Maria"
              width={128}
              height={128}
              className="rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="pt-16 px-6 pb-6">
          <h1 className="text-2xl font-bold text-center">Maria</h1>
          <p className="text-gray-500 text-center mb-2">Manicure</p>
          <div className="flex justify-center items-center mb-4">
            <span className="text-xl font-bold mr-2">4,0</span>
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
          </div>
          <div className="flex justify-center space-x-8 mb-6">
            <button className="flex flex-col items-center text-purple-600">
              <MessageCircle className="w-6 h-6 mb-1" />
              <span className="text-sm">Chat</span>
            </button>
            <button className="flex flex-col items-center text-purple-600">
              <Phone className="w-6 h-6 mb-1" />
              <span className="text-sm">WhatsApp</span>
            </button>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Salão Sempre Bela"
                width={64}
                height={64}
                className="rounded-lg mr-4"
              />
              <div>
                <h2 className="font-bold">Salão Sempre Bela</h2>
                <p className="text-sm text-gray-600 mb-2">
                  O Salão Sempre Bela está no mercado há mais de 10 anos
                  buscando sempre trazer o melhor em tendências e inovações para
                  ...
                </p>
                <a href="#" className="text-purple-600 text-sm font-semibold">
                  VER PERFIL
                </a>
              </div>
            </div>
          </div>
          <h3 className="font-bold mb-4">Serviços prestados</h3>
          <div className="flex space-x-4 mb-6">
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Manicure"
                width={64}
                height={64}
                className="rounded-full mb-2"
              />
              <span className="text-sm">Manicure</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Pedicure"
                width={64}
                height={64}
                className="rounded-full mb-2"
              />
              <span className="text-sm">Pedicure</span>
            </div>
          </div>
          <h3 className="font-bold mb-4">Publicações</h3>
          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Maria"
                  width={40}
                  height={40}
                  className="rounded-full mr-2"
                />
                <div>
                  <p className="font-semibold">Maria</p>
                  <p className="text-sm text-gray-500">17/10/2021</p>
                </div>
              </div>
              <ChevronRight className="text-purple-600" />
            </div>
            <p className="mb-2">Unhas de hoje 😊</p>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Nail art"
              width={400}
              height={200}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
