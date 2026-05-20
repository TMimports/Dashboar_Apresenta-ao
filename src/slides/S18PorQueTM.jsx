const proved = ['Produto', 'Operação', 'Distribuição', 'Pós-venda', 'Qualidade', 'Tecnologia', 'Time', 'Demanda', 'Escalabilidade']

export default function S18PorQueTM() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">18 / Por Que TM</p>
        <h2 className="text-4xl font-black text-white">Por que acreditamos estar prontos para o próximo nível</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Proved */}
        <div className="flex-1 animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Já provamos</p>
          <div className="grid grid-cols-3 gap-3">
            {proved.map((item, i) => (
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

        {/* Right: what's missing */}
        <div className="w-72 flex flex-col gap-5 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O que falta</p>
            <p className="text-[#FF6B00] font-black text-xl leading-tight uppercase tracking-wide">
              Estrutura de Capital
            </p>
          </div>

          <div className="p-7 rounded-2xl glow-orange text-center"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-white font-bold text-base leading-snug mb-3">
              "A máquina já existe."
            </p>
            <p className="text-[#FF6B00] font-black text-base">
              "Agora é hora de acelerar."
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"A TM já provou seu modelo. Agora buscamos estrutura de capital para escalar."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
