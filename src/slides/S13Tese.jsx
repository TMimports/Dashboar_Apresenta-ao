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
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">13 / Tese dos R$5 Milhões</p>
        <h2 className="text-4xl font-black text-white">Como R$5 milhões transformam a operação</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Before / After visual */}
        <div className="flex flex-col items-center gap-0 animate-slide-left delay-200">
          {/* Hoje */}
          <div className="w-72 p-7 rounded-2xl text-center"
            style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Hoje</p>
            <p className="text-6xl font-black text-white leading-none">~20</p>
            <p className="text-[#AEAEB2] font-medium mt-2">containers / ano</p>
            <p className="text-[#8E8E93] text-xs mt-1">≈ R$6M resultado bruto anual</p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center my-3">
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#2C2C2E] to-[#FF6B00]" />
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.4)', color: '#FF6B00' }}>
              + R$ 5M
            </div>
            <div className="w-0.5 h-10 bg-gradient-to-b from-[#FF6B00] to-[#FF8C33]" />
            <svg width="16" height="10" viewBox="0 0 16 10" fill="#FF6B00"><path d="M8 10L0 0h16z"/></svg>
          </div>

          {/* Com funding */}
          <div className="w-72 p-7 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.5)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Com funding</p>
            <p className="text-6xl font-black text-[#FF6B00] leading-none">~40</p>
            <p className="text-white font-medium mt-2">containers / ano</p>
            <p className="text-[#AEAEB2] text-xs mt-1">≈ R$12M potencial bruto anual</p>
          </div>
        </div>

        {/* Right: impacts + caption */}
        <div className="flex-1 flex flex-col gap-5 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">O funding permite</p>
            <div className="flex flex-col gap-2.5">
              {impacts.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                  <p className="text-[#AEAEB2] text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)' }}>
            <p className="text-[#FF6B00] font-bold text-sm mb-2">O funding não cria demanda.</p>
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
