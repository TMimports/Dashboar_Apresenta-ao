import { CheckCircle2 } from 'lucide-react'

const pillars = ['Produto', 'Supply chain', 'Distribuição', 'Pós-venda', 'Tecnologia', 'Equipe', 'Demanda']

export default function S02Momento() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 40% at 80% 30%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">02 / O Momento</p>
        <h2 className="slide-title text-white leading-tight">A TM venceu o risco de execução</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-2 sm:gap-3 slide-sidebar animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] mb-1 uppercase tracking-widest font-medium">Pilares validados</p>
          {pillars.map((item, i) => (
            <div key={i}
              className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl card-premium group cursor-default">
              <CheckCircle2 size={16} color="#FF6B00" className="flex-shrink-0" />
              <span className="text-white text-sm font-medium group-hover:text-[#FF6B00] transition-colors">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center flex-1 animate-fade-in delay-300">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex flex-col items-center px-8 sm:px-10 py-4 sm:py-5 rounded-2xl mb-3"
              style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
              <span className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1">Antes</span>
              <span className="text-xl sm:text-2xl font-bold text-white">Validação</span>
            </div>
          </div>

          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-10 sm:h-12 bg-gradient-to-b from-[#2C2C2E] to-[#FF6B00]" />
            <div className="w-3 h-3 rounded-full mt-1" style={{ background: '#FF6B00' }} />
          </div>

          <div className="text-center mt-4 sm:mt-6">
            <div className="inline-flex flex-col items-center px-8 sm:px-10 py-4 sm:py-5 rounded-2xl glow-orange"
              style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid #FF6B00' }}>
              <span className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-1">Agora</span>
              <span className="text-xl sm:text-2xl font-bold text-[#FF6B00]">Escala</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center slide-sidebar animate-slide-right delay-200">
          <div className="p-6 sm:p-8 rounded-2xl mb-4 sm:mb-6"
            style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-sm text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Limitador atual</p>
            <p className="text-[#FF6B00] text-lg sm:text-xl font-black leading-tight uppercase tracking-wide">
              Estrutura de Capital para Escala
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic leading-relaxed">
              "Não estamos validando um negócio. Estamos acelerando uma máquina já validada."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
