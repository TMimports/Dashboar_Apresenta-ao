const diferenciais = [
  { label: 'Fidelização',        desc: 'Cliente que retorna com recorrência',    pct: 90, fill: '#FF6B00' },
  { label: 'Recorrência',        desc: 'Compras repetidas e previsíveis',        pct: 85, fill: '#FF8C33' },
  { label: 'Confiança de marca', desc: 'Reputação consolidada no segmento',      pct: 95, fill: '#CC5500' },
  { label: 'Menor churn',        desc: 'Retenção elevada de clientes ativos',    pct: 88, fill: '#994000' },
  { label: 'Maior LTV',          desc: 'Lifetime value ampliado por confiança',  pct: 92, fill: '#FF6B00' },
]

export default function S08AssistenciaTecnica() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 20% 60%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">08 / Assistência Técnica</p>
        <h2 className="slide-title text-white">A melhor assistência técnica do segmento</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Sidebar esquerda — 3 elementos limpos */}
        <div className="slide-sidebar flex flex-col gap-4 animate-slide-left delay-200">

          {/* Card unificado: estrutura + barreira */}
          <div className="p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Estrutura técnica</p>
            <p className="text-white text-sm leading-relaxed">
              Estrutura <span style={{ color: '#FF6B00' }}>consolidada</span> com profissionais capacitados internamente e processos de qualidade.
            </p>
            <div className="mt-3 pt-3 border-t border-[#2C2C2E]">
              <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-1.5">Barreira de entrada</p>
              <p className="text-[#AEAEB2] text-xs leading-relaxed">
                A formação técnica contínua da equipe é o que torna essa barreira real e sustentável.
              </p>
            </div>
          </div>

          {/* Capacitação — visível, não perdida */}
          <div className="flex items-start gap-3 px-4 py-3.5 rounded-xl"
            style={{ background: 'rgba(255,107,0,0.04)', border: '1px solid rgba(255,107,0,0.25)' }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1" style={{ background: '#FF6B00' }} />
            <p className="text-[#AEAEB2] text-sm leading-relaxed">
              <span style={{ color: '#FF8C33', fontWeight: 600 }}>Capacitação técnica contínua</span>{' '}
              — profissionais formados sustentam qualidade e fidelização.
            </p>
          </div>

          {/* Quote hero */}
          <div className="p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] font-black text-sm sm:text-base leading-snug">
              "Vendemos confiança, não apenas mobilidade."
            </p>
          </div>
        </div>

        {/* Área principal — progress bars */}
        <div className="flex-1 flex flex-col gap-2.5 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1">Pós-venda forte gera</p>
          {diferenciais.map((item, i) => (
            <div key={i} className="px-4 py-3 rounded-xl card-premium group cursor-default">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex-1 min-w-0 pr-3">
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                  <p className="text-[#8E8E93] text-xs mt-0.5">{item.desc}</p>
                </div>
                <span className="text-[#FF6B00] font-bold text-lg flex-shrink-0">{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#2C2C2E' }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${item.pct}%`, background: `linear-gradient(90deg, #CC5500, ${item.fill})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
