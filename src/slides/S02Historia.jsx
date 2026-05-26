import { useState } from 'react'

const timeline = [
  {
    year: '~2016',
    label: 'Fundação',
    text: 'Iniciou como loja de motopeças com foco em qualidade de manutenção e atendimento técnico.',
    tip: 'Base técnica sólida desde o início — não foi um acidente de percurso.',
  },
  {
    year: '2020',
    label: 'TM Elétricas',
    text: 'Criou a TM Elétricas para suprir a demanda crescente por sustentabilidade e mobilidade elétrica.',
    tip: 'Antecipou o mercado de EVs antes da explosão da categoria no Brasil.',
  },
  {
    year: '2022+',
    label: 'Verticalização',
    text: 'Evoluiu de varejo local para Ecossistema Verticalizado com importação própria e atacado.',
    tip: 'Controle da cadeia elimina intermediários e protege margem.',
  },
  {
    year: '2025',
    label: 'TM GROUP',
    text: 'TM GROUP: grupo integrado com TM Imports, Tecle Motos, TM Academy e TM Tech operando de forma unificada.',
    tip: 'Diagnóstico interno via estrutura franqueadora revelou e corrigiu gargalos antes da escala.',
  },
]

const gargalhos = [
  'Falta de estrutura técnica no mercado',
  'Ausência de peças de reposição',
  'Pós-venda inexistente no setor',
  'Amadorismo generalizado',
]

export default function S02Historia() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">02 / Nossa História</p>
        <h2 className="slide-title text-white">Linha do Tempo</h2>
        <p className="text-[#8E8E93] mt-1 text-sm italic">"Antes de escalar, construímos uma base sólida."</p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Timeline vertical */}
        <div className="flex-1 flex flex-col gap-2 animate-fade-in delay-200">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Dot + line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hovered === i ? 'rgba(255,107,0,0.18)' : '#1C1C1E',
                    border: `2px solid ${hovered === i ? '#FF6B00' : '#2C2C2E'}`,
                    boxShadow: hovered === i ? '0 0 14px rgba(255,107,0,0.35)' : 'none',
                  }}>
                  <span style={{ color: hovered === i ? '#FF6B00' : '#8E8E93', fontSize: 9, fontWeight: 900 }}>
                    {item.year.slice(0, 4)}
                  </span>
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 flex-1" style={{ background: '#1C1C1E', minHeight: 8 }} />
                )}
              </div>

              {/* Card */}
              <div
                className="flex-1 p-3 sm:p-4 rounded-xl transition-all duration-300"
                style={{
                  background: hovered === i ? 'rgba(255,107,0,0.05)' : '#111111',
                  border: `1px solid ${hovered === i ? 'rgba(255,107,0,0.35)' : '#1C1C1E'}`,
                  marginBottom: i < timeline.length - 1 ? '0.25rem' : 0,
                }}>
                <div className="flex items-baseline gap-2 mb-1">
                  <span style={{ color: '#FF6B00', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em' }}>{item.year}</span>
                  <span className="text-white font-bold text-sm">{item.label}</span>
                </div>
                <p className="text-[#8E8E93] text-xs leading-relaxed">{item.text}</p>
                {hovered === i && (
                  <p className="text-[#FF8C33] text-xs mt-2 italic border-t border-[rgba(255,107,0,0.15)] pt-2">
                    {item.tip}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar direita */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O Gargalo Resolvido</p>
            <div className="space-y-2.5">
              {gargalhos.map((g, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#FF6B00' }} />
                  <p className="text-white text-xs font-medium leading-snug">{g}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4 sm:p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.28)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Grupo Integrado</p>
            {['TM GROUP', 'TM IMPORTS', 'TECLE MOTOS', 'TM ACADEMY', 'TM TECH'].map((g, i) => (
              <div key={i} className="flex items-center gap-2 mb-2.5">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                <span className="text-white text-sm font-bold">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
