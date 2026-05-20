import { TrendingUp, Building, Globe, RefreshCw, Rocket, Handshake } from 'lucide-react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const objetivos = [
  { icon: TrendingUp, label: 'Funding para crescimento' },
  { icon: Building,   label: 'Estruturação financeira' },
  { icon: Globe,      label: 'Trade finance para importação' },
  { icon: RefreshCw,  label: 'Capital de giro estruturado' },
  { icon: Rocket,     label: 'Funding para expansão operacional' },
  { icon: Handshake,  label: 'Apoio estratégico — funding ao consumidor' },
]

const allocationData = [
  { name: 'Capital de Giro',  value: 40, color: '#FF6B00' },
  { name: 'Importação',       value: 30, color: '#FF8C33' },
  { name: 'Expansão Varejo',  value: 20, color: '#CC5500' },
  { name: 'Tecnologia',       value: 10, color: '#994000' },
]

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="px-3 py-2 rounded-lg" style={{ background: '#1C1C1E', border: '1px solid #FF6B00' }}>
      <p className="text-white font-bold text-sm">{payload[0]?.name}: {payload[0]?.value}%</p>
    </div>
  )
}

export default function S17OQueBuscamos() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden slide-pad"
      style={{ background: '#0A0A0A' }}>

      <div className="absolute top-0 left-0 right-0 h-0.5 orange-line" />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,0,0.07) 0%, transparent 70%)'
      }} />

      <div className="mb-4 md:mb-6 animate-fade-up">
        <p className="text-[#FF6B00] text-xs font-medium tracking-widest uppercase mb-2">17 / O Que Buscamos</p>
        <h2 className="slide-title text-white leading-tight">O que buscamos</h2>
        <p className="text-[#8E8E93] mt-1 text-sm">Mais do que capital: um parceiro estratégico de crescimento</p>
      </div>

      <div className="slide-row flex-1 min-h-0 items-center">
        <div className="flex-1 animate-slide-left delay-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {objetivos.map((obj, i) => {
              const Icon = obj.icon
              return (
                <div key={i}
                  className="flex items-center gap-4 px-4 sm:px-5 py-3 sm:py-4 rounded-xl card-premium group cursor-default">
                  <div className="icon-box">
                    <Icon size={18} />
                  </div>
                  <p className="text-[#AEAEB2] text-sm group-hover:text-white transition-colors leading-tight">{obj.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="slide-sidebar-lg flex flex-col gap-4 animate-slide-right delay-300">
          <div className="p-6 sm:p-8 rounded-2xl text-center glow-orange"
            style={{ background: 'rgba(255,107,0,0.08)', border: '1px solid rgba(255,107,0,0.5)' }}>
            <p className="text-xs text-[#FF6B00] uppercase tracking-widest font-medium mb-3">Valor pretendido</p>
            <p className="text-5xl sm:text-6xl font-black text-[#FF6B00] leading-none">R$5M</p>
            <div className="w-16 h-0.5 my-3 mx-auto" style={{ background: 'rgba(255,107,0,0.4)' }} />
            <p className="text-[#AEAEB2] text-sm">Suportar aceleração mantendo disciplina operacional e ganho de escala.</p>
          </div>

          <div style={{ height: 180 }}>
            <p className="text-xs text-[#8E8E93] uppercase tracking-widest font-medium mb-2">Alocação prevista dos R$5M</p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={68}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {allocationData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => <span style={{ color: '#8E8E93', fontSize: 10 }}>{value}</span>}
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <blockquote className="border-l-2 border-[#FF6B00] pl-4">
            <p className="text-sm text-[#AEAEB2] italic">"Buscamos um parceiro capaz de acelerar uma empresa que já provou execução."</p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
