const pillars = ['Produto', 'Supply chain', 'Distribuição', 'Pós-venda', 'Tecnologia', 'Equipe', 'Demanda']

export default function S02Momento() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 40% at 80% 30%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">02 / O Momento</p>
        <h2 className="text-4xl font-black text-white leading-tight">
          A TM venceu o risco de execução
        </h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0">
        {/* Left: checklist */}
        <div className="flex flex-col gap-3 w-72 animate-slide-left delay-200">
          <p className="text-sm text-[#8E8E93] mb-1 uppercase tracking-widest font-medium">Pilares validados</p>
          {pillars.map((item, i) => (
            <div key={i}
              className="flex items-center gap-3 px-4 py-3 rounded-xl card-premium group cursor-default"
              style={{ animationDelay: `${0.1 * i + 0.3}s` }}>
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

        {/* Center: timeline */}
        <div className="flex flex-col items-center justify-center flex-1 animate-fade-in delay-300">
          {/* Before */}
          <div className="text-center mb-6">
            <div className="inline-flex flex-col items-center px-10 py-5 rounded-2xl mb-3"
              style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
              <span className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1">Antes</span>
              <span className="text-2xl font-bold text-white">Validação</span>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center my-2">
            <div className="w-0.5 h-12 bg-gradient-to-b from-[#2C2C2E] to-[#FF6B00]" />
            <div className="w-3 h-3 rounded-full mt-1" style={{ background: '#FF6B00' }} />
          </div>

          {/* Now */}
          <div className="text-center mt-6">
            <div className="inline-flex flex-col items-center px-10 py-5 rounded-2xl glow-orange"
              style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid #FF6B00' }}>
              <span className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-1">Agora</span>
              <span className="text-2xl font-bold text-[#FF6B00]">Escala</span>
            </div>
          </div>
        </div>

        {/* Right: destaque */}
        <div className="flex flex-col justify-center w-72 animate-slide-right delay-200">
          <div className="p-8 rounded-2xl mb-6"
            style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-sm text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Limitador atual</p>
            <p className="text-[#FF6B00] text-xl font-black leading-tight uppercase tracking-wide">
              Estrutura de Capital para Escala
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic leading-relaxed">
              "Não estamos validando um negócio. Estamos acelerando uma máquina já validada."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
