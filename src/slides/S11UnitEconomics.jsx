import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts'

const cycleData = [
  { canal: 'Atacado',  dias: 28, fill: '#FF6B00' },
  { canal: 'Varejo',   dias: 60, fill: '#994000' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      <p className="text-white font-bold">{payload[0].value} dias de ciclo</p>
    </div>
  )
}

export default function S11UnitEconomics() {
  return (
    <div className="relative w-full h-full flex flex-col px-16 py-10 overflow-hidden"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">11 / Unit Economics</p>
        <h2 className="text-4xl font-black text-white">Uma operação economicamente previsível</h2>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Container KPIs */}
        <div className="flex flex-col gap-3 w-64 animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium">Por container</p>

          {[
            { label: 'Ticket médio',         value: '~R$ 725k',  sub: 'Entre R$600k–R$850k',   highlight: false },
            { label: 'Capacidade média',     value: '~150',      sub: 'scooters por container', highlight: false },
            { label: 'Lucro bruto médio',    value: '~R$ 300k',  sub: '+ margem varejo Tecle',  highlight: true },
          ].map((kpi, i) => (
            <div key={i}
              className={`p-5 rounded-xl ${kpi.highlight ? 'glow-orange' : ''}`}
              style={{
                background: kpi.highlight ? 'rgba(255,107,0,0.08)' : '#1C1C1E',
                border: `1px solid ${kpi.highlight ? 'rgba(255,107,0,0.4)' : '#2C2C2E'}`
              }}>
              <p className="text-xs text-[#8E8E93] uppercase tracking-widest mb-1">{kpi.label}</p>
              <p className="font-black text-2xl" style={{ color: kpi.highlight ? '#FF6B00' : '#FFFFFF' }}>{kpi.value}</p>
              <p className="text-xs text-[#8E8E93] mt-1">{kpi.sub}</p>
            </div>
          ))}
        </div>

        {/* Cycle chart */}
        <div className="flex-1 flex flex-col animate-fade-in delay-300">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-4">Ciclo operacional (dias)</p>
          <div className="flex-1" style={{ minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cycleData} layout="vertical" margin={{ top: 10, right: 40, left: 10, bottom: 10 }}>
                <XAxis type="number" tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 70]} />
                <YAxis type="category" dataKey="canal" tick={{ fill: '#AEAEB2', fontSize: 13, fontWeight: 600 }} axisLine={false} tickLine={false} width={70} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <ReferenceLine x={30} stroke="#2C2C2E" strokeDasharray="4 4" label={{ value: '30d', fill: '#3A3A3C', fontSize: 10 }} />
                <Bar dataKey="dias" radius={[0, 6, 6, 0]} maxBarSize={48}>
                  {cycleData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right KPIs */}
        <div className="w-56 flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest mb-2">Inadimplência</p>
            <p className="text-4xl font-black text-white">≈ 0%</p>
            <p className="text-[#8E8E93] text-xs mt-1">Venda predominantemente à vista</p>
          </div>

          <div className="flex-1 p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Margem bruta derivada</p>
            <p className="text-3xl font-black" style={{ color: '#FF6B00' }}>~41%</p>
            <p className="text-[#8E8E93] text-xs mt-1">R$300k / R$725k — derivado do roteiro</p>
            <div className="mt-3 h-0.5 rounded-full" style={{ background: '#2C2C2E' }}>
              <div className="h-full rounded-full" style={{ width: '41%', background: 'linear-gradient(90deg, #CC5500, #FF6B00)' }} />
            </div>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-3">
            <p className="text-xs text-[#AEAEB2] italic">"Ciclo rápido, baixa inadimplência e alta previsibilidade."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
