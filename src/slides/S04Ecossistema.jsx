const chain = [
  { label: 'TM GROUP',        sub: 'Grupo de Mobilidade Elétrica',        color: '#FF6B00', tier: 'top' },
  { label: 'TM IMPORTS',      sub: 'Importação / Atacado',                color: '#FFFFFF', tier: 'mid' },
  { label: 'TECLE MOTOS',     sub: 'Distribuição / Varejo',               color: '#FFFFFF', tier: 'mid' },
  { label: 'TM ACADEMY',      sub: 'Capacitação e Treinamento Técnico',   color: '#FF8C33', tier: 'key' },
  { label: 'TM TECH',         sub: 'Tecnologia + IA Proprietária',        color: '#AEAEB2', tier: 'low' },
  { label: 'PÓS-VENDA',       sub: 'Oficinas próprias',                   color: '#AEAEB2', tier: 'low' },
  { label: 'TECLEBOM',        sub: 'Proteção Veicular',                   color: '#AEAEB2', tier: 'low' },
  { label: 'CLIENTE FINAL',   sub: 'Experiência completa',                color: '#8E8E93', tier: 'end' },
]

const tierStyle = {
  top: { bg: 'rgba(255,107,0,0.12)', border: 'rgba(255,107,0,0.55)' },
  key: { bg: 'rgba(255,140,51,0.08)', border: 'rgba(255,140,51,0.35)' },
  mid: { bg: '#1C1C1E', border: '#2C2C2E' },
  low: { bg: '#161616', border: '#1C1C1E' },
  end: { bg: '#111111', border: '#1C1C1E' },
}

export default function S04Ecossistema() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">04 / Ecossistema</p>
        <h2 className="slide-title text-white">Uma plataforma integrada de mobilidade elétrica</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Da importação ao cliente final — sem intermediários.</p>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Cadeia de valor */}
        <div className="flex-1 flex flex-col justify-between py-1 gap-1 animate-fade-in delay-200">
          {chain.map((node, i) => (
            <div key={i} className="flex flex-col items-start">
              {i > 0 && (
                <div className="flex items-center gap-1 pl-3 mb-0.5">
                  <div className="w-0.5 h-2.5" style={{ background: '#2C2C2E' }} />
                </div>
              )}
              <div
                className="w-full flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl transition-all duration-300 hover:scale-[1.01] cursor-default"
                style={{
                  background: tierStyle[node.tier].bg,
                  border: `1px solid ${tierStyle[node.tier].border}`,
                }}>
                <p className="font-black text-xs sm:text-sm leading-tight flex-shrink-0" style={{ color: node.color }}>
                  {node.label}
                </p>
                <p className="text-[10px] hidden sm:block" style={{ color: '#8E8E93' }}>{node.sub}</p>
                {node.tier === 'key' && (
                  <span className="ml-auto text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded flex-shrink-0"
                    style={{ background: 'rgba(255,107,0,0.15)', color: '#FF6B00', border: '1px solid rgba(255,107,0,0.3)' }}>
                    Pilar
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar direita */}
        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">

          <div className="p-4 sm:p-5 rounded-2xl flex-1" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Case Estrutural 2025</p>
            <p className="text-white text-sm leading-relaxed mb-3">
              Estrutura franqueadora usada como{' '}
              <span className="text-[#FF6B00] font-semibold">diagnóstico de auditoria interna</span> (top-down).
            </p>
            <p className="text-[#8E8E93] text-xs leading-relaxed">
              Permitiu identificar gargalos, reestruturar processos e capacitar setores com profissionais de alta performance antes de abrir o canal de expansão acelerada.
            </p>
          </div>

          <div className="p-4 rounded-xl glow-orange" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-[10px] font-bold uppercase tracking-widest mb-2">TM ACADEMY — Pilar Estratégico</p>
            <p className="text-[#AEAEB2] text-xs leading-relaxed">
              A mobilidade elétrica só escala se houver formação de mão de obra técnica para sustentar o pós-venda e o padrão operacional das oficinas.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-3">
            <p className="text-white font-semibold text-sm italic leading-relaxed">
              "Não vendemos apenas scooters. Controlamos toda a cadeia de valor."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
