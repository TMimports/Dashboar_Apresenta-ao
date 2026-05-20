const validated = ['Produto', 'Distribuição', 'Canais de venda', 'Operação', 'Qualidade', 'Pós-venda', 'Tecnologia', 'Demanda']

export default function S12Oportunidade() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">12 / Oportunidade de Crescimento</p>
        <h2 className="text-4xl font-black text-white">Uma demanda já validada</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Left: validated grid */}
        <div className="flex-1 animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">A TM já validou</p>
          <div className="grid grid-cols-2 gap-3">
            {validated.map((item, i) => (
              <div key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl card-premium group cursor-default">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,0,0.15)', border: '1px solid #FF6B00' }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white text-sm font-medium group-hover:text-[#FF6B00] transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: destaque central */}
        <div className="w-80 flex flex-col gap-5 animate-slide-right delay-300">
          <div className="p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Principal limitador</p>
            <p className="text-white font-black text-xl leading-tight uppercase tracking-wide">
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
