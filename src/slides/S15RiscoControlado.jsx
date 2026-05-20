const risks = [
  { label: 'Venda à vista',                desc: 'Inadimplência praticamente inexistente',    score: 95 },
  { label: 'Giro rápido de capital',       desc: 'Ciclo atacado < 30 dias',                   score: 90 },
  { label: 'Rede própria de distribuição', desc: '22 pontos com escoamento validado',          score: 88 },
  { label: 'Produto validado',             desc: 'Qualidade comprovada no campo',              score: 92 },
  { label: 'Tecnologia proprietária',      desc: 'Independência operacional',                  score: 85 },
  { label: 'Equipe consolidada',           desc: 'Time operacional formado',                   score: 90 },
]

export default function S15RiscoControlado() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">15 / Risco Controlado</p>
        <h2 className="text-4xl font-black text-white">Porque acreditamos ter baixo risco operacional</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0">
        {/* Risk bars */}
        <div className="flex-1 animate-fade-in delay-200">
          <div className="flex flex-col gap-3 h-full justify-center">
            {risks.map((risk, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex items-center justify-between mb-1.5">
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-[#FF6B00] transition-colors">{risk.label}</p>
                    <p className="text-[#8E8E93] text-xs">{risk.desc}</p>
                  </div>
                  <span className="text-[#FF6B00] font-black text-sm ml-4 flex-shrink-0">{risk.score}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#2C2C2E' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${risk.score}%`, background: 'linear-gradient(90deg, #994000, #FF6B00, #FF8C33)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: cambio + destaque */}
        <div className="w-72 flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Gestão de risco cambial</p>
            <p className="text-white text-sm leading-relaxed">
              O aumento do dólar é{' '}
              <span style={{ color: '#FF6B00' }}>absorvido pelo mercado</span> e transferido ao preço final do produto, reduzindo significativamente a exposição cambial.
            </p>
          </div>

          <div className="p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-2">Maior risco atual</p>
            <p className="text-white font-bold text-sm leading-snug">
              Crescer <span style={{ color: '#FF6B00' }}>abaixo</span> da demanda existente.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Já reduzimos os principais riscos de execução."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
