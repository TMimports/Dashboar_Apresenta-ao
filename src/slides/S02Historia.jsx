import { useState } from 'react'

const timeline = [
  {
    year: '~2016',
    label: 'Fundação',
    text: 'Iniciou como loja de motopeças, oferecendo manutenção e reposição com foco em qualidade.',
  },
  {
    year: '2020',
    label: 'TM Elétricas',
    text: 'Criou a TM Elétricas, sua divisão de scooters elétricas, acompanhando a demanda por mobilidade sustentável.',
  },
  {
    year: '2022+',
    label: 'Verticalização',
    text: 'Evoluiu de varejo para um ecossistema verticalizado: importação própria, atacado, varejo, peças, ensino e tecnologia.',
  },
  {
    year: '2025',
    label: 'TM GROUP',
    text: 'Grupo integrado: TM GROUP + TM IMPORTS + TECLE MOTOS + TM ACADEMY + TM TECH.',
  },
]

const gargalhos = [
  'Falta de estrutura técnica no mercado',
  'Ausência de peças de reposição',
  'Pós-venda inexistente no setor',
  'Falta de profissionalização e padrão de qualidade',
]

export default function S02Historia() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="mb-3 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-1">02 / Nossa História</p>
        <h2 className="slide-title text-white">Linha do Tempo</h2>
        <p className="text-[#8E8E93] mt-1 text-sm italic">"Antes de escalar, construímos uma base sólida."</p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Coluna esquerda — texto institucional + timeline */}
        <div className="flex-1 flex flex-col gap-3 min-h-0 animate-fade-in delay-200">

          {/* Texto institucional exato */}
          <div className="p-3 rounded-2xl" style={{ background: '#111111', border: '1px solid #1C1C1E' }}>
            <p className="text-[#AEAEB2] text-[10px] leading-relaxed">
              A Tecle Motos começou como loja de motopeças, oferecendo manutenção e reposição com foco em qualidade.
              Em <span className="text-white font-semibold">2020</span>, criou a TM Elétricas, sua divisão de scooters elétricas, acompanhando a demanda por mobilidade sustentável.
              Hoje, a empresa oferece uma cadeia que vai desde a{' '}
              <span className="text-white font-semibold">Importação Própria</span>, venda atacado, venda varejo, peças e acessórios,
              ensino e treinamentos, até área de{' '}
              <span className="text-[#FF6B00] font-semibold">Tecnologia e IA</span> proprietária.
            </p>
            <p className="text-[#AEAEB2] text-[10px] leading-relaxed mt-1.5">
              Nasceu há quase <span className="text-white font-semibold">10 anos</span>, construída por sócios operadores, com visão de longo prazo e profundo conhecimento técnico do setor.
            </p>
          </div>

          {/* Timeline compacta */}
          <div className="flex-1 flex flex-col justify-between gap-1.5">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: hovered === i ? 'rgba(255,107,0,0.18)' : '#1C1C1E',
                      border: `2px solid ${hovered === i ? '#FF6B00' : '#2C2C2E'}`,
                      boxShadow: hovered === i ? '0 0 12px rgba(255,107,0,0.35)' : 'none',
                    }}>
                    <span style={{ color: hovered === i ? '#FF6B00' : '#8E8E93', fontSize: 8, fontWeight: 900 }}>
                      {item.year.slice(0, 4)}
                    </span>
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1" style={{ background: '#1C1C1E', minHeight: 6 }} />
                  )}
                </div>

                <div
                  className="flex-1 p-2.5 rounded-xl transition-all duration-300"
                  style={{
                    background: hovered === i ? 'rgba(255,107,0,0.05)' : '#111111',
                    border: `1px solid ${hovered === i ? 'rgba(255,107,0,0.35)' : '#1C1C1E'}`,
                  }}>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span style={{ color: '#FF6B00', fontSize: 9, fontWeight: 800, letterSpacing: '0.1em' }}>{item.year}</span>
                    <span className="text-white font-bold text-xs">{item.label}</span>
                  </div>
                  <p className="text-[#8E8E93] text-[10px] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar direita */}
        <div className="slide-sidebar flex flex-col gap-3 animate-slide-right delay-300">

          {/* Problema de mercado */}
          <div className="p-4 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1">O Problema Resolvido</p>
            <p className="text-[#8E8E93] text-[10px] leading-relaxed mb-3">
              O negócio surgiu da percepção de um problema real do mercado:
            </p>
            <div className="space-y-2">
              {gargalhos.map((g, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: '#FF6B00' }} />
                  <p className="text-white text-xs font-medium leading-snug">{g}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grupo integrado */}
          <div className="flex-1 p-4 rounded-2xl glow-orange"
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
