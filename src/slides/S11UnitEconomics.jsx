import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine, LineChart, Line, CartesianGrid } from 'recharts'

const cycleData = [
  { canal: 'Atacado',  dias: 28, fill: '#FF6B00' },
  { canal: 'Varejo',   dias: 60, fill: '#994000' },
]

const marginTrend = [
  { mes: 'Jan', margem: 38 },
  { mes: 'Fev', margem: 40 },
  { mes: 'Mar', margem: 39 },
  { mes: 'Abr', margem: 42 },
  { mes: 'Mai', margem: 41 },
  { mes: 'Jun', margem: 43 },
]

const CycleTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-4 py-3 rounded-xl" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs mb-1">{label}</p>
      <p className="text-white font-bold">{payload[0].value} dias de ciclo</p>
    </div>
  )
}

const MarginTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs">{label}</p>
      <p className="text-[#FF6B00] font-bold">{payload[0].value}% margem</p>
    </div>
  )
}

export default function S11UnitEconomics() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">11 / Unit Economics</p>
        <h2 className="slide-title text-white">Uma operação economicamente previsível</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex flex-col gap-3 slide-sidebar animate-slide-left delay-200">
          <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium">Por container</p>

          {[
            { label: 'Ticket médio',      value: '~R$ 725k', sub: 'Entre R$600k–R$850k',   highlight: false },
            { label: 'Capacidade média',  value: '~150',     sub: 'scooters por container', highlight: false },
            { label: 'Lucro bruto médio', value: '~R$ 300k', sub: '+ margem varejo Tecle',  highlight: true },
          ].map((kpi, i) => (
            <div key={i}
              className={`p-4 sm:p-5 rounded-xl ${kpi.highlight ? 'glow-orange' : ''}`}
              style={{
                background: kpi.highlight ? 'rgba(255,107,0,0.08)' : '#1C1C1E',
                border: `1px solid ${kpi.highlight ? 'rgba(255,107,0,0.4)' : '#2C2C2E'}`
              }}>
              <p className="text-xs text-[#8E8E93] uppercase tracking-widest mb-1">{kpi.label}</p>
              <p className="font-black text-xl sm:text-2xl" style={{ color: kpi.highlight ? '#FF6B00' : '#FFFFFF' }}>{kpi.value}</p>
              <p className="text-xs text-[#8E8E93] mt-1">{kpi.sub}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-4 animate-fade-in delay-300">
          <div className="flex-1" style={{ minHeight: 120 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Ciclo operacional (dias)</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cycleData} layout="vertical" margin={{ top: 5, right: 40, left: 10, bottom: 5 }}>
                <XAxis type="number" tick={{ fill: '#8E8E93', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 70]} />
                <YAxis type="category" dataKey="canal" tick={{ fill: '#AEAEB2', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} width={65} />
                <Tooltip content={<CycleTip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <ReferenceLine x={30} stroke="#2C2C2E" strokeDasharray="4 4" label={{ value: '30d', fill: '#3A3A3C', fontSize: 10 }} />
                <Bar dataKey="dias" radius={[0, 6, 6, 0]} maxBarSize={48}>
                  {cycleData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex-1" style={{ minHeight: 120 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Tendência de margem bruta (%)</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marginTrend} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1C1C1E" />
                <XAxis dataKey="mes" tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis domain={[35, 46]} tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<MarginTip />} />
                <Line type="monotone" dataKey="margem" stroke="#FF6B00" strokeWidth={2.5}
                  dot={{ fill: '#FF6B00', r: 4 }} activeDot={{ r: 6, fill: '#FF8C33' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slide-sidebar-sm flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest mb-2">Inadimplência</p>
            <p className="text-3xl sm:text-4xl font-black text-white">≈ 0%</p>
            <p className="text-[#8E8E93] text-xs mt-1">Venda predominantemente à vista</p>
          </div>

          <div className="flex-1 p-4 sm:p-5 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">Margem bruta</p>
            <p className="text-2xl sm:text-3xl font-black" style={{ color: '#FF6B00' }}>~41%</p>
            <p className="text-[#8E8E93] text-xs mt-1">R$300k / R$725k</p>
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
