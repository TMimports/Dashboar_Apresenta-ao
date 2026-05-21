const chain = [
  { label: 'Importação',           desc: 'Origem direta, controle de supply chain',                 highlight: true },
  { label: 'Atacado',              desc: 'Distribuição B2B estruturada',                             highlight: false },
  { label: 'Distribuição',         desc: 'Rede própria de 22 pontos',                                highlight: false },
  { label: 'Varejo Próprio',       desc: 'Tecle Motos — presença física premium',                   highlight: false },
  { label: 'Assistência Técnica',  desc: 'Pós-venda referência do segmento',                        highlight: false },
  { label: 'Ensino / Capacitação', desc: 'Cursos técnicos e formação de mão de obra especializada', highlight: 'education' },
  { label: 'Proteção Veicular',    desc: 'TecleBom — recorrência financeira',                        highlight: false },
  { label: 'Tecnologia',           desc: 'ERP, CRM e IA proprietários',                              highlight: true },
]

const getBg     = h => h === true ? 'rgba(255,107,0,0.06)' : h === 'education' ? 'rgba(255,107,0,0.05)' : '#1C1C1E'
const getBorder = h => h === true ? 'rgba(255,107,0,0.3)'  : h === 'education' ? 'rgba(255,107,0,0.35)' : '#2C2C2E'
const getDot    = h => h ? '#FF6B00' : '#3A3A3C'

export default function S03QuemSomos() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 20% 70%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">03 / Quem Somos</p>
        <h2 className="slide-title text-white leading-tight">TM Elétricas</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Uma plataforma verticalizada de mobilidade elétrica</p>
      </div>

      <div className="slide-row flex-1 items-center min-h-0">
        <div className="flex flex-col gap-0 flex-1 animate-slide-left delay-200">
          {chain.map((item, i) => (
            <div key={i} className="flex items-stretch">
              <div className="flex flex-col items-center w-6 sm:w-8 mr-3 sm:mr-4 flex-shrink-0">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: getDot(item.highlight), marginTop: 14 }} />
                {i < chain.length - 1 && (
                  <div className="w-0.5 flex-1" style={{ background: 'linear-gradient(#3A3A3C, #2C2C2E)', minHeight: 6 }} />
                )}
              </div>
              <div className="flex-1 flex items-center gap-3 px-3 sm:px-4 py-2 mb-1 rounded-xl transition-all duration-300 cursor-default group hover:border-[rgba(255,107,0,0.5)]"
                style={{ background: getBg(item.highlight), border: `1px solid ${getBorder(item.highlight)}` }}>
                <div className="flex-1">
                  <p className="font-semibold text-sm group-hover:text-[#FF6B00] transition-colors"
                    style={{ color: item.highlight === 'education' ? '#FF8C33' : '#FFFFFF' }}>
                    {item.label}
                    {item.highlight === 'education' && (
                      <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider"
                        style={{ background: 'rgba(255,107,0,0.15)', color: '#FF6B00', border: '1px solid rgba(255,107,0,0.3)' }}>
                        pilar estratégico
                      </span>
                    )}
                  </p>
                  <p className="text-[#8E8E93] text-xs mt-0.5 hidden sm:block">{item.desc}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: '#FF6B00' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Diferencial</p>
            <p className="text-white text-sm leading-relaxed">
              A TM atua de <span style={{ color: '#FF6B00' }}>ponta a ponta</span> na cadeia do negócio — e forma os profissionais que sustentam essa operação.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glow-orange" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.3)' }}>
            <p className="text-[#FF6B00] text-sm font-bold leading-snug">
              "Poucos players controlam a cadeia completa — e menos ainda formam quem opera nela."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[['8', 'Elos de cadeia'], ['100%', 'Controle próprio']].map(([val, label]) => (
              <div key={label} className="p-4 rounded-xl text-center card-premium">
                <p className="text-xl sm:text-2xl font-black" style={{ color: '#FF6B00' }}>{val}</p>
                <p className="text-xs text-[#8E8E93] mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
