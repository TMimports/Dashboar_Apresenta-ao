import { useState } from 'react'

const depts = [
  { label: 'Financeiro' },
  { label: 'Comercial' },
  { label: 'Marketing' },
  { label: 'TI' },
  { label: 'Inteligência Artificial' },
  { label: 'Logística' },
  { label: 'Pós-venda' },
  { label: 'Assistência Técnica' },
  {
    label: 'Ensino / Treinamento / Capacitação',
    highlight: true,
    tip: 'Capacitação técnica rigorosa que sustenta a escala, o pós-venda e o padrão operacional da marca.',
  },
]

export default function S05Estrutura() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">05 / Estrutura</p>
        <h2 className="slide-title text-white">Uma estrutura construída antes da escala</h2>
        <p className="text-[#8E8E93] mt-1 text-sm italic">
          "Nosso desafio não é construir estrutura. É acelerar uma estrutura pronta."
        </p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Grid de departamentos */}
        <div className="flex-1 animate-fade-in delay-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 h-full content-start">
            {depts.map((d, i) => (
              <div
                key={i}
                className="relative p-3 sm:p-4 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  gridColumn: d.highlight ? 'span 2' : undefined,
                  background: d.highlight
                    ? (hovered === i ? 'rgba(255,107,0,0.13)' : 'rgba(255,107,0,0.07)')
                    : (hovered === i ? 'rgba(255,107,0,0.04)' : '#1C1C1E'),
                  border: `1px solid ${d.highlight
                    ? 'rgba(255,107,0,0.45)'
                    : (hovered === i ? 'rgba(255,107,0,0.25)' : '#2C2C2E')}`,
                  boxShadow: d.highlight ? '0 0 18px rgba(255,107,0,0.12)' : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <p className={`font-bold text-sm leading-snug ${d.highlight ? 'text-[#FF6B00]' : 'text-white'}`}>
                  {d.label}
                </p>

                {d.highlight && hovered === i && d.tip && (
                  <p className="text-[#AEAEB2] text-xs mt-2 leading-relaxed">{d.tip}</p>
                )}

                {d.highlight && (
                  <span
                    className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{ background: 'rgba(255,107,0,0.18)', color: '#FF6B00', border: '1px solid rgba(255,107,0,0.3)' }}>
                    Pilar Estratégico
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="slide-sidebar-sm flex flex-col gap-4 animate-slide-right delay-300">

          <div className="p-5 rounded-2xl flex-1 glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest mb-3">Pronto para Expansão</p>
            <p className="text-white font-semibold text-sm leading-relaxed mb-4">
              Todos os departamentos operacionais estão ativos e integrados.
            </p>
            <p className="text-[#8E8E93] text-xs leading-relaxed">
              A estrutura foi validada em ciclos reais de operação antes de escalar. O capital entra para acelerar — não para construir.
            </p>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-[10px] text-[#8E8E93] uppercase tracking-widest font-medium mb-2">TM ACADEMY</p>
            <p className="text-white text-sm font-bold">Formação Técnica Proprietária</p>
            <p className="text-[#8E8E93] text-xs mt-1 leading-relaxed">
              Sustenta o pós-venda e o padrão operacional das unidades franqueadas e próprias.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
