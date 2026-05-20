const items = [
  { icon: '🎓', label: 'Cursos técnicos',                    desc: 'Formação de profissionais do segmento' },
  { icon: '🔧', label: 'Capacitação',                        desc: 'Treinamento técnico especializado' },
  { icon: '🏢', label: 'Grandes marcas do segmento',         desc: 'Parceiros de treinamento corporativo' },
  { icon: '👥', label: 'Formação de mão de obra',            desc: 'Criando o mercado que operamos' },
]

export default function S06Autoridade() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 30% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">06 / Autoridade</p>
        <h2 className="text-4xl font-black text-white">Referência técnica do segmento</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Left: cards */}
        <div className="flex flex-col gap-3 flex-1 animate-slide-left delay-200">
          {items.map((item, i) => (
            <div key={i}
              className="flex items-center gap-5 px-6 py-4 rounded-xl card-premium group cursor-default"
              style={{ animationDelay: `${0.15 * i + 0.2}s` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all group-hover:scale-110"
                style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.2)' }}>
                {item.icon}
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                <p className="text-[#8E8E93] text-sm mt-0.5">{item.desc}</p>
              </div>
              <div className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                style={{ background: '#FF6B00' }} />
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="w-80 flex flex-col gap-5 animate-slide-right delay-300">
          <div className="p-7 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Destaque</p>
            <p className="text-white text-base leading-relaxed">
              Treinamos profissionais e empresas do{' '}
              <span style={{ color: '#FF6B00' }}>mesmo mercado em que atuamos</span>.
            </p>
            <div className="mt-5 pt-5 border-t border-[#2C2C2E]">
              <p className="text-[#8E8E93] text-sm leading-relaxed">
                A TM e Tecle ajudam a desenvolver o mercado brasileiro de mobilidade elétrica — posicionando-se como autoridade técnica indiscutível.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-sm font-bold leading-snug">
              "Não apenas acompanhamos o mercado. Ajudamos a formar o mercado."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
