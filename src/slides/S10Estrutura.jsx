import { DollarSign, Megaphone, Monitor, Bot, Truck, Wrench, TrendingUp, Handshake } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const areas = [
  { icon: DollarSign,  label: 'Financeiro' },
  { icon: Megaphone,   label: 'Marketing' },
  { icon: Monitor,     label: 'TI' },
  { icon: Bot,         label: 'Inteligência Artificial' },
  { icon: Truck,       label: 'Logística' },
  { icon: Wrench,      label: 'Setor Técnico' },
  { icon: TrendingUp,  label: 'Comercial' },
  { icon: Handshake,   label: 'Pós-venda' },
]

const readinessData = [
  { area: 'Financeiro', score: 95, fill: '#FF6B00' },
  { area: 'Comercial',  score: 92, fill: '#FF8C33' },
  { area: 'Logística',  score: 88, fill: '#CC5500' },
  { area: 'TI',         score: 90, fill: '#FF6B00' },
  { area: 'Pós-venda',  score: 93, fill: '#FF8C33' },
  { area: 'Marketing',  score: 85, fill: '#994000' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-[#AEAEB2] text-xs">{label}</p>
      <p className="text-white font-bold">{payload[0].value}% pronto</p>
    </div>
  )
}

export default function S10Estrutura() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,107,0,0.04) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">10 / Estrutura Operacional</p>
        <h2 className="slide-title text-white">Estrutura corporativa pronta para escalar</h2>
      </div>

      <div className="slide-row flex-1 min-h-0">
        <div className="flex-1 animate-fade-in delay-200">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {areas.map((area, i) => {
              const Icon = area.icon
              return (
                <div key={i}
                  className="flex flex-col items-center gap-2 p-4 sm:p-5 rounded-xl card-premium group cursor-default text-center">
                  <div className="icon-box">
                    <Icon size={18} />
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium leading-tight group-hover:text-[#FF6B00] transition-colors">{area.label}</p>
                  <div className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: '#FF6B00' }} />
                </div>
              )
            })}
          </div>

          <div className="mt-4" style={{ height: 130 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Prontidão operacional por área (%)</p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={readinessData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="area" tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis domain={[70, 100]} tick={{ fill: '#8E8E93', fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,107,0,0.05)' }} />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={36}>
                  {readinessData.map((d, i) => <Cell key={i} fill={d.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="slide-sidebar flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-5 sm:p-6 rounded-2xl" style={{ background: '#1C1C1E', border: '1px solid #2C2C2E' }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-3">O que isso significa</p>
            <p className="text-white text-sm leading-relaxed">
              O desafio atual não é montar estrutura. É{' '}
              <span style={{ color: '#FF6B00' }}>alimentar uma estrutura já pronta</span>.
            </p>
          </div>

          <div className="p-5 sm:p-7 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.4)' }}>
            <p className="text-[#FF6B00] font-black text-base leading-snug">
              "A estrutura precedeu a escala."
            </p>
          </div>

          <div className="flex gap-3">
            {[['8', 'Áreas consolidadas'], ['100%', 'Operacional ativo']].map(([val, label]) => (
              <div key={label} className="flex-1 p-4 rounded-xl text-center card-premium">
                <p className="text-xl sm:text-2xl font-black" style={{ color: '#FF6B00' }}>{val}</p>
                <p className="text-[#8E8E93] text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Construímos a base antes da aceleração."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
