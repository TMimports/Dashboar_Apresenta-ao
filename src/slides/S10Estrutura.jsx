const areas = [
  { label: 'Financeiro',          icon: '💰' },
  { label: 'Marketing',           icon: '📣' },
  { label: 'TI',                  icon: '💻' },
  { label: 'Inteligência Artificial', icon: '🤖' },
  { label: 'Logística',           icon: '🚚' },
  { label: 'Setor Técnico',       icon: '🔧' },
  { label: 'Comercial',           icon: '📈' },
  { label: 'Pós-venda',           icon: '🤝' },
]

export default function S10Estrutura() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">10 / Estrutura Operacional</p>
        <h2 className="text-4xl font-black text-white">Estrutura corporativa pronta para escalar</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Areas grid */}
        <div className="flex-1 animate-fade-in delay-200">
          <div className="grid grid-cols-4 gap-3">
            {areas.map((area, i) => (
              <div key={i}
                className="flex flex-col items-center gap-2 p-5 rounded-xl card-premium group cursor-default text-center"
                style={{ animationDelay: `${0.08 * i + 0.2}s` }}>
                <div className="text-2xl group-hover:scale-110 transition-transform">{area.icon}</div>
                <p className="text-white text-sm font-medium leading-tight group-hover:text-[#FF6B00] transition-colors">{area.label}</p>
                <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: '#FF6B00' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: insight */}
        <div className="w-72 flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O que isso significa</p>
            <p className="text-white text-sm leading-relaxed">
              O desafio atual não é montar estrutura. É{' '}
              <span style={{ color: '#FF6B00' }}>alimentar uma estrutura já pronta</span>.
            </p>
          </div>

          <div className="p-7 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] font-black text-lg leading-snug">
              "A estrutura precedeu a escala."
            </p>
          </div>

          <div className="flex gap-3">
            {[['8', 'Áreas consolidadas'], ['100%', 'Operacional ativo']].map(([val, label]) => (
              <div key={label} className="flex-1 p-4 rounded-xl text-center card-premium">
                <p className="text-2xl font-black" style={{ color: '#FF6B00' }}>{val}</p>
                <p className="text-[#8E8E93] text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Construímos a base antes da aceleração."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
