const systems = [
  { label: 'ERP Próprio',          icon: '⚙️',  desc: 'Gestão operacional centralizada' },
  { label: 'CRM Próprio',          icon: '👤',  desc: 'Relacionamento com cliente' },
  { label: 'Controle Operacional', icon: '📊',  desc: 'Visibilidade em tempo real' },
  { label: 'Controle de Ponto',    icon: '⏱️',  desc: 'RH e produtividade' },
  { label: 'Gestão Logística',     icon: '🚚',  desc: 'Rastreio e distribuição' },
  { label: 'Gestão Comercial',     icon: '💼',  desc: 'Pipeline e vendas' },
]

export default function S09Tecnologia() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">09 / Tecnologia &amp; IA</p>
        <h2 className="text-4xl font-black text-white">Tecnologia proprietária e cultura de inovação</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0">
        {/* Left: grid systems */}
        <div className="flex-1 animate-fade-in delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Sistemas próprios</p>
          <div className="grid grid-cols-3 gap-3 h-full">
            {systems.map((sys, i) => (
              <div key={i}
                className="flex flex-col gap-2 p-4 rounded-xl card-premium group cursor-default"
                style={{ animationDelay: `${0.1 * i + 0.2}s` }}>
                <div className="text-2xl group-hover:scale-110 transition-transform w-fit">{sys.icon}</div>
                <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors leading-tight">{sys.label}</p>
                <p className="text-[#8E8E93] text-xs">{sys.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-72 flex flex-col gap-4 animate-slide-right delay-300">
          {/* TI + IA destaque */}
          <div className="p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Equipe interna dedicada</p>
            <div className="flex gap-3">
              {['TI', 'Inteligência Artificial'].map((tag, i) => (
                <div key={i} className="flex-1 py-3 rounded-xl text-center"
                  style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)' }}>
                  <p className="text-[#FF6B00] font-bold text-sm">{tag}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Objetivo</p>
            <p className="text-white text-sm leading-relaxed">
              Escalar operação com <span style={{ color: '#FF6B00' }}>eficiência e previsibilidade</span> — sem dependência de fornecedores externos.
            </p>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest mb-2">Processos</p>
            <p className="text-[#FF6B00] font-bold">Automatizados</p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Crescemos com tecnologia própria, não dependência."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
