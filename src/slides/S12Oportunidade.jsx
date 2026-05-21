import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const validated = [
  { label: 'Produto',         desc: 'Linha validada em campo com índice de problemas ≈ 0% no último container' },
  { label: 'Distribuição',    desc: '22 pontos de venda ativos consolidados em 4 canais estruturados' },
  { label: 'Canais de venda', desc: 'Atacado, varejo próprio, shopping centers, supermercados e home centers' },
  { label: 'Operação',        desc: 'Processos consolidados com ciclo de giro atacado inferior a 30 dias' },
  { label: 'Qualidade',       desc: 'Controle de qualidade na importação com rastreabilidade e padrão técnico' },
  { label: 'Tecnologia',      desc: 'ERP, CRM e IA proprietários em operação contínua e integrada' },
  { label: 'Demanda',         desc: 'Demanda comprovada e recorrente nos 22 pontos de distribuição ativos' },
  { label: 'Pós-venda',       desc: 'Assistência técnica reconhecida como referência no segmento de elétricas' },
]

export default function S12Oportunidade() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">12 / Oportunidade de Crescimento</p>
        <h2 className="slide-title text-white">Uma demanda já validada</h2>
      </div>

      <div className="slide-row flex-1 min-h-0 items-center">
        <div className="flex-1 animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">A TM já validou</p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {validated.map((item, i) => (
              <div key={i}
                className="relative flex items-center gap-3 px-3 sm:px-4 py-2.5 rounded-xl card-premium group cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <CheckCircle2 size={15} color="#FF6B00" className="flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm font-medium group-hover:text-[#FF6B00] transition-colors leading-tight">
                  {item.label}
                </span>

                {hovered === i && (
                  <div className="absolute bottom-full left-0 mb-2 z-20 w-56 p-2.5 rounded-lg text-xs pointer-events-none"
                    style={{ background: '#1C1C1E', border: '1px solid rgba(255,107,0,0.45)', color: '#AEAEB2', lineHeight: 1.5 }}>
                    {item.desc}
                    <div className="absolute top-full left-6 w-0 h-0"
                      style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid rgba(255,107,0,0.45)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 sm:p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Principal limitador</p>
            <p className="text-white font-black text-lg sm:text-xl leading-tight uppercase tracking-wide">
              A Velocidade de Capitalização
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {['A estrutura já existe.', 'A demanda já existe.', 'O time já existe.'].map((line, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                <p className="text-[#AEAEB2] text-sm">{line}</p>
              </div>
            ))}
            <div className="px-4 py-3 rounded-xl" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)' }}>
              <p className="text-[#FF6B00] text-sm font-bold">O capital acelera uma operação já validada.</p>
            </div>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Nosso desafio não é criar crescimento. É sustentar a velocidade do crescimento."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
