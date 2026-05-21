import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts'

const diferenciais = [
  { label: 'Fidelização',         desc: 'Cliente que retorna',        pct: 90, fill: '#FF6B00' },
  { label: 'Recorrência',         desc: 'Compras repetidas',          pct: 85, fill: '#FF8C33' },
  { label: 'Confiança de marca',  desc: 'Reputação consolidada',      pct: 95, fill: '#CC5500' },
  { label: 'Menor churn',         desc: 'Retenção elevada',           pct: 88, fill: '#994000' },
  { label: 'Maior LTV',           desc: 'Lifetime value do cliente',  pct: 92, fill: '#FF6B00' },
]

const radialData = diferenciais.map(d => ({ name: d.label, value: d.pct, fill: d.fill }))

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs">{payload[0]?.name}</p>
      <p className="text-white font-bold">{payload[0]?.value}%</p>
    </div>
  )
}

export default function S08AssistenciaTecnica() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 20% 60%, rgba(255,107,0,0.06) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-8 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">08 / Assistência Técnica</p>
        <h2 className="slide-title text-white">A melhor assistência técnica do segmento</h2>
      </div>

      <div className="slide-row flex-1 min-h-0 items-center">
        <div className="slide-sidebar flex flex-col gap-4 animate-slide-left delay-200">
          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Estrutura técnica</p>
            <p className="text-white text-sm leading-relaxed">
              Estrutura técnica <span style={{ color: '#FF6B00' }}>consolidada</span> com profissionais capacitados internamente e processos de qualidade.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glow-orange"
            style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-2">Barreira de entrada</p>
            <p className="text-white text-sm leading-relaxed">
              A assistência técnica é uma barreira real do setor.{' '}
              <span style={{ color: '#FF8C33' }}>A formação técnica da equipe é o que torna essa barreira sustentável.</span>
            </p>
          </div>

          <div style={{ height: 130, minHeight: 90, overflow: 'hidden' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Indicadores de pós-venda</p>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%"
                data={radialData} startAngle={180} endAngle={-180}>
                <RadialBar dataKey="value" cornerRadius={4} background={{ fill: '#1C1C1E' }} />
                <Tooltip content={<CustomTooltip />} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,107,0,0.04)', border: '1px solid rgba(255,107,0,0.2)' }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
            <p className="text-[#AEAEB2] text-xs sm:text-sm">
              <span style={{ color: '#FF8C33' }}>Capacitação técnica contínua</span> — profissionais treinados sustentam qualidade e fidelização.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Vendemos confiança, não apenas mobilidade."</p>
          </blockquote>
        </div>

        <div className="flex-1 flex flex-col gap-3 animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-1">Pós-venda forte gera</p>
          {diferenciais.map((item, i) => (
            <div key={i}
              className="px-4 sm:px-5 py-3 sm:py-4 rounded-xl card-premium group cursor-default">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-[#FF6B00] transition-colors">{item.label}</p>
                  <p className="text-[#8E8E93] text-xs hidden sm:block">{item.desc}</p>
                </div>
                <span className="text-[#FF6B00] font-black text-xl">{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#2C2C2E' }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${item.pct}%`, background: `linear-gradient(90deg, #CC5500, ${item.fill})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
