const nodes = [
  { id: 'tm',    label: 'TM ELÉTRICAS',       sub: 'Importação + Atacado',    color: '#FF6B00', highlight: true },
  { id: 'tecle', label: 'TECLE MOTOS',         sub: 'Varejo + Distribuição',   color: '#FFFFFF', highlight: false },
  { id: 'at',    label: 'ASSISTÊNCIA TÉCNICA', sub: 'Pós-venda especializado', color: '#AEAEB2', highlight: false },
  { id: 'tb',    label: 'TECLEBOM',            sub: 'Proteção Veicular',       color: '#AEAEB2', highlight: false },
  { id: 'cf',    label: 'CLIENTE FINAL',       sub: 'Experiência completa',    color: '#8E8E93', highlight: false },
]

const tags = ['Importação', 'Atacado', 'Varejo', 'Pós-venda', 'Proteção', 'Tecnologia']

export default function S04Ecossistema() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">04 / Ecossistema</p>
        <h2 className="slide-title text-white">Um ecossistema integrado de mobilidade elétrica</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Da importação ao cliente final</p>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col justify-between flex-1 py-2 sm:py-4 animate-fade-in delay-200">
          {nodes.map((node, i) => (
            <div key={node.id} className="flex flex-col items-center">
              {i > 0 && (
                <div className="flex flex-col items-center mb-1 sm:mb-2">
                  <div className="w-0.5 h-3 sm:h-4" style={{ background: 'linear-gradient(#2C2C2E, #3A3A3C)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: '#3A3A3C' }} />
                  <div className="w-0.5 h-3 sm:h-4" style={{ background: 'linear-gradient(#3A3A3C, #2C2C2E)' }} />
                </div>
              )}
              <div
                className="flex flex-col items-center text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 cursor-default group hover:scale-105 w-full"
                style={{
                  background: i === 0 ? 'rgba(255,107,0,0.08)' : '#1C1C1E',
                  border: `1px solid ${i === 0 ? 'rgba(255,107,0,0.5)' : '#2C2C2E'}`,
                  maxWidth: 280
                }}>
                <p className="font-black text-xs sm:text-sm tracking-wide" style={{ color: node.color }}>{node.label}</p>
                <p className="text-xs mt-0.5 hidden sm:block" style={{ color: '#8E8E93' }}>{node.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slide-sidebar-lg flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl flex-1" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Como opera</p>
            <div className="space-y-3">
              {[
                ['TM importa e abastece.', 'Supply chain sob controle.'],
                ['Tecle distribui e monetiza.', 'Rede de 22 pontos.'],
                ['Grupo captura margem', 'em toda a cadeia.'],
              ].map(([line1, line2], i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ background: '#FF6B00', height: 36 }} />
                  <div>
                    <p className="text-white text-sm font-semibold">{line1}</p>
                    <p className="text-[#8E8E93] text-xs">{line2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glow-orange" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-sm font-bold leading-snug mb-3">
              "Não vendemos apenas scooters. Controlamos toda a experiência do cliente."
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <span key={t} className="text-[10px] px-2 py-1 rounded font-medium text-[#FF6B00]"
                  style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
