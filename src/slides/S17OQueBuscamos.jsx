const objetivos = [
  { label: 'Funding para crescimento',                      icon: '📈' },
  { label: 'Estruturação financeira',                       icon: '🏗️' },
  { label: 'Trade finance para importação',                 icon: '🌐' },
  { label: 'Capital de giro estruturado',                   icon: '🔄' },
  { label: 'Funding para expansão operacional',             icon: '🚀' },
  { label: 'Apoio estratégico — funding ao consumidor',     icon: '🤝' },
]

export default function S17OQueBuscamos() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">17 / O Que Buscamos</p>
        <h2 className="text-4xl font-black text-white leading-tight">O que buscamos</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Mais do que capital: um parceiro estratégico de crescimento</p>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Objetivos */}
        <div className="flex-1 animate-slide-left delay-200">
          <div className="grid grid-cols-2 gap-3">
            {objetivos.map((obj, i) => (
              <div key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-xl card-premium group cursor-default">
                <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{obj.icon}</div>
                <p className="text-[#AEAEB2] text-sm group-hover:text-white transition-colors leading-tight">{obj.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: funding ask */}
        <div className="w-80 flex flex-col gap-5 animate-slide-right delay-300">
          <div className="p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Valor pretendido</p>
            <p className="text-6xl font-black text-[#FF6B00] leading-none">R$5M</p>
            <div className="w-16 h-0.5 my-3 mx-auto" style={{ background: 'rgba(255,107,0,0.4)' }} />
            <p className="text-[#AEAEB2] text-sm">Suportar aceleração da TM Elétricas mantendo disciplina operacional e ganho de escala.</p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Buscamos um parceiro capaz de acelerar uma empresa que já provou execução."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
