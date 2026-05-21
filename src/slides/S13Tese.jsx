const impacts = [
  'Aumento da previsibilidade de importação',
  'Ampliação da capacidade de estoque',
  'Redução de ruptura comercial',
  'Aumento da velocidade operacional',
  'Ganho acelerado de market share',
  'Expansão do varejo Tecle Motos',
]

export default function S13Tese() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">13 / Tese dos R$5 Milhões</p>
        <h2 className="slide-title text-white">Como R$5 milhões transformam a operação</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex-1 flex flex-col gap-4 animate-slide-left delay-200">

          {/* Card hero — funding */}
          <div className="p-5 sm:p-7 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-2">Funding pretendido</p>
            <p className="text-5xl sm:text-6xl font-black text-[#FF6B00] leading-none">R$5M</p>
            <div className="w-16 h-0.5 my-3 mx-auto" style={{ background: 'rgba(255,107,0,0.4)' }} />
            <p className="text-[#AEAEB2] text-sm leading-snug">O capital remove o gargalo do crescimento</p>
          </div>

          {/* Comparativo de capacidade operacional */}
          <div>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Capacidade operacional</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 p-4 sm:p-5 rounded-xl text-center"
                style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
                <p className="text-3xl sm:text-4xl font-black text-white">~20</p>
                <p className="text-[#8E8E93] text-xs mt-1">containers/ano</p>
                <p className="text-[#8E8E93] text-xs">capacidade atual</p>
              </div>

              <div className="flex flex-col items-center gap-1 flex-shrink-0 px-1">
                <div className="text-[#FF6B00] font-black text-xl">→</div>
                <p className="text-[#FF6B00] text-xs font-black">2×</p>
              </div>

              <div className="flex-1 p-4 sm:p-5 rounded-xl text-center glow-orange"
                style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
                <p className="text-3xl sm:text-4xl font-black text-[#FF6B00]">~40</p>
                <p className="text-white text-xs mt-1">containers/ano</p>
                <p className="text-[#AEAEB2] text-xs">com funding</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">O funding permite</p>
            <div className="flex flex-col gap-2">
              {impacts.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                  <p className="text-[#AEAEB2] text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)' }}>
            <p className="text-[#FF6B00] font-bold text-sm mb-1">O funding não cria demanda.</p>
            <p className="text-[#AEAEB2] text-sm">O funding remove o gargalo do crescimento.</p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Hoje crescemos no limite do capital disponível."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
