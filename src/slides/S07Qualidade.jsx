const impacts = [
  { label: 'Menor retrabalho',         icon: '↓' },
  { label: 'Menor garantia acionada',  icon: '↓' },
  { label: 'Menor devolução',          icon: '↓' },
  { label: 'Maior satisfação',         icon: '↑' },
  { label: 'Maior previsibilidade',    icon: '↑' },
]

export default function S07Qualidade() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 50% at 75% 40%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">07 / Qualidade</p>
        <h2 className="text-4xl font-black text-white">Qualidade comprovada na prática</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Left: big KPI */}
        <div className="flex flex-col gap-5 w-64 animate-slide-left delay-200">
          <div className="p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] text-xs uppercase tracking-widest font-medium mb-3">Último container</p>
            <p className="text-5xl font-black text-white leading-none">≈ 0%</p>
            <p className="text-[#AEAEB2] text-sm mt-2">índice de problemas</p>
          </div>

          <div className="p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Foco</p>
            <p className="text-white text-sm leading-relaxed">
              Crescimento sustentável através de produtos de{' '}
              <span style={{ color: '#FF6B00' }}>alta qualidade</span> e baixo índice de ocorrência técnica.
            </p>
          </div>
        </div>

        {/* Center: impact list */}
        <div className="flex flex-col gap-3 flex-1 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Impacto direto da qualidade</p>
          {impacts.map((item, i) => (
            <div key={i}
              className="flex items-center gap-4 px-5 py-4 rounded-xl card-premium group cursor-default">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 transition-all group-hover:scale-110"
                style={{
                  background: item.icon === '↑' ? 'rgba(255,107,0,0.1)' : 'rgba(255,107,0,0.06)',
                  border: `1px solid ${item.icon === '↑' ? 'rgba(255,107,0,0.3)' : '#2C2C2E'}`,
                  color: item.icon === '↑' ? '#FF6B00' : '#AEAEB2'
                }}>
                {item.icon}
              </div>
              <span className="text-white font-medium group-hover:text-[#FF6B00] transition-colors">{item.label}</span>
              <div className="flex-1 mx-4">
                <div className="h-0.5 rounded-full" style={{ background: '#2C2C2E' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${60 + i * 8}%`, background: 'linear-gradient(90deg, #FF6B00, #FF8C33)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="w-64 flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Destaque</p>
            <p className="text-[#FF6B00] font-bold text-base">Qualidade reduz risco financeiro.</p>
          </div>
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic leading-relaxed">
              "Importamos para escalar, mas com padrão de qualidade para sustentar crescimento."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
