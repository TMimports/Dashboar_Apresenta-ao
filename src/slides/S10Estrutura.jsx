import { useState } from 'react'
import { DollarSign, Megaphone, Monitor, Bot, Truck, Wrench, TrendingUp, Handshake, GraduationCap } from 'lucide-react'

const areas = [
  { icon: DollarSign,    label: 'Financeiro',             desc: 'Gestão de caixa, compliance e controle de capital' },
  { icon: Megaphone,     label: 'Marketing',              desc: 'Posicionamento de marca e geração de demanda' },
  { icon: Monitor,       label: 'TI',                     desc: 'Sistemas proprietários e infraestrutura digital' },
  { icon: Bot,           label: 'Inteligência Artificial', desc: 'Automação e análise preditiva para decisões ágeis' },
  { icon: Truck,         label: 'Logística',              desc: 'Supply chain e distribuição de ponta a ponta' },
  { icon: Wrench,        label: 'Setor Técnico',          desc: 'Assistência técnica e manutenção especializada' },
  { icon: TrendingUp,    label: 'Comercial',              desc: 'Pipeline de vendas e expansão de canais' },
  { icon: Handshake,     label: 'Pós-venda',              desc: 'Retenção, fidelização e suporte ao cliente' },
  { icon: GraduationCap, label: 'Treinamento',            desc: 'Capacitação técnica que viabiliza a escala operacional' },
]

export default function S10Estrutura() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">10 / Estrutura Operacional</p>
        <h2 className="slide-title text-white">Estrutura corporativa pronta para escalar</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex-1 animate-fade-in delay-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {areas.map((area, i) => {
              const Icon = area.icon
              return (
                <div key={i}
                  className="relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl card-premium group cursor-default text-center"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="icon-box">
                    <Icon size={16} />
                  </div>
                  <p className="text-white text-xs font-medium leading-tight group-hover:text-[#FF6B00] transition-colors">{area.label}</p>

                  {hovered === i && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-44 p-2.5 rounded-lg text-xs text-center pointer-events-none"
                      style={{ background: '#1C1C1E', border: '1px solid rgba(255,107,0,0.45)', color: '#AEAEB2', lineHeight: 1.4 }}>
                      {area.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                        style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid rgba(255,107,0,0.45)' }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl"
            style={{ background: 'rgba(255,107,0,0.04)', border: '1px solid rgba(255,107,0,0.15)' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1.5">Base para escala</p>
            <p className="text-white text-xs sm:text-sm leading-relaxed">
              Treinamento é o elo que transforma{' '}
              <span style={{ color: '#FF6B00' }}>estrutura em escala</span>.
              Sem capacitação, nenhuma das 9 áreas opera no limite.
            </p>
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O que isso significa</p>
            <p className="text-white text-sm leading-relaxed">
              O desafio atual não é montar estrutura. É{' '}
              <span style={{ color: '#FF6B00' }}>alimentar uma estrutura já pronta</span>.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] font-black text-base leading-snug">
              "A estrutura precedeu a escala."
            </p>
          </div>

          <div className="flex gap-3">
            {[['9', 'Áreas consolidadas'], ['100%', 'Operacional ativo']].map(([val, label]) => (
              <div key={label} className="flex-1 p-4 rounded-xl text-center card-premium">
                <p className="text-xl sm:text-2xl font-black" style={{ color: '#FF6B00' }}>{val}</p>
                <p className="text-[#8E8E93] text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Construímos a base antes da aceleração."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
