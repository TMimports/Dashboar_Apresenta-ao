const competencias = [
  { area: 'Varejo', detail: 'Gestão de múltiplos pontos de venda e distribuição' },
  { area: 'Tecnologia', detail: 'Sistemas, IA e arquitetura de segurança em TI' },
  { area: 'Assistência Técnica', detail: 'Padrão técnico proprietário e equipe capacitada' },
  { area: 'Logística', detail: 'Cadeia de suprimentos e gestão de estoque' },
  { area: 'Importação', detail: 'Gestão de containers, Trade Finance e despacho' },
  { area: 'Expansão', detail: 'Franquias, governança de escala e due diligence' },
]

export default function S03Fundadores() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 40% 60% at 18% 50%, rgba(255,107,0,0.04) 0%, transparent 65%)',
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">03 / Fundadores</p>
        <h2 className="slide-title text-white">Matriz de Execução</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">

        {/* Card executivo */}
        <div className="slide-sidebar-lg flex flex-col gap-4 animate-slide-left delay-200">

          <div className="p-5 sm:p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.35)' }}>

            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-black text-2xl"
                style={{
                  background: 'rgba(255,107,0,0.15)',
                  border: '2px solid rgba(255,107,0,0.6)',
                  color: '#FF6B00',
                }}>
                F
              </div>
              <div>
                <p className="text-white font-black text-base sm:text-lg leading-tight">Felipe Henrique Silva</p>
                <p style={{ color: '#FF6B00', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Empreendedor & Fundador
                </p>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                'Graduado em Sistemas de Informação',
                'Pós-Graduado em Segurança da Informação',
                'MBA em Arquitetura de Segurança em TI',
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1 flex-shrink-0 rounded-full mt-1.5" style={{ background: '#FF6B00', height: 14 }} />
                  <p className="text-[#AEAEB2] text-xs sm:text-sm">{f}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255,107,0,0.18)' }}>
              <p className="text-[#8E8E93] text-xs leading-relaxed">
                Quase <strong className="text-white">10 anos</strong> de atuação prática unificando varejo, tecnologia, assistência técnica, logística, importação e expansão.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <blockquote className="border-l-2 border-[#FF6B00] pl-3">
              <p className="text-white font-semibold text-sm italic leading-relaxed">
                "Somos operadores do setor, não investidores oportunistas."
              </p>
            </blockquote>
          </div>
        </div>

        {/* Matriz de competências */}
        <div className="flex-1 flex flex-col gap-3 animate-slide-right delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium">Domínios de Competência</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 content-start">
            {competencias.map((c, i) => (
              <div
                key={i}
                className="p-4 rounded-xl card-premium flex flex-col"
                style={{ minHeight: 80 }}>
                <p className="text-white font-bold text-sm mb-1">{c.area}</p>
                <p className="text-[#8E8E93] text-xs leading-relaxed flex-1">{c.detail}</p>
                <div className="mt-2 w-6 h-0.5 rounded-full" style={{ background: '#FF6B00' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
