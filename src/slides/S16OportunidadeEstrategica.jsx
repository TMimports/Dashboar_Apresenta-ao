const impacts = [
  'Aumento substancial do volume de vendas',
  'Expansão acelerada da base de clientes',
  'Maior recorrência financeira',
  'Aumento do ticket médio',
  'Fortalecimento do ecossistema TM',
  'Crescimento exponencial do varejo',
]

export default function S16OportunidadeEstrategica() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 70% 40%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">16 / Oportunidade Estratégica</p>
        <h2 className="text-4xl font-black text-white">O próximo nível: financiamento ao consumidor final</h2>
      </div>

      <div className="flex gap-10 flex-1 min-h-0 items-center">
        {/* Scenario comparison */}
        <div className="flex flex-col gap-4 w-72 animate-slide-left delay-200">
          <div className="p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Cenário Atual</p>
            <p className="text-white text-sm leading-relaxed">
              Grande parte do mercado depende de pagamento <span style={{ color: '#AEAEB2' }}>à vista</span>.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 py-2">
            <div className="w-0.5 h-8" style={{ background: 'linear-gradient(#2C2C2E, #FF6B00)' }} />
            <div className="px-4 py-1.5 rounded-full text-xs font-bold"
              style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.3)', color: '#FF6B00' }}>
              próximo passo
            </div>
            <div className="w-0.5 h-8" style={{ background: 'linear-gradient(#FF6B00, #FF8C33)' }} />
          </div>

          <div className="p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Cenário Futuro</p>
            <p className="text-white text-sm font-semibold leading-relaxed">
              Cliente financiando a própria scooter.
            </p>
          </div>
        </div>

        {/* Impacts */}
        <div className="flex-1 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Impacto esperado</p>
          <div className="flex flex-col gap-3">
            {impacts.map((item, i) => (
              <div key={i}
                className="flex items-center gap-4 px-5 py-4 rounded-xl card-premium group cursor-default">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)', color: '#FF6B00' }}>
                  {i + 1}
                </div>
                <p className="text-[#AEAEB2] text-sm group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-64 flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] font-black text-base leading-snug">
              O crédito ao consumidor pode transformar estruturalmente a companhia.
            </p>
          </div>
          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Se destravarmos crédito, destravamos escala."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
