const diferenciais = [
  { label: 'Fidelização',         desc: 'Cliente que retorna',     pct: 90 },
  { label: 'Recorrência',         desc: 'Compras repetidas',       pct: 85 },
  { label: 'Confiança de marca',  desc: 'Reputação consolidada',   pct: 95 },
  { label: 'Menor churn',         desc: 'Retenção elevada',        pct: 88 },
  { label: 'Maior LTV',           desc: 'Lifetime value do cliente', pct: 92 },
]

export default function S08AssistenciaTecnica() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 20% 60%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">08 / Assistência Técnica</p>
        <h2 className="text-4xl font-black text-white">A melhor assistência técnica do segmento</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Left: intro */}
        <div className="w-72 flex flex-col gap-4 animate-slide-left delay-200">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Estrutura técnica</p>
            <p className="text-white text-sm leading-relaxed">
              Estrutura técnica <span style={{ color: '#FF6B00' }}>consolidada</span>, processos internos e profissionais especializados.
            </p>
          </div>

          <div className="p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-2">Barreira de entrada</p>
            <p className="text-white text-sm leading-relaxed">
              A assistência técnica é uma barreira de entrada importante do setor.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Vendemos confiança, não apenas mobilidade."</p>
          </blockquote>
        </div>

        {/* Right: indicators with bars */}
        <div className="flex-1 flex flex-col gap-3 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Pós-venda forte gera</p>
          {diferenciais.map((item, i) => (
            <div key={i}
              className="px-5 py-4 rounded-xl card-premium group cursor-default">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                  <p className="text-[#8E8E93] text-xs">{item.desc}</p>
                </div>
                <span className="text-[#FF6B00] font-black text-xl">{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#2C2C2E' }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${item.pct}%`, background: 'linear-gradient(90deg, #CC5500, #FF6B00, #FF8C33)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
