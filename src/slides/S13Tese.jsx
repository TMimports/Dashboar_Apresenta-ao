import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList, ReferenceLine } from 'recharts'

const impacts = [
  'Aumento da previsibilidade de importação',
  'Ampliação da capacidade de estoque',
  'Redução de ruptura comercial',
  'Aumento da velocidade operacional',
  'Ganho acelerado de market share',
  'Expansão do varejo Tecle Motos',
]

const chartData = [
  { label: 'Hoje',        containers: 20, resultado: 6,  fill: '#3A3A3C',  fillR: '#994000' },
  { label: 'Com R$5M',   containers: 40, resultado: 12, fill: '#FF6B00',  fillR: '#FF8C33' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="font-bold" style={{ color: p.color || '#FF6B00' }}>
          {p.name === 'containers' ? `${p.value} containers/ano` : `≈ R$${p.value}M bruto`}
        </p>
      ))}
    </div>
  )
}

export default function S13Tese() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">13 / Tese dos R$5 Milhões</p>
        <h2 className="slide-title text-white">Como R$5 milhões transformam a operação</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex-1 flex flex-col animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Containers / Resultado bruto anual</p>
          <div className="flex-1" style={{ minHeight: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 24, right: 20, left: -10, bottom: 8 }} barGap={6}>
                <XAxis dataKey="label" tick={{ fill: '#AEAEB2', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <ReferenceLine y={20} stroke="#2C2C2E" strokeDasharray="4 4" />
                <Bar dataKey="containers" radius={[6, 6, 0, 0]} maxBarSize={64} name="containers">
                  {chartData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                  <LabelList dataKey="containers" position="top"
                    style={{ fill: '#AEAEB2', fontSize: 13, fontWeight: 700 }}
                    formatter={v => `${v} cont.`} />
                </Bar>
                <Bar dataKey="resultado" radius={[6, 6, 0, 0]} maxBarSize={64} name="resultado">
                  {chartData.map((d, i) => <Cell key={i} fill={d.fillR} />)}
                  <LabelList dataKey="resultado" position="top"
                    style={{ fill: '#FF6B00', fontSize: 13, fontWeight: 700 }}
                    formatter={v => `R$${v}M`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex gap-3 mt-2">
            <div className="flex-1 p-4 rounded-xl text-center" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
              <p className="text-3xl sm:text-4xl font-black text-white">~20</p>
              <p className="text-[#8E8E93] text-xs mt-1">containers hoje</p>
              <p className="text-[#8E8E93] text-xs">≈ R$6M bruto</p>
            </div>
            <div className="flex items-center justify-center px-2">
              <div className="text-[#FF6B00] font-black text-xl">→</div>
            </div>
            <div className="flex-1 p-4 rounded-xl text-center glow-orange"
              style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
              <p className="text-3xl sm:text-4xl font-black text-[#FF6B00]">~40</p>
              <p className="text-white text-xs mt-1">com funding</p>
              <p className="text-[#AEAEB2] text-xs">≈ R$12M potencial</p>
            </div>
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">O funding permite</p>
            <div className="flex flex-col gap-2">
              {impacts.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#FF6B00' }} />
                  <p className="text-[#AEAEB2] text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl" style={{ background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.2)' }}>
            <p className="text-[#FF6B00] font-bold text-sm mb-1">O funding não cria demanda.</p>
            <p className="text-[#AEAEB2] text-sm">O funding remove o gargalo do crescimento.</p>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Hoje crescemos no limite do capital disponível."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
