const chain = [
  { label: 'Importação',          desc: 'Origem direta, controle de supply chain' },
  { label: 'Atacado',             desc: 'Distribuição B2B estruturada' },
  { label: 'Distribuição',        desc: 'Rede própria de 22 pontos' },
  { label: 'Varejo Próprio',      desc: 'Tecle Motos — presença física premium' },
  { label: 'Assistência Técnica', desc: 'Pós-venda referência do segmento' },
  { label: 'Proteção Veicular',   desc: 'TecleBom — recorrência financeira' },
  { label: 'Tecnologia',          desc: 'ERP, CRM e IA proprietários' },
]

export default function S03QuemSomos() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 20% 70%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">03 / Quem Somos</p>
        <h2 className="text-4xl font-black text-white leading-tight">TM Elétricas</h2>
        <p className="text-[#8E8E93] mt-1">Uma plataforma verticalizada de mobilidade elétrica</p>
      </div>

      <div className="flex gap-12 flex-1 items-center min-h-0">
        {/* Chain flow */}
        <div className="flex flex-col gap-0 flex-1 animate-slide-left delay-200">
          {chain.map((item, i) => (
            <div key={i} className="flex items-stretch">
              {/* Connector */}
              <div className="flex flex-col items-center w-8 mr-4 flex-shrink-0">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: i === 0 || i === chain.length - 1 ? '#FF6B00' : '#3A3A3C', marginTop: 16 }} />
                {i < chain.length - 1 && <div className="w-0.5 flex-1" style={{ background: 'linear-gradient(#3A3A3C, #2C2C2E)', minHeight: 8 }} />}
              </div>
              {/* Card */}
              <div className="flex-1 flex items-center gap-4 px-4 py-3 mb-1 rounded-xl transition-all duration-300 cursor-default group
                hover:border-[#FF6B00] hover:border-opacity-50"
                style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                  <p className="text-[#8E8E93] text-xs mt-0.5">{item.desc}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: '#FF6B00' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right: destaque */}
        <div className="w-72 flex flex-col gap-5 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Diferencial</p>
            <p className="text-white text-base leading-relaxed">
              A TM atua de <span style={{ color: '#FF6B00' }}>ponta a ponta</span> na cadeia do negócio, capturando margem em múltiplas etapas da operação.
            </p>
          </div>

          <div className="p-5 rounded-2xl glow-orange" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-sm font-bold leading-snug">
              "Poucos players possuem controle completo da cadeia operacional."
            </p>
          </div>

          {/* KPI destaque */}
          <div className="grid grid-cols-2 gap-3">
            {[['7', 'Elos de cadeia'], ['100%', 'Controle próprio']].map(([val, label]) => (
              <div key={label} className="p-4 rounded-xl text-center card-premium">
                <p className="text-2xl font-black" style={{ color: '#FF6B00' }}>{val}</p>
                <p className="text-xs text-[#8E8E93] mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
