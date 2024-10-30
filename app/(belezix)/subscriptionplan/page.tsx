import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#1a1d21] text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#1f2327] border-[#2a2e32]">
        <div className="p-6 space-y-8">
          <button className="absolute top-4 left-4 text-white hover:text-white/80 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="space-y-6 text-center">
            <h1 className="text-2xl font-bold leading-tight md:text-3xl text-white">
              Este é seu plano de assinatura atual
            </h1>
            
            <div className="relative h-32 flex items-center justify-center">
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="animate-pulse">
                  <Rocket className="h-20 w-20 rotate-45 text-white" />
                </div>
              </div>
              <div className="absolute w-full h-full">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-white animate-twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  >
                    ⋆
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-white/90">Apenas</p>
              <div className="text-4xl font-bold text-white">
                R$ 32,90<span className="text-lg font-normal text-white/90">/mês</span>
              </div>
              <p className="text-white/90">por profissional</p>
            </div>

            <p className="text-white/90">
              Total R$ 32,90/ mês
            </p>
          </div>

          <p className="text-center text-white/90 leading-relaxed">
            A assinatura fortalece nossa parceria, nos permitindo evoluir a ferramenta desenvolvendo novas funcionalidades, além da manutenção periódica de nossos servidores.
          </p>

          <div className="space-y-4">
            <p className="text-center text-white/90">
              Escolha um método abaixo para seguir:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-base"
                size="lg"
              >
                PIX
              </Button>
              <Button 
                className="w-full text-white font-medium text-base"
                size="lg"
                style={{
                  backgroundColor: "#c97c52",
                  borderColor: "#c97c52"
                }}
              >
                CARTÃO
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Add required styles to your global CSS
const styles = `
  @keyframes twinkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
  
  .animate-twinkle {
    animation: twinkle 2s infinite;
  }
`